<template>
  <b-card-text>
    <template v-if="loading">
      <div class="loading-container">
        <Loading />
      </div>
    </template>
    <template v-else-if="currentPatient && currentPatient.observations && currentPatient.observations.length > 0">
      <b-modal id="observations-modal" title="FHIR" size="xl">
        <pre>
          {{ modalData }}
        </pre>
        <template #modal-footer>
          <div class="d-flex justify-content-end gap-3">
            <b-button variant="success"> Download </b-button>
            <b-button variant="primary"> Save </b-button>
          </div>
        </template>
      </b-modal>
      <b-modal id="confirm-save" title="Save" size="l">
        <div>
          <div>
            Confirm saving Observation :
          </div>
          <pre>
          {{ modalData }}
        </pre>
        </div>
        <template #modal-footer>
          <div class="d-flex justify-content-end gap-3">
            <b-button variant="primary" @click="handleSave"> Save </b-button>
          </div>
        </template>
      </b-modal>
      <div id="filters" class="filters-box d-flex p-2 gap-3">
        <div>
          <label for="filters-start-date">Start Date</label>
          <b-form-datepicker id="filters-start-date" v-model="filters.startDate" class="mb-2"></b-form-datepicker>
        </div>
        <div>
          <label for="filters-end-date">End Date</label>
          <b-form-datepicker id="filters-end-date" v-model="filters.endDate" class="mb-2"></b-form-datepicker>
        </div>
        <div class="d-flex flex-column filters-category">
          <label for="filters-category">Category:</label>
          <b-form-select id="filters-category" class="mb-2 rounded-2">
            <b-form-select-option value="all"> All </b-form-select-option>
            <b-form-select-option :value="option" v-for="option in categories" :key="option">
              {{ option }}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div class="d-flex flex-column filters-category">
          <label for="filters-category">Code:</label>
          <b-form-select id="filters-category" class="mb-2 rounded-2">
            <b-form-select-option value="all"> All </b-form-select-option>
            <b-form-select-option :value="option" v-for="option in codes" :key="option">
              {{ option }}
            </b-form-select-option>
          </b-form-select>
        </div>
      </div>
      <!-- <div v-for="entry in currentPatient?.observations" :key="entry.id">
        <b-row>
          <b-col cols="11">
            <div class="enrtires-box-content" v-html="entry.html" />
          </b-col>
          <b-col cols="1" class="h-100">
            <b-form-select
              :options="docOptions"
              v-model="entry.selected"
              @change="showModal(entry)"
              size="lg"
            >
            </b-form-select>
          </b-col>
        </b-row>
      </div> -->
      <template v-if="currentPatient">
        <b-table :items="currentPatient.observations" :fields="fields" responsive="sm" outlined hover
          empty-text="No Results to display" :show-empty="true" label-sort-asc="" label-sort-desc="" label-sort-clear="">
          <template #cell(text)="row">
            <div class="enrtires-box-content" v-html="row.item.html" />
          </template>
          <template #cell(options)="row">
            <b-form-select :options="docOptions" v-model="row.item.selected" @change="(value) => showModal(row.item, value)"
              size="lg">
            </b-form-select>
          </template>
        </b-table>
      </template>
    </template>
    <template v-else>
      <h4 class="text-center">No Data Found.</h4>
    </template>
    <b-container class="pagination-container"
      v-if="queryCache && currentPatient && currentPatient.observations && queryCache.totalPages && currentPatient.observations.length > 0">
      <CustomPagination :CurrentPage="currentPage" :handlePageChange="handlePageChange"
        :totalPages="queryCache.totalPages" />
    </b-container>
  </b-card-text>
</template>
<script>
import Loading from "../Utils/Loading.vue";
import responseCleaner from "../../utils/responseCleaner";
// import dataExtractor from "@/utils/dataExtractor";
import CustomPagination from "../Utils/CustomPagination";

