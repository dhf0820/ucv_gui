import Vue from 'vue'
import App from "../imports/ui/App.vue";
import router from "../imports/ui/router";
import store from "../imports/ui/store";
import axios from "../imports/ui/plugins/axios";
import Paginate from "vuejs-paginate";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueToastify from "vue-toastify";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import '../imports/ui/plugins'

// Make BootstrapVue available throughout your project (Could be changed in plugins file)
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component("paginate", Paginate);
Vue.use(axios);
Vue.use(VueToastify);

Vue.config.productionTip = false;


Meteor.startup(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
  
})
