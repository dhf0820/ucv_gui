<template v-if="currentPatient">
  <div :key="currentPatient.id">
    <template v-if="currentPatient.id">
      <b-modal id="confirm-save" title="Save" size="l">
        <div>
          <div>
            Confirm saving Patient :
          </div>
          <div v-html="patientText" v-if="patientText" />
        </div>
        <template #modal-footer>
          <div class="d-flex justify-content-end gap-3">
            <b-button variant="primary" @click="handlePatientSave"> Save </b-button>
          </div>
        </template>
      </b-modal>
      <div class="custom-container">
        <div class="d-flex justify-content-between">
          <b-breadcrumb class="mb-0" :class="{activeBreadcrumb:!this.$store.state.isPracticeActive}" :items="breadcrumbs"></b-breadcrumb>
          <b-breadcrumb class="mb-0" :class="{activeBreadcrumb:this.$store.state.isPracticeActive}"  :items="practiceBreadcrumbs"></b-breadcrumb>
        </div>
        <div class="my-4 d-flex align-items-center">
          <div class="current-patient-text-box-content" v-html="patientText" v-if="patientText" />
          <b-form-select :value="null" @change="(value) => handleOptionChange(value)">
            <b-form-select-option :value="null">
              Select an option
            </b-form-select-option>
            <b-form-select-option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div>
          <b-form>
            <b-form-group>
              <template #label>
                <b>Resource Type:</b>
              </template>
              <b-form-select id="source" @change="handleSourceSelect" v-model="selectedOption"
                class="mb-3 px-2 py-1 rounded-1">
                <b-form-select-option class="" v-for="(option, index) in sourceOptions" :key="index" :value="option">
                  {{ option.title }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-form>
          <DocumentTabs ref="tabsRef" @tab-closed="handleTabClose" />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="custom-container">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <h4 class="text-center my-2">No Patient Selected.</h4>
      </div>
    </template>
  </div>
</template>

<script>
import DocumentTabs from "../components/CurrentPatient/DocumentTabs.vue";
export default {
  components: { DocumentTabs },
  data: () => ({
    options: ["Details", "Save", "Print", "FHIR"],
    sourceOptions: [
      { value: null, title: 'Select resource type', index: -1 },
      {
        title: "DocumentReference",
        value: "documentReference",
        index: 0,
      },
      {
        title: "DiagnosticReport",
        value: "diagnosticReport",
        index: 1,
      },
      {
        title: "Observation",
        value: "observation",
        index: 2,
      },
      {
        title: "Condition",
        value: "condition",
        index: 3,
      },
      {
        title: "Immunization",
        value: "immunization",
        index: 4,
      },
      {
        title: "Questionnaire Response",
        value: "questionnaireResponse",
        index: 5,
      },
    ],
    breadcrumbs: [
      {
        text: "Home",
        to: "/",
      },
    ],
    loading: true,
    selectedOption: {
      title: "Select resource type",
      value: null,
      index: -1,
    },
  }),
  computed: {
    currentPatient() {
      return this.$store.state.system?.currentPatient;
    },
    tabsStatus() {
      return this.$store.state.system.tabsStatus;
    },
    patientText() {
      let textArray = this.currentPatient?.text?.div?.split(
        "<p><b>Patient</b></p>"
      );
      textArray.splice(
        1,
        0,
        `<p><b>Patient ID</b>: ${this.currentPatient.id}</p>`
      );
      let text = textArray.join("");
      console.log("text", text);
      return text ?? null;
      // return "<div>hi</div>";
    },
  },
  watch: {
    currentPatient(value) {
      this.selectedOption = {
        title: "Select resource type",
        value: null,
        index: -1,
      }
      this.breadcrumbs = [
        {
          text: this.$store.state.facility?.displayName,
          to: null,
          active: false,
        },
        {
          text: this.$store.state.system?.displayName,
          to: null,
          active: false,
        },
        {
          text: `Find Patient`,
          to: "/find-patient",
          active: false,
        },
      ];

      if (value !== undefined || value !== null) {
        this.breadcrumbs = [
          ...this.breadcrumbs,
          {
            text: `Patient: ${value?.name[0]?.text} - MRN:${value?.id}`,
            to: "/find-patient",
            active: true,
          },
        ];
      }
    },
    selectedSystem() {
      this.setBreadcrumbs();
    },
    selectedFacility() {
      this.setBreadcrumbs();
    },
  },
  mounted() {
    this.setBreadcrumbs();
  },
  methods: {
    async handlePatientSave() {
      const postPatient = (coreUrl, headers) => {
        return new Promise((resolver, reject) => {
          Meteor.call('saveResource', { coreUrl, resourceType: 'Patient', dest: this.$store.state?.isPracticeActive ? this.$store.state?.system?.id : this.$store.state?.practiceSystem?.id, resourceId: this.$store.state.isPracticeActive ? this.$store?.state?.practiceSystem?.currentPatient?.id : this.$store?.state?.system?.currentPatient?.id, headers }, (error, result) => {
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
    handleOptionChange(option) {
      if (option == "Save") {
        this.$bvModal.show("confirm-save");
      }
    },
    setBreadcrumbs() {
      const patient = this.currentPatient
        ? {
          text: `Patient: ${this.currentPatient.name[0].text} - MRN:${this.currentPatient.id}`,
        }
        : null;
      this.breadcrumbs = [
        {
          text: "Home",
          to: "/",
          active: false,
        },
        {
          text: this.$store.state.facility?.displayName,
          to: null,
          active: false,
        },
        {
          text: this.$store.state.system?.displayName,
          to: null,
          active: false,
        },
      ];
      if (patient) this.breadcrumbs = [...this.breadcrumbs, { ...patient }];
      this.practiceBreadcrumbs = [
        {
          text: "Practice"
        },
        {
          text: "Home",
          to: "/",
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
    handleSourceSelect(source) {
      this.$store.dispatch("cancelToken").then(() => {
        this.$refs.tabsRef.allowTab(source);
      });
    },
    handleTabClose(index) {
      //const value = this.sourceOptions.find((v) => v.index === index);
      //this.selectedOption = value;
    },
  },
};
</script>

<style lang="scss">
.current-patient-text-box-content {
  div {
    display: flex;
    width: 100%;
    column-gap: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 0px;
  }

  // border-bottom: 1px solid #f4f4f4;
  margin-right:10px;
}
</style>

<style lang="scss" scoped></style>
