<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab data-cy="request-tab">Chưa tư vấn</v-tab>
      <v-tab data-cy="request-tab">Đã tư vấn</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item data-cy="pending-requests">
        <CarInsuranceRequestTable
          :requests="carInsurancePendingRequests"
          is-pending
          @set-done="setDone"
        />
      </v-tab-item>
      <v-tab-item data-cy="done-requests">
        <CarInsuranceRequestTable
          :requests="carInsuranceDoneRequests"
          @set-pending="setPending"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CarInsuranceRequestTable from "@/components/insurance/CarInsuranceRequestTable.vue";
import CarInsuranceController, {
  CarInsuranceRequest
} from "@/controller/car-insurance";

const controller = new CarInsuranceController();
enum TAB {
  PENDING = 0,
  DONE = 1
}

@Component({
  components: {
    CarInsuranceRequestTable
  }
})
export default class CarInsurance extends Vue {
  carInsurancePendingRequests: CarInsuranceRequest[] = [];
  carInsuranceDoneRequests: CarInsuranceRequest[] = [];
  tab = 0;

  @Watch("tab")
  onChangeTab(selectedTab: number) {
    if (selectedTab === TAB.PENDING) {
      this.fetchPendingRequests();
      return;
    }

    if (selectedTab === TAB.DONE) {
      this.fetchDoneRequests();
      return;
    }
  }

  async fetchPendingRequests() {
    this.carInsurancePendingRequests = await controller.fetchRequests();
    await Vue.nextTick();
  }

  async fetchDoneRequests() {
    this.carInsuranceDoneRequests = await controller.fetchRequests();
    await Vue.nextTick();
  }

  async mounted() {
    await this.fetchPendingRequests();
  }

  setDone() {
    this.carInsurancePendingRequests.splice(0, 1);
  }

  setPending() {
    this.carInsuranceDoneRequests.splice(0, 1);
  }
}
</script>
