<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped :permanent="!isMobile">
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="black" dark>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer" />

      <router-link class="app__title" to="/">
        <img class="app__logo" src="@/assets/logo.png" />
      </router-link>
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

<style lang="scss" scoped>
.app__title {
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 1rem;
}
.app__logo {
  height: 70%;
}
</style>
