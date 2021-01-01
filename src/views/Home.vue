<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped :permanent="!isMobile">
      <SideBar />
    </v-navigation-drawer>

    <HeaderBar @click-logo="toggleDrawer" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import HeaderBar from "@/components/header-bar/HeaderBar.vue";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";

export default {
  name: "Home",

  components: {
    SideBar,
    HeaderBar
  },

  data: () => ({ drawer: null }),

  computed: {
    isMobile() {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
