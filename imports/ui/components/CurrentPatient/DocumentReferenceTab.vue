<template>
  <b-card-text>
    <template v-if="loading">
      <div class="loading-container">
        <Loading />
      </div>
    </template>
    <!-- <template v-else-if="docs?.length > 0"> -->
    <template
      v-else-if="currentPatient && currentPatient.documentReferences && currentPatient.documentReferences.length > 0">
      <b-modal id="document-reference-modal" title="FHIR" size="xl">
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
            Confirm saving document reference :
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
          <b-form-datepicker id="filters-start-date" v-model="filters.startDate" class="mb-2" @input="buildQuery()">
          </b-form-datepicker>
        </div>
        <div>
          <label for="filters-end-date">End Date</label>
          <b-form-datepicker id="filters-end-date" v-model="filters.endDate" @input="buildQuery()" class="mb-2">
          </b-form-datepicker>
        </div>
        <div class="d-flex flex-column filters-document-type">
          <label for="filters-document-type">Document Type:</label>
          <b-form-select id="filters-document-type" v-model="filters.documentType" @change="buildQuery()"
            class="mb-2 rounded-2">
            <b-form-select-option :value="null"> All </b-form-select-option>
            <b-form-select-option v-for="option in documentTypes" :key="option" :value="option">
              {{ option }}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div class="d-flex flex-column filters-document-type">
          <label for="page-count">Resource Per Page:</label>
          <b-form-select id="page-count" v-model="filters.count" @change="handlePageCount()"
            :options="[5, 10, 20, 50, 100]"></b-form-select>
        </div>
      </div>
      <!-- <div v-for="entry in docs" :key="entry.id"> -->
      <!-- <div v-for="entry in currentPatient?.documentReferences" :key="entry.id">
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
        <b-table :items="currentPatient.documentReferences" :fields="fields" responsive="sm" outlined hover
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
      <div id="filters" class="filters-box d-flex p-2 gap-3">
        <div>
          <label for="filters-start-date">Start Date</label>
          <b-form-datepicker id="filters-start-date" v-model="filters.startDate" class="mb-2" @input="buildQuery()">
          </b-form-datepicker>
        </div>
        <div>
          <label for="filters-end-date">End Date</label>
          <b-form-datepicker id="filters-end-date" v-model="filters.endDate" @input="buildQuery()" class="mb-2">
          </b-form-datepicker>
        </div>
        <div class="d-flex flex-column filters-document-type">
          <label for="page-count">:</label>
          <b-form-select id="page-count" v-model="filters.count" @change="handlePageCount"
            :options="[5, 10, 20, 50, 100]"></b-form-select>
        </div>
      </div>
      <h4 class="text-center">No Data Found.</h4>
    </template>
    <b-container class="pagination-container" v-if="queryCacheDocs && queryCacheDocs.totalPages">
      <CustomPagination :CurrentPage="currentPage" :handlePageChange="handlePageChange"
        :totalPages="queryCacheDocs.totalPages" />
      <!-- :totalPages="20" -->
    </b-container>
  </b-card-text>
</template>

