<template>
  <div>
    <div class="custom-container">
      <div class="d-flex justify-content-between">
        <b-breadcrumb class="mb-0" :items="breadcrumbs"></b-breadcrumb>
        <b-breadcrumb class="mb-0 activeBreadcrumb" :items="practiceBreadcrumbs"></b-breadcrumb>
      </div>
      <div v-if="selectedSystem" class="d-flex gap-5 align-items-center justify-content-between">
        <h4 class="text-start">Patient Search</h4>
      </div>
      <b-alert :show="!selectedSystem || !selectedFacility" variant="danger">Select Facility and System
      </b-alert>
      <b-alert :show="alert.show" variant="danger">{{ alert.msg }}</b-alert>
      <div class="patient-search-box">
        <form ref="searchForm" @submit="handlePatientSearch">
          <div>
            <label for="lastName">Last Name</label>
            <input id="lastName" type="text" :disabled="!selectedSystem || selectedIdentifier !== null"
              @input="updateForm($event)" :value="formData.lastName || ''" />
          </div>
          <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" @input="updateForm($event)"
              :disabled="!selectedSystem || formData.lastName === ''" :value="formData.firstName || ''" />
          </div>
          <div>
            <label for="dob">Birth Date</label>
            <input type="date" id="dob" class="form-control" />
          </div>
          <template v-if="selectedSystem">
            <div>
              <label v-if="selectedIdentifier" for="identifier">{{
                selectedIdentifier.Name || "Identifier"
              }}</label>
              <input type="text" id="identifier" class="form-control" @input="updateForm($event)"
                :value="formData.identifier || ''" :disabled="formData.lastName !== '' || !selectedIdentifier" />
            </div>
          </template>

          <div>
            <label for="encounter">Encounter</label>
            <input type="text" id="encounter" @input="updateForm($event)" :value="formData.encounter || ''"
              :disabled="formData.lastName !== ''" />
          </div>
          <div class="d-flex gap-2 flex-row h-100 align-items-end">
            <button type="submit" class="btn search-button" :disabled="allowSearch()">
              Search
            </button>
            <button class="btn reset-button" type="button" @click="handleReset">
              Reset
            </button>
          </div>
        </form>
      </div>
      <div>
        <SearchResults :loading="loading" :setLoading="(status) => setLoading(status)" :requesting="requesting" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchResults from "../components/SearchResults.vue";
