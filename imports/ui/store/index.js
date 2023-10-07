import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let user;
let hospitalsLocalStorage;
let clinicsLocalStorage;

if (Meteor.isClient) {
  user = window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : null;
  hospitalsLocalStorage = window.localStorage.getItem("hospitals")
    ? JSON.parse(window.localStorage.getItem("hospitals"))
    : null;
  clinicsLocalStorage = window.localStorage.getItem("clinics")
    ? JSON.parse(window.localStorage.getItem("clinics"))
    : null;

  console.log(clinicsLocalStorage, hospitalsLocalStorage);
}

export default new Vuex.Store({
  state: {
    user: user ? user : null,
    allFacilities: hospitalsLocalStorage,
    facility:
      hospitalsLocalStorage?.length == 1 ? hospitalsLocalStorage[0] : null,
    allPracticeFacilities: clinicsLocalStorage,
    practiceFacility:
      clinicsLocalStorage?.length == 1 ? clinicsLocalStorage[0] : null,
    allSystems:
      hospitalsLocalStorage?.length == 1
        ? hospitalsLocalStorage[0]?.systems
        : null,
    system:
      hospitalsLocalStorage?.length == 1 &&
      hospitalsLocalStorage[0].systems?.length == 1
        ? {
            ...hospitalsLocalStorage[0]?.systems[0],
            formData: {
              lastName: "",
              firstName: "",
              birthDate: "",
              encounter: "",
            },
          }
        : null,
    allPracticeSystems:
      clinicsLocalStorage?.length == 1 ? clinicsLocalStorage[0].systems : null,
    practiceSystem:
      clinicsLocalStorage?.length == 1 &&
      clinicsLocalStorage[0].systems?.length == 1
        ? {
            ...clinicsLocalStorage[0]?.systems[0],
            formData: {
              lastName: "",
              firstName: "",
              birthDate: "",
              encounter: "",
            },
          }
        : null,
    // patients: [],
    // currentPatient: null,
    lastReset: null,
    lastTab: null,
    patientSearchQuery: null,
    cacheInterval: null,
    currentTab: null,
    cancelToken: null,
    headers: user ? { Authorization: user.token } : {},
    coreUrl: null,
    isHospitalActive: false,
    isPracticeActive: false,
  },
  getters: {},
  mutations: {
    SET_IS_HOSPITAL_ACTIVE(state) {
      state.isHospitalActive = true;
      state.isPracticeActive = false;
    },
    SET_IS_PRACTICE_ACTIVE(state) {
      state.isHospitalActive = false;
      state.isPracticeActive = true;
    },
    SET_LAST_TAB(state, tab) {
      state.lastTab = tab;
    },
    SET_CANCEL_TOKEN(state, token) {
      state.cancelToken = token;
    },
    SET_CURRENT_TAB(state, payload) {
      state.currentTab = payload;
    },

    SET_CACHE_INTERVAL(state, payload) {
      console.log("setting interval ", payload);
      state.cacheInterval = payload;
    },
    CLEAR_INTERVAL(state) {
      console.log("clearing interval...............??");
      clearInterval(state.cacheInterval);
      state.cacheInterval = null;
    },
    SET_PATIENTS_ONLY(state, payload) {
      const { id } = state.system;
      let _system = { ...state.system };
      _system = {
        ..._system,
        patients: [...payload],
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === id) {
          return _system;
        }
        return s;
      });
    },
    SET_PATIENT_SEARCH_QUERY(state, payload) {
      state.patientSearchQuery = payload;
    },
    LOGIN_USER(state, user) {
      state.user = user;
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem(
        "hospitals",
        JSON.stringify(
          user.facilities?.filter((f) => f.classification == "HOSP")
        )
      );
      window.localStorage.setItem(
        "clinics",
        JSON.stringify(
          user.facilities?.filter((f) => f.classification == "CLIN")
        )
      );
    },
    LOGOUT_USER(state) {
      state.user = null;
      state.allFacilities = null;
      state.facility = null;
      state.allSystems = null;
      state.system = null;
      state.allPracticeFacilities = null;
      state.practiceFacility = null;
      state.allPracticeSystems = null;
      state.practiceSystem = null;
      localStorage.removeItem("user");
      localStorage.removeItem("hospitals");
      localStorage.removeItem("clinics");
      // state.patients = null;
      // state.currentPatient = null;
      Vue.prototype.$axios.defaults.headers.common["Fhir-System"] = null;
    },
    SET_FACILITY(state, facility) {
      state.facility = facility;
      state.allSystems = facility?.systems;
      if (facility?.systems?.length === 1) {
        state.system = {
          ...facility?.systems[0],
          formData: {
            lastName: "",
            firstName: "",
            birthDate: "",
            encounter: "",
          },
        };
        Vue.prototype.$axios.defaults.headers.common["Fhir-System"] =
          facility?.systems[0].id;
      }
    },
    SET_PRACTICE_FACILITY(state, facility) {
      state.practiceFacility = facility;
      state.allPracticeSystems = facility?.systems;
      if (facility?.systems?.length === 1) {
        state.practiceSystem = facility?.systems[0];
        Vue.prototype.$axios.defaults.headers.common["Fhir-System"] =
          facility?.systems[0].id;
      }
    },
    SET_ALL_SYSTEMS(state, systems) {
      state.allSystems = systems;
    },
    SET_ALL_PRACTICE_SYSTEMS(state, systems) {
      state.allSystems = systems;
    },
    SET_SYSTEM(state, system) {
      const _system = system;
      if (!system) state.system = null;
      if (process.env.NODE_ENV == "development")
        console.log("SET_SYSTEM: ", _system);
      // RAED_DELETE
      Vue.prototype.$axios.defaults.baseURL =
        _system.coreUrl || process.env.LOGIN_BASE_URL;

      if (process.env.NODE_ENV == "development")
        console.log("NEW_STATE: ", state);
      if (system?.formData === undefined) {
        _system.formData = {
          lastName: "",
          firstName: "",
          birthDate: "",
          encounter: "",
        };
      }
      if (system?.tabsStatus === undefined) {
        _system.tabsStatus = {
          documentReference: true,
          diagnosticReport: false,
          observation: false,
          condition: false,
          immunization: false,
          questionnaireResponse: false,
        };
      }
      if (system?.queryCache === undefined) {
        _system.searchQueryCache = {
          id: null,
          page: null,
        };
        _system.queryCache = {
          documentReference: {
            id: null,
            page: null,
          },
          diagnosticReport: {
            id: null,
            page: null,
          },
          observation: {
            id: null,
            page: null,
          },
          condition: {
            id: null,
            page: null,
          },
          immunization: {
            id: null,
            page: null,
          },
          questionnaireResponse: {
            id: null,
            page: null,
          },
        };
      }
      state.system = { ..._system };
      // RAED_DELETE
      Vue.prototype.$axios.defaults.headers.common["Fhir-System"] = system.id;
    },
    SET_PRACTICE_SYSTEM(state, system) {
      const _system = system;
      if (process.env.NODE_ENV == "development")
        console.log("SET_PRACTICE_SYSTEM: ", _system);
      // RAED_DELETE
      Vue.prototype.$axios.defaults.baseURL =
        _system.coreUrl || process.env.LOGIN_BASE_URL;

      if (process.env.NODE_ENV == "development")
        console.log("NEW_STATE: ", state);
      if (system?.formData === undefined) {
        _system.formData = {
          lastName: "",
          firstName: "",
          birthDate: "",
          encounter: "",
        };
      }
      if (system?.tabsStatus === undefined) {
        _system.tabsStatus = {
          documentReference: true,
          diagnosticReport: false,
          observation: false,
          condition: false,
          immunization: false,
          questionnaireResponse: false,
        };
      }
      if (system?.queryCache === undefined) {
        _system.searchQueryCache = {
          id: null,
          page: null,
        };
        _system.queryCache = {
          documentReference: {
            id: null,
            page: null,
          },
          diagnosticReport: {
            id: null,
            page: null,
          },
          observation: {
            id: null,
            page: null,
          },
          condition: {
            id: null,
            page: null,
          },
          immunization: {
            id: null,
            page: null,
          },
          questionnaireResponse: {
            id: null,
            page: null,
          },
        };
      }
      state.practiceSystem = { ..._system };
      // RAED_DELETE
      Vue.prototype.$axios.defaults.headers.common["Fhir-System"] = system.id;
    },
    SET_ALL_FACILITIES(state, facilities) {
      state.allFacilities = facilities;
    },
    SET_ALL_PRACTICE_FACILITIES(state, facilities) {
      state.allPracticeFacilities = facilities;
    },
    SET_CURRENT_PATIENT(state, patient) {
      // state.currentPatient = patient;
      let _system = state.system;
      _system = {
        ..._system,
        currentPatient: patient,
        tabsStatus: {
          documentReference: true,
          diagnosticReport: false,
          observation: false,
          condition: false,
          immunization: false,
          questionnaireResponse: false,
        },
      };
      _system.queryCache = {
        documentReference: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
        diagnosticReport: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
        observation: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
        condition: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
        immunization: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
        questionnaireResponse: {
          countInPage: 0,
          id: null,
          pageNumber: 1,
          totalPages: 0,
        },
      };

      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
      state.system = { ..._system };
    },
    SET_PATIENTS(state, data) {
      // state.patients = [...data];
      const { id } = state.system;
      let _system = { ...state.system };
      _system = {
        ..._system,
        patients: [...data.patients],
        searchQueryCache: { ...data?.cache },
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === id) {
          return _system;
        }
        return s;
      });
    },
    SET_PATIENTS_PRACTICE(state, data) {
      // state.patients = [...data];
      const { id } = state.practiceSystem;
      let _system = { ...state.practiceSystem };
      _system = {
        ..._system,
        patients: [...data.patients],
        searchQueryCache: { ...data?.cache },
      };
      state.practiceSystem = { ..._system };
      state.allPracticeSystems = state.allPracticeSystems.map((s) => {
        if (s.id === id) {
          return _system;
        }
        return s;
      });
    },
    SET_UC_URL(state, data) {
      state.coreUrl = data;
    },
    SET_SEARCHQUERYCACHE(state, data) {
      let _system = { ...state.system };
      _system = {
        ..._system,
        searchQueryCache: {
          ..._system.searchQueryCache,
          ...data,
        },
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
    },

    RESET_DATA(state) {
      let _system = state.system;
      _system.patients = [];
      _system.currentPatient = null;
      _system.formData = null;
      state.system = { ..._system };
      state.lastReset = new Date(Date.now());
    },
    ADD_TO_CURRENT_PATIENT(state, data) {
      const _system = { ...state.system };
      _system.currentPatient = {
        ...state.system.currentPatient,
        [data.key]: data.value,
      };
      state.system = { ..._system };

      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
    },
    HANDLE_HOME(state) {
      state.system = null;
      state.facility = null;
    },
    UPDATE_FORMDATA(state, payload) {
      const _system = { ...state.system };
      _system.formData = {
        ...state.system?.formData,
        [payload.where]: payload.value,
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === state.system.id) {
          return state.system;
        }
        return s;
      });
    },
    UPDATE_TABSSTATUS(state, payload) {
      const _system = state.system;
      _system.tabsStatus[payload.key] = payload.value;
      state.system = _system;
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
    },
    SET_QUERYCACHE(state, payload) {
      const _system = { ...state.system };
      console.log("payload", payload);
      _system.queryCache = {
        ..._system.queryCache,
        [payload.head]: { ...payload.value },
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
    },
    SET_CURRENTPAGE(state, payload) {
      const _system = { ...state.system };
      console.log("payload", _system.queryCache[payload.head]);
      _system.queryCache = {
        ..._system.queryCache,
        [payload.head]: {
          ..._system.queryCache[payload.head],
          pageNumber: payload.value,
        },
      };
      state.system = { ..._system };
      state.allSystems = state.allSystems.map((s) => {
        if (s.id === _system.id) {
          return _system;
        }
        return s;
      });
    },
    async SET_HEADER(state, header) {
      console.log(" Header ", header);
      state.headers[header.head] = header.value;
    },
  },
  actions: {
    setHospitalActive({ commit }) {
      commit("SET_IS_HOSPITAL_ACTIVE");
    },
    setPracticeActive({ commit }) {
      commit("SET_IS_PRACTICE_ACTIVE");
    },
    loginUser({ commit }, data) {
      const user = {
        ...data,
      };
      commit("LOGIN_USER", user);
    },
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    },
    setFacility({ commit }, data) {
      commit("SET_ALL_SYSTEMS", data?.systems);
      commit("SET_FACILITY", data ? { ...data } : data);
    },
    setAllSystems({ commit }, data) {
      commit("SET_ALL_SYSTEMS", data);
    },
    setAllPracticeSystems({ commit }, data) {
      commit("SET_ALL_PRACTICE_SYSTEMS", data);
    },
    setSystem({ commit }, data) {
      commit("SET_SYSTEM", data ? { ...data } : data);
    },
    setPracticeSystem({ commit }, data) {
      commit("SET_PRACTICE_SYSTEM", { ...data });
    },
    setAllFacilities({ commit }, data) {
      if (data?.length == 1) commit("SET_FACILITY", { ...data[0] });
      commit("SET_ALL_FACILITIES", [...data]);
    },
    setPractices({ commit }, data) {
      if (data) {
        commit("SET_PRACTICE", data[0]);
        commit("SET_ALL_PRACTICE_FACILITIES", data);
        commit("SET_PRACTICE_FACILITY", { ...data[0] });
      }
    },
    setPracticeFacility({ commit }, data) {
      commit("SET_ALL_PRACTICE_SYSTEMS", data?.systems);
      commit("SET_PRACTICE_FACILITY", { ...data });
    },
    setAxiosParams({ commit }, data) {
      commit("SET_UC_URL", data?.coreUrl);
      commit("SET_HEADER", data.headers);
    },
    setCurrentPatient({ commit }, data) {
      commit("SET_CURRENT_PATIENT", data);
    },
    async searchPatients({ commit }, data) {
      try {
        commit("SET_PATIENTS", data);
      } catch (e) {
        console.log(e);
      }
    },
    async searchPatientsPractice({ commit }, data) {
      try {
        commit("SET_PATIENTS_PRACTICE", data);
      } catch (e) {
        console.log(e);
      }
    },
    handleAddToCurrentPatient({ commit }, data) {
      console.log("handleAddToCurrentPatient data", data);
      commit("ADD_TO_CURRENT_PATIENT", data);
    },
    resetData({ commit }) {
      commit("RESET_DATA");
    },
    handleHome({ commit }) {
      commit("HANDLE_HOME");
    },
    async cancelToken({ state, commit }) {
      console.log("cancelling previous axios...");
      await state.cancelToken.cancel();
      const _token = await Vue.prototype.$axios.CancelToken.source();
      commit("SET_CANCEL_TOKEN", _token);
      // return new Promise((resolve, reject) => {
      //   await state.cancelToken.cancel();

      // })
    },
    setHeader({ commit }, data) {
      if (process.env.NODE_ENV === "development")
        console.log("set header", data);
      commit("SET_HEADER", data);
    },
  },
  modules: {},
});
