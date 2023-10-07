<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <HeaderBar />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
export default {
  components: { HeaderBar },

  mounted() {
    const _cancelToken = this.$axios.CancelToken.source();
    this.$store.commit("SET_CANCEL_TOKEN", _cancelToken);
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 0 !important;
}

.breadcrumb {
  padding: 10px;
  background-color: transparent;
  order: 2;

  li:first-of-type a {
    color: #000;
    text-decoration: none
  }
}

.activeBreadcrumb {
  background-color: #f0ecec !important;

  a {
    color: #0e499f
  }

  .active {
    color: rgb(0, 0, 0);
  }
}

.activeBreadcrumb::after {
  content: "(active)";
  margin-left: 5px;
}

.breadcrumb:hover {
  background-color: #bbb9b9
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

.custom-container {
  text-align: left;
  margin: 2px 15px;
}

.c-pointer {
  cursor: pointer !important;
}

.btn-info-custom {
  background-color: #428bca !important;
  border-color: #357ebd !important;
  color: #fff !important;
  border-radius: 5px !important;
}

.btn-light-custom {
  background: #fff !important;
  color: #000 !important;
  border-radius: 5px !important;
  border: 1px solid #a0a8b8 !important;
}
</style>
