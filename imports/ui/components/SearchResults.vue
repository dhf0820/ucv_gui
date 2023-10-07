<template>
  <div>
    <h5 class="my-1">Search Results</h5>
    <b-modal id="patient-modal" title="FHIR" size="xl">
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
          Confirm saving Patient :
        </div>
        <div v-html="modalData && modalData.text" v-if="modalData && modalData.text"></div>
      </div>
      <template #modal-footer>
        <div class="d-flex justify-content-end gap-3">
          <b-button variant="primary" @click="handleSave"> Save </b-button>
        </div>
      </template>
    </b-modal>

    <div class="w-100 mx-auto">
      <template v-if="loading">
        <b-spinner type="grow" class="d-block m-auto" />
      </template>
      <template v-else>
        <b-table :items="patients" :fields="fields" responsive="sm" outlined empty-text="No Results to display"
          :show-empty="true" label-sort-asc="" label-sort-desc="" label-sort-clear="">
          <template #cell(text)="row">
            <div class="text-box-content c-pointer" @click="handleViewCurrentPatient(row.item.resource)"
              v-html="row.item.text" />
          </template>
          <template #cell(options)="row">
            <b-form-select :value="null" @change="(value) => handleOptionChange(row.item, value)">
              <b-form-select-option :value="null">
                Select an option
              </b-form-select-option>
              <b-form-select-option v-for="option in options" :key="option" :value="option">
                {{ option }}
              </b-form-select-option>
            </b-form-select>
          </template>
        </b-table>
        <div class="d-flex align-items-center justify-content-center"
          v-if="searchQueryCache && searchQueryCache.totalPages > 0">
          <CustomPagination :key="currentPage" :CurrentPage="currentPage" :handlePageChange="handlePageChange"
            :totalPages="searchQueryCache.totalPages" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import responseCleaner from "../utils/responseCleaner";
import CustomPagination from "./Utils/CustomPagination.vue";
// import patientsData from "@/constants/patientsData";
export default {
  components: { CustomPagination },
  props: {
    loading: Boolean,
    requesting: Boolean,
    setLoading: Function,
    // clearPageInterval: Function,
  },
  computed: {
    // patients() {
    //   return [...patientsData];
    // },
    patients: ({ $store }) => $store.state?.isHospitalActive ? $store.state?.system?.patients : $store.state?.practiceSystem?.patients,
    searchQueryCache: ({ $store }) => $store.state?.isHospitalActive ? $store.state.system?.searchQueryCache : $store.state.practiceSystem?.searchQueryCache,
    query: ({ $store }) => $store.state.patientSearchQuery,
  },
  data: () => ({
    selected: [],
    currentPage: 1,
    rows: [],
    intervalCount: 0,
    currentInterval: null,
    modalData: null,
    cachePage: null,
    options: ["Details", "Save", "Print", "FHIR"],
    fields: [
      {
        key: "text",
        label: "Text",
      },
      {
        key: "options",
        label: "Options",
      },
    ],
  }),

  watch: {
    patients(data) {
      this.rows = data?.map((row) => {
        row.text = responseCleaner(row.resource.text.div, "Patient");
        return row;
      });
      // this.$store.dispatch("setPatients", this.rows);
    },
    /* async requesting(value) {
      if (value) this.currentPage = 1;
      else {
        await clearInterval(this.currentInterval);
        this.handlePageCache();
      }
    }, */
    /* async $route() {
      console.log("clearning interval");
      await clearInterval(this.currentInterval);
    }, */
    // currentPage(page) {
    //   console.log("current page in watch", page);
    // },
  },

  methods: {
    /* async handlePageCache() {
      try {
        if (this.searchQueryCache?.id && this.searchQueryCache?.id !== "") {
          const _url = `/CacheStatus/${this.searchQueryCache?.id}`;
          this.currentInterval = setInterval(async () => {
            const { data } = await this.$axios.get(_url);
            const queryId = data?.queryId;
            if (queryId) {
              const { totalPages, countInPage } = data;
              console.log(`current = ${this.cachePage}, but = ${totalPages}`);
              if (totalPages === this.cachePage) {
                console.log("pages complete...clearning now");
                await clearInterval(this.currentInterval);
              } else {
                console.log("pages left...");
                this.cachePage = totalPages;
              }

              this.$store.commit("SET_SEARCHQUERYCACHE", {
                id: queryId,
                totalPages,
                countInPage,
              });
            }
          }, 5000);
        }
      } catch (e) {
        console.log("error in patient search =>", e);
        clearInterval(this.currentInterval);
      }
    }, */
    handleSelectPatient(data) {
      if (typeof data === "object")
        if (!this.selected.includes(data)) {
          //checking weather array contain the id
          this.selected.push(data); //adding to array because value doesnt exists
        } else {
          this.selected.splice(this.selected.indexOf(data), 1); //deleting
        }
    },
    async handleSave() {
      const postPatient = (coreUrl, headers) => {
        return new Promise((resolver, reject) => {
          Meteor.call('saveResource', { coreUrl, resourceType: 'Patient', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.modalData?.resource?.id, headers }, (error, result) => {
            if (error) reject(error);
            resolver(result)
          });
        })
      }
      try {
        const res = await postPatient(this.$store.state.coreUrl, this.$store.state.headers);
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
    handleOptionChange(item, option) {
      this.modalData = item;
      if (option === "FHIR") {
        this.$bvModal.show("patient-modal");
      }
      if (option == "Save") {
        this.$bvModal.show("confirm-save");
      }
    },
    async handleViewCurrentPatient(item) {
      await this.$store.dispatch("setCurrentPatient", item);
      this.$router.push("/current-patient");
    },
    async handlePageChange(page) {
      try {
        this.setLoading(true);
        this.currentPage = page;
        this.$store.commit("SET_SEARCHQUERYCACHE", {
          pageNumber: page,
        });

        const _query = `${this.searchQueryCache?.id}/CachePage?page=${page}`;
        const getPage = function (coreUrl, query, headers) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}/${query}`, headers, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const data = await getPage(this.$store.state.coreUrl, _query, this.$store.state.headers);
        console.log(data)
        this.$store.commit("SET_PATIENTS_ONLY", data.resources);
        this.setLoading(false);
      } catch (e) {
        this.setLoading(false);
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
.text-box-content {
  div {
    display: flex;
    gap: 10px;
  }

  p {
    font-size: 13.7px;
    margin: 0;
  }
}
</style>
