<template>
  <b-card-text>
    <template v-if="loading">
      <div class="loading-container">
        <Loading />
      </div>
    </template>
    <template v-else-if="currentPatient && currentPatient.immunizations && currentPatient.immunizations.length > 0">
      <b-modal id="immunization-modal" title="FHIR" size="xl">
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
            Confirm saving immunization :
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
      <!-- <div v-for="entry in currentPatient?.immunizations" :key="entry.id">
        <b-row>
          <b-col cols="11">
            <div class="column-entries" v-html="entry.html" />
          </b-col>
          <b-col cols="1">
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
        <b-table
        :items="currentPatient.immunizations"
        :fields="fields"
        responsive="sm"
        outlined
        hover
        empty-text="No Results to display"
        :show-empty="true"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
      >
        <template #cell(text)="row">
          <div class="enrtires-box-content" v-html="row.item.html" />
        </template>
        <template #cell(options)="row">
          <b-form-select
            :options="docOptions"
            v-model="row.item.selected"
            @change="(value)=>showModal(row.item, value)"
            size="lg"
          >
          </b-form-select>
        </template>
      </b-table>
      </template>
    </template>
    <template v-else>
      <h4 class="text-center">No Data Found.</h4>
    </template>
    <b-container
      class="pagination-container"
      v-if="queryCache && currentPatient && currentPatient.immunizations && queryCache.totalPages && currentPatient.immunizations.length > 0"
    >
      <CustomPagination
        :CurrentPage="currentPage"
        :handlePageChange="handlePageChange"
        :totalPages="queryCache.totalPages"
      />
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
    queryCache: ({ $store }) => $store.state.system?.queryCache?.immunization,
    cancelToken: ({ $store }) => $store.state.cancelToken,
    currentTab: ({ $store }) => $store.state.currentTab,
  },
  watch: {
    // "currentPatient.immunizations": function (value) {
    //   const splitted = dataExtractor(value);
    //   console.log("Extracted Data => ", splitted);
    // },
    async $route() {
      console.log("clearning refrences interval");
      await clearInterval(this.currentInterval);
    },
    // currentPatient(to, from) {
    //   console.log("patient changed" + to + " from " + from);
    //   this.pagesComplete = false;
    // },
    currentTab(value) {
      // value === 4 ? this.handleCachePage() : null;
      console.log("immunization current tab", value);
      if (value === 4) {
        this.pagesComplete = false;
        if (this.queryCache?.id !== null || this.queryCache?.totalPages > 0) {
          this.handleCachePage();
        } else {
          this.fetchData();
        }
      }
    },
    "queryCache.id": {
      async handler(_cache, oldCache) {
        console.log("querycache changed", _cache);
        clearInterval(this.currentInterval);
        if (_cache !== oldCache) {
          this.handleCachePage();
        }
      },
      deep: true,
    },
  },
  data: () => ({
    loading: true,
    docOptions: ["Save", "Detail", "Print", "FHIR"],
    modalData: null,
    selectedResourceId : null,
    currentInterval: null,
    currentPage: 1,
    BASE_QUERY: null,
    query: null,
    cachePage: null,
    pagesComplete: false,
  }),
  async mounted() {
    // console.log("refs", this.currentPatient?.immunizations);
    // if (
    //   this.currentPatient.immunizations === null ||
    //   this.currentPatient.immunizations === undefined
    // )
    //   await this.fetchData();
    // this.loading = false;
    this.loading = true;
    this.BASE_QUERY = `/Immunization?patient=${this.currentPatient.id}&_count=10`;
    this.query = `/Immunization?patient=${this.currentPatient.id}&_count=10`;
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
          Meteor.call('saveResource', { coreUrl, resourceType: 'Immunization', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.selectedResourceId, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
        console.log(res)
        if(!res.issue){
          this.$vToastify.success('Immunization saved successfully')
        }else{
          this.$vToastify.error(res.issue[0].details.text);
        }
        this.$bvModal.hide("confirm-save")
      } catch (e) {
        console.log(e)
        this.$bvModal.hide("confirm-save")
        if(e?.error?.status == 409) this.$vToastify.error("Resource was already saved!");
        else this.$vToastify.error(e.error.message);
      }
    },
    showModal(data, option) {
      var jsonPretty = JSON.stringify(data.original, null, 2);
        this.modalData = jsonPretty;
        console.log(data)
      if (option === "FHIR") {
        this.$bvModal.show("immunization-modal");
      }else if (option === "Save"){
        this.selectedResourceId = data.resourceId
        this.$bvModal.show("confirm-save");
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.commit("SET_CURRENTPAGE", {
        head: "immunization",
        value: pageNumber,
      });
      this.buildQuery(true);
    },
    async fetchData() {
      try {
        this.loading = true;
        const getImmunization = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const data = await getImmunization(this.$store.state.coreUrl, this.query, this.$store.state.headers);
        if (process.env.NODE_ENV == "development") {
          console.log("search docs query response : ", data)
        }
        const { queryId, totalPages, countInPage, pageNumber } = data;
        if (queryId)
          this.$store.commit("SET_QUERYCACHE", {
            head: "immunization",
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
        const _rows = responseCleaner(bundle.entry, "Immunization");
        this.$store.dispatch("handleAddToCurrentPatient", {
          key: "immunizations",
          value: _rows,
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
        console.log(e);
      }
    },
    async handleCachePage() {
      try {
        if (this.queryCache?.id && this.queryCache?.id !== "") {
          const _url = `/CacheStatus/${this.queryCache?.id}`;
          this.currentInterval = setInterval(async () => {
            if (this.pagesComplete === true) return;
            console.log("checking for more pages on immunizations");
            const getImmunization = function (coreUrl, query, headers) {
              return new Promise(function (resolver, reject) {
                Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
                  if (error) reject(error);
                  resolver(result)
                });
              })
            }
            
            const data = await getImmunization(this.$store.state.coreUrl, _url, this.$store.state.headers);
            if (process.env.NODE_ENV == "development") {
              console.log("search docs query response : ", res)
            }
            const queryId = data?.queryId;
            if (queryId) {
              const { totalPages, countInPage } = data;
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
                head: "immunization",
                value: {
                  ...this.queryCache,
                  totalPages,
                  countInPage,
                },
              });
            }
          }, 5000);
        }
      } catch (e) {
        console.log("error in patient search =>", e);
        clearInterval(this.currentInterval);
      }
      this.$store.commit("SET_CACHE_INTERVAL", this.currentInterval);
    },
  },
};
</script>

<style lang="scss" scoped>
.column-entries {
  border-bottom: 1px solid #ccc;
}
</style>