<script>
import Loading from "../Utils/Loading.vue";
import responseCleaner from "../../utils/responseCleaner";
// import dataExtractor from "@/utils/dataExtractor";
// import response from "@/constants/currentPatientResponse";
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
    currentPatient() {
      return this.$store.state.system?.currentPatient;
    },
    system() {
      return this.$store.state.system;
    },
    reset() {
      return this.$store.state.lastReset;
    },
    queryCacheDocs() {
      return this.$store.state.system?.queryCache?.documentReference;
    },
    currentTab: ({ $store }) => $store.state.currentTab,
    cancelToken: ({ $store }) => $store.state.cancelToken,
  },
  data: () => ({
    docOptions: ["Save", "Detail", "Print", "FHIR"],
    loading: false,
    selectedOption: null,
    modalData: null,
    selectedResourceId : null,
    data: [],
    rows: [],
    isActive: false,
    cachePage: null,
    currentPage: 1,
    pagesComplete: false,
    currentInterval: null,
    filters: {
      startDate: undefined,
      endDate: undefined,
      documentType: null,
      count: 10,
    },
    documentTypes: [
      "Rheumatology Consultation",
      "Progress Note Generic",
      "Admission Note Physician",
      "Neurology Progress Note",
    ],
    BASE_QUERY: "",
    query: "",
  }),
  methods: {
    async handlePageCount() {
      this.loading = true;
      this.currentPage = 1;
      console.log("filters =>", this.filters.count);
      this.query = `/DocumentReference?patient=${this.currentPatient.id}&_count=${this.filters.count}`;
      this.BASE_QUERY = this.query;
      await clearInterval(this.currentInterval);
      await this.fetchData();
      this.loading = false;
    },
    async handleSave() {
      const postPatient = (coreUrl, headers) => {
        return new Promise((resolver, reject) => {
          Meteor.call('saveResource', { coreUrl, resourceType: 'DocumentReference', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.selectedResourceId, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
        console.log(res)
        if(!res.issue){
          this.$vToastify.success('Document Reference saved successfully')
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
    showModal(data) {
      var jsonPretty = JSON.stringify(data.original, null, 2);
        this.modalData = jsonPretty;
        console.log(data)
      if (data.selected === "FHIR") {
        this.$bvModal.show("document-reference-modal");
      }else if (data.selected === "Save"){
        this.selectedResourceId = data.resourceId
        this.$bvModal.show("confirm-save");
      }
    },
    async fetchData() {
      try {
        this.loading = true;
        const getDocumentReference = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const res = await getDocumentReference(this.$store.state.coreUrl, this.query, this.$store.state.headers);
        if (process.env.NODE_ENV == "development") {
          console.log("search docs query response : ", res)
        }
        const { queryId, totalPages, countInPage, pageNumber } = res;
        if (queryId)
          this.$store.commit("SET_QUERYCACHE", {
            head: "documentReference",
            value: {
              id: queryId,
              pageNumber,
              totalPages,
              countInPage,
            },
          });
        const bundle = res?.bundle;
        if (!bundle || !("entry" in bundle)) {
          this.$store.dispatch("handleAddToCurrentPatient", {
            key: "documentReferences",
            value: bundle
          });
          this.loading = false;
          return;
        }
        const rows = responseCleaner(bundle.entry, "Document Reference");
        this.$store.dispatch("handleAddToCurrentPatient", {
          key: "documentReferences",
          value: rows,
        });
        this.loading = false;
      } catch (e) {
        console.log("error in documnet reference", e);
      } finally {
        this.loading = false;
      }
    },
    async buildQuery(pageChange = false) {
      if (pageChange) {
        const { id } = this.queryCacheDocs;
        const _query = `/Cache/${id}/${this.currentPage}`;
        this.query = _query;
      } else {
        let base = this.BASE_QUERY;
        const { startDate, endData, documentType } = this.filters;
        if (startDate !== undefined) {
          base += `&period=ge${startDate}`;
        }
        if (endData !== undefined) {
          base += `&period=le${endData}`;
        }
        if (documentType !== null) {
          base += `&type=${documentType}`;
        }
        this.query = base;
      }
      await this.fetchData();
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.commit("SET_CURRENTPAGE", {
        head: "documentReference",
        value: pageNumber,
      });
      this.buildQuery(true);
    },
    async handleCachePage() {
      try {
        if (this.queryCacheDocs?.id && this.queryCacheDocs?.id !== "") {
          const _url = `/CacheStatus/${this.queryCacheDocs?.id}`;
          this.currentInterval = setInterval(async () => {
            if (this.pagesComplete === true) return;
            console.log("checking for more pages on reference");
            const getDocumentReferenceCache = function (coreUrl, query, headers) {
              return new Promise(function (resolver, reject) {
                Meteor.call('patientTestQuery', `${coreUrl}${query}`, headers, (error, result) => {
                  if (error) reject(error);
                  resolver(result)
                });
              })
            }
            const res = await getDocumentReferenceCache(this.$store.state.coreUrl, _url, this.$store.state.headers);
            if (process.env.NODE_ENV == "development") {
              console.log("search docs query response : ", res)
            }
            const queryId = res?.queryId;
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
                head: "documentReference",
                value: {
                  ...this.queryCacheDocs,
                  totalPages,
                  countInPage,
                },
              });
            }
          }, 5000);
        }
        this.$store.commit("SET_CACHE_INTERVAL", this.currentInterval);
      } catch (e) {
        console.log("error in patient search =>", e);
        clearInterval(this.currentInterval);
      }
    },
  },
  watch: {
    async $route() {
      console.log("clearning refrences interval");
      await clearInterval(this.currentInterval);
    },
    async currentTab(value) {
      // value === 0 ? this.handleCachePage() : null;
      await clearInterval(this.currentInterval);
      if (value === 0) {
        console.log("reference current tab", value);
        this.pagesComplete = false;
        if (
          this.queryCacheDocs?.id !== null ||
          this.queryCacheDocs?.totalPages > 0
        ) {
          //this.handleCachePage();
        } else {
          this.fetchData();
        }
      }
    },
    "queryCacheDocs.id": {
      async handler(_cache, oldCache) {
        console.log("querycache changed in refs");
        clearInterval(this.currentInterval);
        if (_cache !== oldCache) {
          //this.handleCachePage();
        }
      },
      deep: true,
    },
  },
  async mounted() {
    this.loading = true;
    this.BASE_QUERY = `/DocumentReference?patient=${this.currentPatient.id}&_count=${this.filters.count}`;
    this.query = `/DocumentReference?patient=${this.currentPatient.id}&_count=${this.filters.count}`;
    let cacheQuery = false;
    if (this.queryCacheDocs.id !== null) {
      this.currentPage = this.queryCacheDocs.pageNumber;
      cacheQuery = true;
    }
    await this.buildQuery(cacheQuery);
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.filters-box {
  background: #f7f7f7;
  margin-bottom: 10px;
}

.filters-document-type {
  select {
    padding: 6px;
  }
}
</style>
