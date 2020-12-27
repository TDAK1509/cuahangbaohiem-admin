<template>
  <v-container>
    <ErrorApi v-if="isError" />

    <template v-else>
      <v-tabs v-model="tab" icons-and-text dark background-color="dark">
        <v-tab data-cy="request-tab">
          Chưa tư vấn
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        <v-tab data-cy="request-tab">
          Đã tư vấn
          <v-icon>mdi-check</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item data-cy="pending-requests">
          <CarInsuranceRequestTable
            :is-loading="isLoading"
            :requests="carInsurancePendingRequests"
            is-pending
            @set-done="setDone"
            @delete="deletePendingRequest"
          />
        </v-tab-item>
        <v-tab-item data-cy="done-requests">
          <CarInsuranceRequestTable
            v-if="carInsuranceDoneRequests !== null"
            :is-loading="isLoading"
            :requests="carInsuranceDoneRequests"
            @set-pending="setPending"
            @delete="deleteDoneRequest"
          />
        </v-tab-item>
      </v-tabs-items>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CarInsuranceRequestTable from "@/components/insurance/CarInsuranceRequestTable.vue";
import ErrorApi from "@/components/ErrorApi.vue";
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
    CarInsuranceRequestTable,
    ErrorApi
  }
})
export default class CarInsurance extends Vue {
  carInsurancePendingRequests: CarInsuranceRequest[] = [];
  carInsuranceDoneRequests: CarInsuranceRequest[] | null = null;
  tab = 0;
  isLoading = true;
  isError = false;

  @Watch("tab")
  onChangeTab(selectedTab: number) {
    if (selectedTab === TAB.PENDING) {
      return this.fetchPendingRequests();
    }

    if (selectedTab === TAB.DONE) {
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
    this.removePendingRequestLocally(requestId);

    controller.setRequestDone(requestId).catch(() => {
      this.isError = true;
    });
  }

  removePendingRequestLocally(requestId: string) {
    const targetRequest = this.carInsurancePendingRequests.findIndex(
      request => request.id === requestId
    );
    this.carInsurancePendingRequests.splice(targetRequest, 1);
  }

  setPending(requestId: string) {
    this.removeDoneRequestLocally(requestId);

    controller.setRequestPending(requestId).catch(() => {
      this.isError = true;
    });
  }

  removeDoneRequestLocally(requestId: string) {
    if (this.carInsuranceDoneRequests === null) {
      return;
    }

    const targetRequest = this.carInsuranceDoneRequests.findIndex(
      request => request.id === requestId
    );
    this.carInsuranceDoneRequests.splice(targetRequest, 1);
  }

  deletePendingRequest(requestId: string) {
    this.removePendingRequestLocally(requestId);

    controller.deleteRequest(requestId).catch(() => {
      this.isError = true;
    });
  }

  deleteDoneRequest(requestId: string) {
    this.removeDoneRequestLocally(requestId);

    controller.deleteRequest(requestId).catch(() => {
      this.isError = true;
    });
  }
}
</script>
