<template>
  <b-card no-body class="documents">
    <!-- v-model="tabIndex" -->
    <b-tabs class="document_tabs" v-if="tabIndex!=-1">
      <b-tab
        :active="tabIndex === 0"
        title="Document Reference"
        v-if="tabsStatus.documentReference"
        @click="tabIndex = 0"
      >
        <template #title>
          Document Reference
          <b-icon-x
            v-show="canClose()"
            @click="closeTab('documentReference')"
          />
        </template>
        <DocumentReferenceTab
          @intervalChange="handleInterval"
          :theInterval="theInterval"
          :fields="fields"
        />
      </b-tab>
      <b-tab
        title="Diagnostic Report"
        :active="tabIndex === 1"
        v-if="tabsStatus.diagnosticReport"
        @click="tabIndex = 1"
      >
        <template #title>
          Diagnostic Report
          <b-icon-x v-show="canClose()" @click="closeTab('diagnosticReport')" />
        </template>
        <DiagnosticReportTab :fields="fields" />
      </b-tab>
      <b-tab
        v-if="tabsStatus.observation"
        :active="tabIndex === 2"
        @click="tabIndex = 2"
      >
        <template #title>
          Observation
          <b-icon-x v-if="canClose()" @click="closeTab('observation')" />
        </template>
        <ObservationTab :fields="fields" />
      </b-tab>
      <b-tab
        v-if="tabsStatus.condition"
        :active="tabIndex === 3"
        @click="tabIndex = 3"
      >
        <template #title>
          Condition
          <b-icon-x v-if="canClose()" @click="closeTab('condition')" />
        </template>
        <ConditionTab :fields="fields" />
      </b-tab>
      <b-tab
        v-if="tabsStatus.immunization"
        :active="tabIndex === 4"
        @click="tabIndex = 4"
      >
        <template #title>
          Immunization
          <b-icon-x v-if="canClose()" @click="closeTab('immunization')" />
        </template>

        <ImmunizationTab :fields="fields" />
      </b-tab>
      <b-tab
        v-if="tabsStatus.questionnaireResponse"
        :active="tabIndex === 5"
        @click="tabIndex = 5"
        ><template #title>
          Questionnaire Response
          <b-icon-x
            v-if="canClose()"
            @click="closeTab('questionnaireResponse')"
          />
        </template>
        <QuestionnaireResponseTab :fields="fields" />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import DocumentReferenceTab from "./DocumentReferenceTab.vue";
import DiagnosticReportTab from "./DiagnosticReportTab.vue";
import ObservationTab from "./ObservationTab.vue";
import ConditionTab from "./ConditionTab.vue";
import ImmunizationTab from "./ImmunizationTab.vue";
import QuestionnaireResponseTab from "./QuestionnaireResponseTab.vue";
export default {
  components: {
    DocumentReferenceTab,
    DiagnosticReportTab,
    ObservationTab,
    ConditionTab,
    ImmunizationTab,
    QuestionnaireResponseTab,
  },
  watch: {
    async tabIndex(to, from) {
      await this.$store.commit("CLEAR_INTERVAL");
      clearInterval(this.theInterval);
      console.log("clearing interval.... to - " + to + " from - " + from);
      this.$store.commit("SET_LAST_TAB", from);
      // refs = 0
      // diagnos = 1
      // observation = 2
      // condition = 3
      // immunization = 4
      // questionnair = 5

      console.log("tab change", to);
      this.$store.commit("SET_CURRENT_TAB", to);
    },
  },
  mounted() {
    console.log(this.tabIndex)
  },
  computed: {
    tabsStatus: ({ $store }) => $store.state.system.tabsStatus,
    currentTab: ({ $store }) => $store.state.currentTab,
  },
  data: () => ({
    theInterval: null,
    // tabsStatus: {
    //   documentReference: true,
    //   diagnosticReport: false,
    //   observation: false,
    //   condition: false,
    //   immunization: false,
    //   questionnaireResponse: false,
    // },
    tabIndex: -1,
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
  methods: {
    handleInterval(value) {
      this.theInterval = value;
    },
    async allowTab(tab) {
      await this.$store.commit("CLEAR_INTERVAL");
      console.log("tab", tab);
      await clearInterval(this.theInterval);
      // this.tabsStatus = { ...this.tabsStatus, [tab.value]: true };
      await this.$store.dispatch("cancelToken");

      // await this.$store.dispatch("cancelToken");
      new Promise((resolve) => {
        this.$store.commit("UPDATE_TABSSTATUS", {
          key: tab.value,
          value: true,
        });
        resolve();
      }).then(() => {
        this.tabIndex = tab.index;
      });
      // .then(() => {
      // });
      // setTimeout(() => {
      // }, 250);
    },
    canClose() {
      const trueArray = [];
      Object.keys(this.tabsStatus).forEach((key) =>
        this.tabsStatus[key] ? trueArray.push(key) : null
      );
      const allow = trueArray.length > 1;
      return allow;
    },
    closeTab(key) {
      // this.tabsStatus = {
      //   ...this.tabsStatus,
      //   [key]: false,
      // };
      this.tabIndex = this.$store.state.lastTab;
      this.$store.commit("UPDATE_TABSSTATUS", { key, value: false });
      this.$emit("tab-closed", this.tabIndex);
    },
  },
};
</script>

<style lang="scss">
.documents {
  p {
    margin: 0 0 10px 0;
  }
}
.loading-container {
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.enrtires-box-content {
  div {
    flex-wrap: wrap;
    display: flex;
    column-gap: 10px;
    padding: 0px 10px;
    &:hover {
      // background: #f7f7f7;
      cursor: pointer;
    }
  }
  p {
    font-size: 14px;
    margin: 0 !important;
  }
  // & > * {
  //   border-bottom: 1px solid #ccc;
  // }
  // &:last-child {
  //   border-bottom: 1px solid #fff;
  // }
}
</style>
