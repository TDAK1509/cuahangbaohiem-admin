<template>
  <v-app-bar app clipped-left color="black" dark>
    <v-app-bar-nav-icon v-if="isMobile" @click="onLogoClick" />

    <router-link data-cy="logo" class="header-bar__title" to="/">
      <img class="header-bar__logo" src="@/assets/logo.png" />
    </router-link>

    <v-spacer></v-spacer>

    <AccountButton @click-change-password="showChangePasswordModal = true" />

    <ChangePasswordModal
      v-if="showChangePasswordModal"
      @close="closeChangePasswordModal"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";
import AccountButton from "./AccountButton.vue";
import ChangePasswordModal from "./ChangePasswordModal.vue";

@Component({
  components: {
    AccountButton,
    ChangePasswordModal
  }
})
export default class HeaderBar extends Vue {
  showChangePasswordModal = false;

  get isMobile(): boolean {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  onLogoClick() {
    this.$emit("click-logo");
  }

  closeChangePasswordModal() {
    this.showChangePasswordModal = false;
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
