<template>
  <v-app-bar app clipped-left color="black" dark>
    <v-app-bar-nav-icon v-if="isMobile" @click="onLogoClick" />

    <router-link data-cy="logo" class="header-bar__title" to="/">
      <img class="header-bar__logo" src="@/assets/logo.png" />
    </router-link>

    <v-spacer></v-spacer>

    <v-btn data-cy="logout" @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";
import AuthController from "@/controller/auth";

@Component
export default class HeaderBar extends Vue {
  get isMobile(): boolean {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  onLogoClick() {
    this.$emit("click-logo");
  }

  logout() {
    AuthController.logout();
  }
}
</script>

<style lang="scss" scoped>
.header-bar__title {
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 1rem;
}
.header-bar__logo {
  height: 70%;
}
</style>
