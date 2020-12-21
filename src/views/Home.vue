<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <h2>Khách hàng đăng ký mua bảo hiểm</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(nav, index) in navs" :key="index">
        <v-tooltip bottom color="black">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              :color="getButtonBackgroundColor(index)"
              class="ma-2"
              :class="getButtonTextColor(index) + '--text'"
              x-large
              fab
              :data-cy="nav.dataCy"
              :to="nav.to"
            >
              <v-icon dark>{{ nav.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ nav.text }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InsuranceNavs, { Nav } from "@/utils/insurance-navs";

const insuranceNavsInstance = new InsuranceNavs();

enum BUTTON_POSITION {
  CAR,
  ACCIDENT,
  HEALTH,
  CANCER,
  HOUSE,
  MOTORBIKE,
  TRAVEL,
  LIFE
}

@Component
export default class Home extends Vue {
  navs: Nav[] = insuranceNavsInstance.navs;

  getButtonBackgroundColor(buttonIndex: number): string {
    switch (buttonIndex) {
      case BUTTON_POSITION.CAR:
        return "indigo";
      case BUTTON_POSITION.ACCIDENT:
        return "red";
      case BUTTON_POSITION.HEALTH:
        return "grey lighten-1";
      case BUTTON_POSITION.CANCER:
        return "warning";
      case BUTTON_POSITION.HOUSE:
        return "success";
      case BUTTON_POSITION.MOTORBIKE:
        return "brown darken-1";
      case BUTTON_POSITION.TRAVEL:
        return "info";
      case BUTTON_POSITION.LIFE:
        return "black";
      default:
        return "";
    }
  }

  getButtonTextColor(buttonIndex: number): string {
    switch (buttonIndex) {
      case BUTTON_POSITION.HEALTH:
        return "black";
      case BUTTON_POSITION.LIFE:
        return "yellow";
      default:
        return "white";
    }
  }
}
</script>
