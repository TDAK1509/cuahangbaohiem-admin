<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped :permanent="!isMobile">
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer" />

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";

export default {
  name: "App",

  components: {
    SideBar
  },

  data: () => ({ drawer: null }),

  computed: {
    isMobile() {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
  }
};
</script>
