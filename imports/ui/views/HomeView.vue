<template>
  <div v-if="$store.state.user"></div>
  <AuthView v-else />
</template>

<script>
// @ is an alias to /src
import AuthView from "./AuthView.vue";

export default {
  name: "HomeView",
  components: {
    AuthView,
  },
};
</script>
