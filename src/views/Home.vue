<template>
  <div class="home">
    Khách hàng đăng ký mua bảo hiểm

    <v-btn
      v-for="(nav, index) in navs"
      :key="index"
      :data-cy="nav.dataCy"
      :to="nav.to"
      color="blue-grey"
      class="ma-2 white--text"
      fab
    >
      <v-icon dark>{{ nav.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InsuranceNavs, { Nav } from "@/utils/insurance-navs";

const insuranceNavsInstance = new InsuranceNavs();

@Component
export default class Home extends Vue {
  navs: Nav[] = insuranceNavsInstance.navs;
}
</script>
