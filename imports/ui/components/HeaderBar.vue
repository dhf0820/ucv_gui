<template>
  <div>
    <b-navbar type="dark" class="header">
      <b-navbar-nav class="w-100">
        <b-nav-item @click="handleHome" class="header-title"
          >UniversalCharts</b-nav-item
        >
        <template v-if="$store.state.user">
          <b-nav-item class="ms-auto header-link" to="/find-patient">
            <b-icon-search /> Find Patient
          </b-nav-item>
          <b-nav-item class="header-link" to="/current-patient">
            <b-icon-person-fill /> Current Patient
          </b-nav-item>
          <!-- <b-nav-item class="header-link" to="/pending-releases">
            <b-icon-list-task /> Pending Releases
          </b-nav-item> -->
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown right class="nav-button">
            <template #button-content>
              <template> <b-icon-gear-fill /> Admin </template>
            </template>
            <b-dropdown-item class="header-dropdown-icon" to="/create-patient">
              <b-icon-people-fill size="sm" /> Create Patient
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-people-fill size="sm" /> Users
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-building size="sm" /> Docuemnt Sources
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-card-text size="sm" /> Manage Types
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-card-text size="sm" /> Manage Roles
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-tablet size="sm" /> Facilities
            </b-dropdown-item>
            <b-dropdown-item class="header-dropdown-icon">
              <b-icon-printer-fill size="sm" /> Printers
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="header-link">
            <b-icon-question-lg /> Help
          </b-nav-item>
          <b-nav-item-dropdown right class="header-link me-auto">
            <template #button-content>
              {{ $store.state.user && $store.state.user.fullName }}
            </template>
            <b-dropdown-item class="header-dropdown-icon">
              Profile
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item-dropdown
            left
            class="header-link ms-auto"
            :class="!$store.state.facility && 'not-selected'"
          >
            <template #button-content>
              <template>
                {{ $store.state.facility?.displayName || "Select A Facility" }}
              </template>
            </template>
            <b-dropdown-item
              class="header-dropdown-icon"
              v-for="facility in $store.state.allFacilities"
              :key="facility.id"
              @click="$store.dispatch('setFacility', { ...facility })"
            >
              {{ facility.displayName }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            left
            class="header-link"
            :class="!$store.state.system && 'not-selected'"
          >
            <template #button-content>
              <template>
                {{ $store.state.system?.displayName || "Select A System" }}
              </template>
            </template>
            <b-dropdown-item
              class="header-dropdown-icon"
              v-for="system in allSystems"
              :key="system.id"
              @click="$store.dispatch('setSystem', { ...system })"
            >
              {{ system.displayName }}
            </b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item
            @click="handleLogout"
            class="d-flex justify-content-center align-items-center"
          >
            <b-icon-box-arrow-right size="lg" class="pr-5" />
          </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item class="header-link mx-0 ms-auto" to="/auth"
            >Login</b-nav-item
          >
        </template>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    allSystems: ({ $store }) => $store.state.allSystems,
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch("logoutUser");
      await this.$router.push("/auth");
      window.location.reload();
    },
    async handleHome() {
      await this.$store.dispatch("handleHome", null);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
// a,
// .nav-link,
// .nav-button {
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 13px;
//   color: rgb(214, 214, 214) !important;
//   &:hover {
//     color: #fff !important;
//   }
// }

.header-dropdown-icon {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}

.nav-button {
  min-width: 75px;
  border-right: 1px solid #222;
  margin: auto 0;
  height: 100%;
  // a {
  // color: rgb(214, 214, 214) !important;
  // }
  &:hover {
    background: rgba(25, 31, 36, 0.6);
    padding: 3px 0px;
  }
}

.header {
  background: linear-gradient(to bottom, #2c3742 0%, #28303a 100%);
  padding: 0;
  height: 50px;

  &-title {
    font-weight: bold;
    border-right: 1px solid #222;
    a {
      font-size: large !important;
      color: #fff !important;
    }
    & > *:hover {
      background: rgba(25, 31, 36, 0.6);
    }
  }

  .not-selected {
    background: rgb(214, 214, 214);
    transition: all ease-in-out 150ms;
    animation-duration: 0.75s;
    animation-name: highlight-text;
    animation-iteration-count: infinite;
    &:hover {
      animation: none;
      a,
      button {
        color: #fff !important;
      }
      .dropdown-item {
        color: #000 !important;
      }
    }
    a,
    button {
      color: #222 !important;
    }
  }

  .header-link {
    min-width: 75px;
    border-right: 1px solid #222;
    margin: auto 0;
    height: 100%;
    &:hover {
      background: rgba(25, 31, 36, 0.6);
      padding: 3px 0px;
    }
  }
  .dropdown-item {
    color: #000 !important;
  }
}
@keyframes highlight-text {
  0% {
    background: rgb(200, 200, 200);
    // background: linear-gradient(to bottom, #2c3742 0%, #28303a 100%);
  }

  50% {
    background: rgb(214, 214, 214);
  }

  90% {
    background: rgb(235, 235, 235);
  }
}
</style>
