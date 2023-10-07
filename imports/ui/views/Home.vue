<template>
  <b-container>
    <div class="d-flex justify-content-between">
        <b-breadcrumb class="mb-0" :items="breadcrumbs"></b-breadcrumb>
        <b-breadcrumb class="mb-0" :items="practiceBreadcrumbs"></b-breadcrumb>
      </div>
    <div>
      <b-row v-if="allFacilities && allFacilities.length && !selectedSystem" class="selection_container">

        <b-col cols="6">
          <div class="row_container">
            <h4>Facilities</h4>
            <b-form-select class="mb-3 px-2 py-1 rounded-1" @change="(value) => handleFacilitySelect(value)"
              v-model="selectedFacility"
              :options="[{ value: null, text: 'Select a facility' }].concat(allFacilities.map(f => ({ value: f, text: f.displayName })))"></b-form-select>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="row_container">
            <h4>Systems</h4>
            <b-form-select class="mb-3 px-2 py-1 rounded-1" :disabled="!selectedFacility"
              @change="(value) => handleSystemSelect(value)" v-model="selectedSystem && selectedSystem.id"
              :options="allSystems ? [{ value: null, text: 'Select a system' }].concat(allSystems.map(s => ({ value: s.id, text: s.displayName }))) : [{ value: null, text: 'Select a system' }]"></b-form-select>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="d-flex justify-content-end">
            <b-button class="next-button my-2 px-5" :disabled="checkNextStatus()" @click="handleNextButton">
              <b-icon-arrow-bar-right scale="1.5" />
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [],
    practiceBreadcrumbs: [],
  }),
  computed: {
    allFacilities: ({ $store }) => $store.state.allFacilities,
    allSystems: ({ $store }) => $store.state.allSystems,
    selectedFacility: ({ $store }) => $store.state.facility,
    selectedSystem: ({ $store }) => $store.state.system,
    allPracticeFacilities: ({ $store }) => $store.state.allPracticeFacilities,
    allPracticeSystems: ({ $store }) => $store.state.allPracticeSystems,
    selectedPracticeFacility: ({ $store }) => $store.state.practiceFacility,
    selectedPracticeSystem: ({ $store }) => $store.state.practiceSystem,
  },
  watch: {
    selectedSystem() {
      this.setBreadcrumbs();
    },
    selectedFacility() {
      this.setBreadcrumbs();
    },
  },  
  mounted() {
    this.setBreadcrumbs();
    console.log(this.$store.state)
  },
  updated: () => {
    this.setBreadcrumbs();
  },
  methods: {
    handleFacilitySelect(facility) {
      this.$store.dispatch("setFacility", facility);
      if (this.selectedSystem) this.$store.dispatch("setSystem", null);
    },
    handlePracticeFacilitySelect(facility) {
      this.$store.dispatch("setPracticeFacility", facility);
      if (this.selectedPracticeSystem) this.$store.dispatch("setPracticeSystem", null);
    },
    handleSystemSelect(systemId) {
      if (!systemId) this.$store.dispatch("setSystem", null);
      let system = this.allSystems?.find(s => s.id == systemId)
      this.$store.dispatch("setSystem", system);
    },
    handlePracticeSystemSelect(systemId) {
      if (!systemId) this.$store.dispatch("setPracticeSystem", null);
      let system = this.allPracticeSystems?.find(s => s.id == systemId)
      this.$store.dispatch("setPracticeSystem", system);
    },
    handleNextButton() {
      this.$router.push("/find-patient");
    },
    handlePracticeNextButton() {
      this.$router.push("/practice-find-patient");
    },
    checkNextStatus() {
      if (this.selectedFacility?.id === undefined) return true;
      if (this.selectedSystem?.id === undefined) return true;
      return false;
    },
    checkNextPracticeStatus() {
      if (this.selectedPracticeFacility?.id === undefined) return true;
      if (this.selectedPracticeSystem?.id === undefined) return true;
      return false;
    },
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
  },
};
</script>

<style lang="scss" scoped>
.selection_container {
  border: 1px solid #ccc;
  padding: 4px;
  margin: 50px auto;
  width: 75%;
}

.row_container {
  .item {
    margin: 5px 0;
    background: #bbbbbb;
    padding: 5px;
    cursor: pointer;
    transition: all ease-in-out 350ms;
    border-radius: 5px;
    font-size: 18px;
    border: 2px solid transparent;
  }

  .item:hover {
    background: rgb(247, 247, 247);
    border: 2px solid #616161;
  }

  .selected {
    background: rgb(247, 247, 247);
    border: 2px solid #616161;
  }
}

.next-button {
  transition: all ease-in-out 250ms;
  background: linear-gradient(to bottom, #2c3742 0%, #28303a 100%);

  &:disabled {
    background: #bbbbbb;
  }
}
</style>