export default {
  components: { SearchResults },
  data: () => ({
    alert: {
      show: false,
      msg: null,
    },
    loading: false,
    selectedIdentifier: null,
    queryId: null,
    showResults: false,
    requesting: false,
    breadcrumbs: [
      {
        text: "Home",
        to: "/",
      },
      {
        text: "Find Patient",
        to: "find-patient",
        active: true,
      },
    ],
    // formData: {
    //   lastName: "",
    //   firstName: "",
    //   birthDate: "",
    //   encounter: "",
    //   identifier: "",
    // },
  }),
  computed: {
    formData: ({ $store }) => $store.state.system?.formData,
    selectedFacility: ({ $store }) => $store.state.practiceFacility,
    selectedSystem: ({ $store }) => $store.state.practiceSystem,
    currentPatient: ({ $store }) => $store.state.practiceSystem?.currentPatient,
  },
  mounted() {
    console.log("new state", this.$store.state)
    this.setBreadcrumbs();
  },
  watch: {
    selectedIdentifier(value) {
      console.log("value", value);
      // this.handleReset();
    },
    selectedSystem() {
      this.setBreadcrumbs();
    },
    selectedFacility() {
      this.setBreadcrumbs();
    },

    // selectedSystem: {
    //   handler(data) {
    //     this.formData = { ...data.formData };
    //   },
    //   deep: true,
    // },
    // formData(value) {
    //   console.log("child form data", value);
    // },
  },
  methods: {
    setBreadcrumbs() {
      this.breadcrumbs = [
        {
          text: "Hospital"
        },
        {
          text: "Home",
          to: "/",
        },
        {
          text: this.$store.state.facility?.displayName,
          to: "find-patient",
          active: false,
        },
        {
          text: this.$store.state.system?.displayName,
          to: "find-patient",
          active: false,
        },
        {
          text: "Find Patient",
          to: "find-patient",
          active: true,
        },
      ];
      this.practiceBreadcrumbs = [
        {
          text: "Practice"
        },
        {
          text: this.$store.state.practiceFacility?.displayName,
          to: "practice-find-patient",
          active: false,
        },
        {
          text: this.$store.state.practiceSystem?.displayName,
          to: "practice-find-patient",
          active: false,
        },
        {
          text: "Find Patient",
          to: "practice-find-patient",
          active: true,
        },
      ];
    },
    handleReset() {
      this.$refs.searchForm.reset();
      this.$store.dispatch("resetData");
    },
    async handlePatientSearch(event) {
      try {
        this.requesting = true;
        event.preventDefault();
        this.showResults = false;
        this.alert = {
          show: false,
          msg: null,
        };
        if (!this.selectedSystem?.id) {
          this.alert = {
            show: true,
            msg: "You do not have any systems selected, please select one from Navbar!",
          };
          setTimeout(() => {
            this.alert = {
              show: false,
              msg: null,
            };
          }, 5000);
        }

        this.loading = true;
        const query = this.buildQuery();
        const body = {
          fhirSystem: this.$store.state?.system?.id,
          facility: this.$store.state?.facility?.id,
          fhirAuthToken: this.$store.state?.headers.Authorization.split(' ')[1],
        }
        // this.$axios.defaults.headers.common["Fhir-System"] =
        //   "62f1c5dab3070d0b40e7aac1";
        console.log(query)
        const getPatients = function (coreUrl, query, headers, body) {
          return new Promise(function (resolver, reject) {
            Meteor.call('patientTestQuery', `${coreUrl}/${query}`, headers, body, (error, result) => {
              if (error) reject(error);
              resolver(result)
            });
          })
        }
        const res = await getPatients(this.$store.state.coreUrl, query, this.$store.state.headers, body);
        if (process.env.NODE_ENV == "development") {
          console.log("search patient query response : ", res)
        }
        let data = res
        const { queryId, totalPages, countInPage, pageNumber } = data;

        const _queryCache = {
          id: queryId,
          pageNumber,
          totalPages,
          countInPage,
        };
        this.$store.dispatch("searchPatientsPractice", {
          patients: data.bundle.entry,
          cache: _queryCache,
        });
        this.showResults = true;
        this.loading = false;
        this.requesting = false;
      } catch (e) {
        if (e?.error?.status == 401) {
          this.$vToastify.error("Your token was expired. Please login again.");
          this.$store.dispatch("logoutUser");
          this.$router.push("/auth");
        } else {
          this.$vToastify.error(e.error.message);
        }
        console.log("error", e);
      } finally {
        this.loading = false;
      }
    },

    buildQuery() {
      const { lastName, firstName } = this?.formData;
      let base = `Patient?`;
      let query;
      if (lastName !== "") {
        query = base + `family=${lastName}`;
        if (firstName && firstName !== "") query += `&given=${firstName}`;
      } else {
        query =
          base +
          `identifier=${this.selectedIdentifier.Name.toUpperCase()}|${this?.formData?.identifier}`;
      }
      this.$store.commit("SET_PATIENT_SEARCH_QUERY", query);
      return query;
    },
    allowSearch() {
      // const { identifier, lastName } = this?.formData;
      const identifier = this?.formData?.identifier;
      const lastName = this?.formData?.lastName;
      if (identifier !== "" && this.selectedIdentifier) return false;
      if (lastName !== "") return false;
      return true;
    },
    updateForm($event) {
      this.$store.commit("UPDATE_FORMDATA", {
        value: $event.target.value,
        where: $event.target.id,
      });
    },
    setLoading(status) {
      this.loading = status;
    },
  },
};
</script>

<style lang="scss" scoped>
.patient-search-box {
  border-radius: 5px;
  background: #f5f5f5;
  border: 1px solid #a0a8b8;
  display: flex;
  padding: 5px 5px;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &>div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 500;
    }

    input,
    select {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #a0a8b8;

      &::placeholder {
        font-size: 13px;
        color: #a0a8b8;
      }
    }
  }

  .search-button {
    background-color: #428bca;
    border-color: #357ebd;
    color: #fff;
    border-radius: 5px;
  }

  .reset-button {
    background: #fff;
    color: #000;
    border-radius: 5px;
    border: 1px solid #1c1d1d;
  }
}
</style>
