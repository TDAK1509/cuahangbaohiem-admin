<template>
  <v-list data-cy="side-bar" nav>
    <v-subheader>YÊU CẦU MUA BẢO HIỂM</v-subheader>

    <v-list-item-group v-model="selectedNav" color="primary">
      <v-list-item v-for="({ icon, text, to }, i) in navs" :key="i" :to="to">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InsuranceNavs, { Nav } from "@/utils/insurance-navs";

const insuranceNavsInstance = new InsuranceNavs();

@Component
export default class SideBar extends Vue {
  selectedNav = 0;
  navs: Nav[] = insuranceNavsInstance.navs;
}
</script>