export default {
  components: { Loading, CustomPagination },
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  computed: {
    currentPatient: ({ $store }) => $store.state?.system?.currentPatient,
    system: ({ $store }) => $store.state.system,
    queryCache: ({ $store }) => $store.state.system?.queryCache?.observation,
    cancelToken: ({ $store }) => $store.state.cancelToken,
    currentTab: ({ $store }) => $store.state.currentTab,
  },
  data: () => ({
    loading: true,
    docOptions: ["Save", "Detail", "Print", "FHIR"],
    modalData: null,
    selectedResourceId: null,
    currentInterval: null,
    filters: {
      startDate: "",
      endDate: "",
    },
    categories: [
      "Vital Signs",
      "Social History",
      "D-Infection Control Worklist Notify",
    ],
    codes: [
      "Alcohol",
      "Employment/School",
      "Home/Environment",
      "Sexual",
      "Substance Abuse",
      "Tobacco",
      "D-Infection Control Worklist Notify",
      "Temperature Oral",
    ],
    currentPage: 1,
    BASE_QUERY: null,
    query: null,
    cachePage: null,
    pagesComplete: false,
  }),
  watch: {
    async $route() {
      console.log("clearning refrences interval");
      await clearInterval(this.currentInterval);
    },
    currentTab(value) {
      // value === 2 ? this.handleCachePage() : null;
      if (value === 2) {
        console.log("obseravation current tab", value);
        this.pagesComplete = false;
        if (this.queryCache?.id !== null || this.queryCache?.totalPages > 0) {
          console.log("fetching mroe observation pages");
          this.handleCachePage();
        } else {
          console.log("fetching  observation data");
          this.fetchData();
        }
      }
    },
    // currentPatient(to, from) {
    //   console.log("patient changed" + to + " from " + from);
    //   this.pagesComplete = false;
    // },
    "queryCache.id": {
      async handler(_cache, oldCache) {
        console.log("querycache changed in obs", _cache);
        clearInterval(this.currentInterval);
        if (_cache !== oldCache) {
          this.handleCachePage();
        }
      },
      deep: true,
    },
  },
  async mounted() {
    this.loading = true;
    this.BASE_QUERY = `/Observation?patient=${this.currentPatient.id}&_count=10`;
    this.query = `/Observation?patient=${this.currentPatient.id}&_count=10`;
    let cacheQuery = false;
    console.log("current cache", this.queryCache);
    if (this.queryCache?.id !== null) {
      this.currentPage = this.queryCache.pageNumber;
      cacheQuery = true;
    }
    await this.buildQuery(cacheQuery);
    this.loading = false;
  },
  methods: {
    async buildQuery(pageChange = false) {
      if (pageChange) {
        const { id } = this.queryCache;
        const _query = `/Cache/${id}/${this.currentPage}`;
        this.query = _query;
      } else {
        let base = this.BASE_QUERY;
        this.query = base;
      }
      await this.fetchData();
    },
    async handleSave() {
      const postPatient = (coreUrl, headers) => {
        return new Promise((resolver, reject) => {
          Meteor.call('saveResource', { coreUrl, resourceType: 'Observation', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.selectedResourceId, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
        console.log(res)
        if (!res.issue) {
          this.$vToastify.success('Observation saved successfully')
        } else {
          this.$vToastify.error(res.issue[0].details.text);
        }
        this.$bvModal.hide("confirm-save")
      } catch (e) {
        console.log(e)
        this.$bvModal.hide("confirm-save")
        if (e?.error?.status == 409) this.$vToastify.error("Resource was already saved!");
        else this.$vToastify.error(e.error.message);
      }
    },
    showModal(data, option) {
      var jsonPretty = JSON.stringify(data.original, null, 2);
      this.modalData = jsonPretty;
      console.log(data)
      if (option === "FHIR") {
        this.$bvModal.show("observations-modal");
      } else if (option === "Save") {
        this.selectedResourceId = data.resourceId
        this.$bvModal.show("confirm-save");
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.commit("SET_CURRENTPAGE", {
        head: "observation",
        value: pageNumber,
      });
      this.buildQuery(true);
    },
    async fetchData() {
      try {
        this.loading = true;
        const getObservation = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const data = await getObservation(this.$store.state.coreUrl, this.query, this.$store.state.headers);
        if (process.env.NODE_ENV == "development") {
          console.log("search docs query response : ", data)
        }
        const { queryId, totalPages, countInPage, pageNumber } = data;
        if (queryId)
          this.$store.commit("SET_QUERYCACHE", {
            head: "observation",
            value: {
              id: queryId,
              pageNumber,
              totalPages,
              countInPage,
            },
          });
        const bundle = data.bundle;
        if (!("entry" in bundle)) {
          this.loading = false;
          return;
        }
        const _rows = responseCleaner(bundle.entry, "Observation");
        this.$store.dispatch("handleAddToCurrentPatient", {
          key: "observations",
          value: [..._rows],
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
        console.log("error in observations", e);
      }
    },
    async handleCachePage() {
      try {
        if (this.queryCache?.id && this.queryCache?.id !== "") {
          console.log("inside the if ", this.queryCache);
          const _url = `/CacheStatus/${this.queryCache?.id}`;
          this.currentInterval = setInterval(async () => {
            console.log("pages complete? ", this.pagesComplete);
            if (this.pagesComplete === true) return;
            console.log("checking for more pages on observations");
            const getObservation = function (coreUrl, query, headers) {
              return new Promise(function (resolver, reject) {
                Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
                  if (error) reject(error);
                  resolver(result)
                });
              })
            }
            const data = await getObservation(this.$store.state.coreUrl, this.query, this.$store.state.headers);
            if (process.env.NODE_ENV == "development") {
              console.log("search docs query response : ", data)
            }
            const queryId = data?.queryId;
            console.log("query id", queryId);
            if (queryId) {
              const { totalPages, countInPage } = data;
              console.log(`current = ${this.cachePage}, but = ${totalPages}`);
              if (totalPages === this.cachePage) {
                console.log("pages complete...clearning now");
                this.$store.commit("CLEAR_INTERVAL");
                this.pagesComplete = true;
                clearInterval(this.currentInterval);
                return;
              } else {
                console.log("pages left...");
                this.cachePage = totalPages;
              }
              this.$store.commit("SET_QUERYCACHE", {
                head: "observation",
                value: {
                  ...this.queryCache,
                  totalPages,
                  countInPage,
                },
              });
            }
          }, 5000);
          this.$store.commit("SET_CACHE_INTERVAL", this.currentInterval);
        }
      } catch (e) {
        console.log("error in patient search =>", e);
        clearInterval(this.currentInterval);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filters-box {
  background: #f7f7f7;
  margin-bottom: 10px;
}

select {
  padding: 6px;
}
</style>
