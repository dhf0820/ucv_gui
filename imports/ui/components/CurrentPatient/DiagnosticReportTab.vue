<template>
  <b-card-text>
    <template v-if="loading">
      <div class="loading-container">
        <Loading />
      </div>
    </template>
    <template v-else-if="currentPatient && currentPatient.diagnosticReports && currentPatient.diagnosticReports.length > 0">
      <!-- <div v-for="entry in currentPatient?.diagnosticReports" :key="entry.id">
        <b-row>
          <b-col cols="11">
            <div class="enrtires-box-content" v-html="entry.html" />
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
      <b-modal id="confirm-save" title="Save" size="l">
        <div>
          <div>
            Confirm saving diagnostic report :
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
      <template v-if="currentPatient">
        <b-table
        :items="currentPatient.diagnosticReports"
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
    <b-container class="pagination-container" v-if="queryCache && queryCache.totalPages">
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
import CustomPagination from "../Utils/CustomPagination.vue";

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
    queryCache: ({ $store }) =>
      $store.state.system?.queryCache?.diagnosticReport,
    cancelToken: ({ $store }) => $store.state.cancelToken,
    currentTab: ({ $store }) => $store.state.currentTab,
  },
  watch: {
    async $route() {
      console.log("clearning refrences interval");
      await clearInterval(this.currentInterval);
    },
    currentTab(value) {
      // value === 1 ? this.handleCachePage() : null;
      console.log("diagnostic current tab", value);
      if (value === 1) {
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
    currentInterval: null,
    docOptions: ["Save", "Detail", "Print", "FHIR"],
    modalData: null,
    currentPage: 1,
    BASE_QUERY: null,
    query: null,
    cachePage: null,
    pagesComplete: false,
    selectedResourceId : null,
  }),
  async mounted() {
    // console.log("refs", this.currentPatient?.diagnosticReports);
    // if (
    //   this.currentPatient.diagnosticReports === null ||
    //   this.currentPatient.diagnosticReports === undefined
    // )
    //   await this.fetchData();
    // this.loading = false;

    this.loading = true;
    this.BASE_QUERY = `/DiagnosticReport?patient=${this.currentPatient.id}&_count=10`;
    this.query = `/DiagnosticReport?patient=${this.currentPatient.id}&_count=10`;
    let cacheQuery = false;

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
          Meteor.call('saveResource', { coreUrl, resourceType: 'diagnosticReport', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.selectedResourceId, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
        console.log(res)
        if(!res.issue){
          this.$vToastify.success('Patient saved successfully')
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
        this.$bvModal.show("diagnostic-report-modal");
      }else if (option === "Save"){
        this.selectedResourceId = data.resourceId
        this.$bvModal.show("confirm-save");
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.commit("SET_CURRENTPAGE", {
        head: "diagnosticReport",
        value: pageNumber,
      });
      this.buildQuery(true);
    },
    async fetchData() {
      try {
        this.loading = true;
        const getDiagnosticReport = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const res = await getDiagnosticReport(this.$store.state.coreUrl, this.query, this.$store.state.headers);
        if (process.env.NODE_ENV == "development") {
          console.log("search docs query response : ", res)
        }
        const { queryId, totalPages, countInPage, pageNumber } = res;
        if (queryId)
          this.$store.commit("SET_QUERYCACHE", {
            head: "diagnosticReports",
            value: {
              id: queryId,
              pageNumber,
              totalPages,
              countInPage,
            },
          });
        const bundle = res?.bundle;
        console.log("zab" + JSON.stringify(res?.bundle))
        if (!bundle || !("entry" in bundle)) {
          this.$store.dispatch("handleAddToCurrentPatient", {
            key: "diagnosticReports",
            value: bundle
          });
          this.loading = false;
          return;
        }
        const _rows = responseCleaner(bundle.entry, "Diagnostic Report");
        this.$store.dispatch("handleAddToCurrentPatient", {
          key: "diagnosticReports",
          value: _rows,
        });
        this.loading = false;
      } catch (e) {
        console.log("error in diagnostic reports", e);
      } finally {
        this.loading = false;
      }
    },
    async handleCachePage() {
      try {
        if (this.queryCache?.id && this.queryCache?.id !== "") {
          const _url = `/CacheStatus/${this.queryCache?.id}`;
          this.currentInterval = setInterval(async () => {
            if (this.pagesComplete === true) return;
            console.log("checking for more pages on diagnostic reports");
            const getDiagnosticReportCache = function (coreUrl, query, headers) {
              return new Promise(function (resolver, reject) {
                Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
                  if (error) reject(error);
                  resolver(result)
                });
              })
            }
            const data = await getDiagnosticReportCache(this.$store.state.coreUrl, _url, this.$store.state.headers);
            if (process.env.NODE_ENV == "development") {
              console.log("search docs query response : ", res)
            }
            const queryId = data?.queryId;
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
                head: "diagnosticReport",
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
