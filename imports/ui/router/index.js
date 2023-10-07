import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-view",
    component: () => import("../views/Home"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/auth",
    name: "auth-view",
    component: () => import("../views/AuthView"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/find-patient",
    name: "patient-view",
    component: () => import("../views/FindPatientView"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/practice-find-patient",
    name: "practice-patient-view",
    component: () => import("../views/FindPatientViewPractice"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/current-patient",
    name: "current-patient",
    component: () => import("../views/CurrentPatientView"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/pending-releases",
    name: "pending-releases",
    component: () => import("../views/PendingReleasesView"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/create-patient",
    name: "create-patient",
    component: () => import("../views/Admin/CreatePatientView"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
    meta: {
      keepAlive: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const canAccess = store.state.user !== null;
  if (to.fullPath == "/") {
    if (store.state.allFacilities.length === 1) {
      store.dispatch("setFacility", store.state.allFacilities[0]);
      if (store.state.allFacilities[0].systems.length == 1) {
        store.dispatch("setSystem", store.state.allFacilities[0].systems[0]);
      }
    }
  }
  if (
    to.fullPath == "/current-patient" &&
    !store.state.system &&
    !store.state.practiceSystem
  )
    next("/");
  if (to.fullPath == "/find-patient") {
    if (!store.state.system) next("/");
    store.dispatch("setHospitalActive");
    store.dispatch("setAxiosParams", {
      coreUrl: store.state.system.coreUrl,
    });
    store.dispatch("setHeader", {
      head: "Fhir-System",
      value: store.state.system.id,
    });
  } else if (to.fullPath == "/practice-find-patient") {
    store.dispatch("setPracticeActive");
    store.dispatch("setAxiosParams", {
      coreUrl: store.state.practiceSystem.coreUrl,
    });
    store.dispatch("setHeader", {
      head: "Fhir-System",
      value: store.state.practiceSystem.id,
    });
  }
  if (to.fullPath !== "/auth" && !canAccess) {
    next("/auth");
    return;
  } else if (to.fullPath === "/auth" && canAccess) {
    next("/find-patient");
  } else {
    next();
  }
});
export default router;
