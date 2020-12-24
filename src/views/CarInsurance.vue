<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab data-cy="request-tab">Chưa tư vấn</v-tab>
      <v-tab data-cy="request-tab">Đã tư vấn</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item data-cy="pending-requests">
        <CarInsuranceRequestTable
          :is-loading="isLoading"
          :is-error="isError"
          :requests="carInsurancePendingRequests"
          is-pending
          @set-done="setDone"
        />
      </v-tab-item>
      <v-tab-item data-cy="done-requests">
        <CarInsuranceRequestTable
          v-if="carInsuranceDoneRequests !== null"
          :is-loading="isLoading"
          :is-error="isError"
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
  carInsuranceDoneRequests: CarInsuranceRequest[] | null = null;
  tab = 0;
  isLoading = true;
  isError = true;

  @Watch("tab")
  onChangeTab(selectedTab: number) {
    if (selectedTab === TAB.DONE && this.carInsuranceDoneRequests === null) {
      return this.fetchDoneRequests();
    }
  }

  async fetchPendingRequests() {
    this.isLoading = true;

    try {
      this.carInsurancePendingRequests = await controller.fetchPendingRequests();
      await Vue.nextTick();
      this.isError = false;
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  async fetchDoneRequests() {
    this.isLoading = true;

    try {
      this.carInsuranceDoneRequests = await controller.fetchDoneRequests();
      await Vue.nextTick();
      this.isError = false;
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  async mounted() {
    await this.fetchPendingRequests();
  }

  setDone(requestId: string) {
    const targetRequest = this.carInsurancePendingRequests.findIndex(
      request => request.id === requestId
    );
    this.carInsurancePendingRequests.splice(targetRequest, 1);
    controller.setRequestDone(requestId).catch(() => {
      this.isError = true;
    });
  }

  setPending(requestId: string) {
    if (this.carInsuranceDoneRequests === null) {
      return;
    }

    const targetRequest = this.carInsuranceDoneRequests.findIndex(
      request => request.id === requestId
    );
    this.carInsuranceDoneRequests.splice(targetRequest, 1);
    controller.setRequestPending(requestId).catch(() => {
      this.isError = true;
    });
  }
}
</script>
