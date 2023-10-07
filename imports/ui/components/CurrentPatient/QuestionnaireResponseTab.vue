<template>
  <b-card-text>
    <template v-if="loading">
      <div class="loading-container">
        <Loading />
      </div>
    </template>
    <template
      v-else-if="currentPatient && currentPatient.questionnaireResponses && currentPatient.questionnaireResponses.length > 0"><b-modal
        id="questionnaire-response-modal" title="FHIR" size="xl">
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
            Confirm saving questionnaire response :
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
      <!-- <div
        v-for="entry in currentPatient?.questionnaireResponses"
        :key="entry.id"
      >
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
      <template v-if="currentPatient">
        <b-table :items="currentPatient.questionnaireResponses" :fields="fields" responsive="sm" outlined hover
          empty-text="No Results to display" :show-empty="true" label-sort-asc="" label-sort-desc="" label-sort-clear="">
          <template #cell(text)="row">
            <div class="enrtires-box-content" v-html="row.item.html" />
          </template>
          <template #cell(options)="row">
            <b-form-select :options="docOptions" v-model="row.item.selected" @change="showModal(row.item)" size="lg">
            </b-form-select>
          </template>
        </b-table>
      </template>
    </template>
    <template v-else>
      <h4 class="text-center">No Data Found.</h4>
    </template>
    <b-container class="pagination-container" v-if="queryCache && queryCache.totalPages">
      <!-- v-if="
        queryCache?.totalPages &&
        currentPatient?.questionnaireResponses?.length > 0
      " -->
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
    queryCache: ({ $store }) =>
      $store.state.system?.queryCache?.questionnaireResponse,
    currentTab: ({ $store }) => $store.state.currentTab,

    cancelToken: ({ $store }) => $store.state.cancelToken,
  },
  data: () => ({
    loading: true,
    docOptions: ["Save", "Detail", "Print", "FHIR"],
    modalData: null,
    selectedResourceId : null,
    currentPage: 1,
    BASE_QUERY: null,
    query: null,
    cachePage: null,
    pagesComplete: false,
    currentInterval: null,
  }),
  watch: {
    // "currentPatient.questionnaireResponses": function (value) {
    //   const splitted = dataExtractor(value);
    //   console.log("Extracted Data => ", splitted);
    // },
    currentTab(value) {
      console.log("questionnaire current tab", value);
      if (value === 5) {
        this.pagesComplete = false;
        if (this.queryCache?.id !== null || this.queryCache?.totalPages > 0) {
          this.handleCachePage();
        } else {
          this.fetchData();
        }
      }
      // value === 5 ? this.handleCachePage() : null;
    },
    async $route() {
      console.log("clearning questionnaire interval");
      await clearInterval(this.currentInterval);
    },
    // currentPatient(to, from) {
    //   console.log("patient changed" + to + " from " + from);
    //   this.pagesComplete = false;
    // },
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
  async mounted() {
    // console.log("refs", this.currentPatient?.questionnaireResponses);
    // if (
    //   this.currentPatient.questionnaireResponses === null ||
    //   this.currentPatient.questionnaireResponses === undefined
    // )
    //   await this.fetchData();
    // this.loading = false;

    this.loading = true;
    this.BASE_QUERY = `/QuestionnaireResponse?patient=${this.currentPatient.id}&_count=10`;
    this.query = `/QuestionnaireResponse?patient=${this.currentPatient.id}&_count=10`;
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
          Meteor.call('saveResource', { coreUrl, resourceType: 'QuestionnaireResponse', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.selectedResourceId, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
        console.log(res)
        if(!res.issue){
          this.$vToastify.success('QuestionnaireResponse saved successfully')
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
        this.$bvModal.show("questionnaire-response-modal");
      }else if (option === "Save"){
        this.selectedResourceId = data.resourceId
        this.$bvModal.show("confirm-save");
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.commit("SET_CURRENTPAGE", {
        head: "questionnaireResponse",
        value: pageNumber,
      });
      this.buildQuery(true);
    },
    async fetchData() {
      try {
        this.loading = true;

        const getQuestionnaireResponse = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const data = await getQuestionnaireResponse(this.$store.state.coreUrl, this.query, this.$store.state.headers);
        if (process.env.NODE_ENV == "development") {
          console.log("search docs query response : ", data)
        }
        const { queryId, totalPages, countInPage, pageNumber } = data;
        if (queryId)
          this.$store.commit("SET_QUERYCACHE", {
            head: "questionnaireResponse",
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
        const _rows = responseCleaner(bundle.entry, "Questionnaire Response");
        this.$store.dispatch("handleAddToCurrentPatient", {
          key: "questionnaireResponses",
          value: [..._rows],
        });
        this.loading = false;
      } catch (e) {
        console.log(e);
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
            console.log("checking for more pages on questionnaire ");
            const getQuestionnaireResponse = function (coreUrl, query, headers) {
              return new Promise(function (resolver, reject) {
                Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
                  if (error) reject(error);
                  resolver(result)
                });
              })
            }
            const data = await getQuestionnaireResponse(this.$store.state.coreUrl, this.query, this.$store.state.headers);
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
                head: "questionnaireResponse",
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
