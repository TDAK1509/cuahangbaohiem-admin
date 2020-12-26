<template>
  <v-data-table
    :headers="headers"
    :loading="isLoading"
    :items="requests"
    sort-by="date"
    class="elevation-1"
  >
    <template v-slot:[`item.email`]="{ item }">
      <ul class="text-left">
        <li>
          <v-icon small color="black">mdi-account</v-icon> {{ item.name }}
        </li>
        <li><v-icon small color="black">mdi-email</v-icon> {{ item.email }}</li>
        <li>
          <v-icon small color="black">mdi-cellphone-iphone</v-icon>
          {{ item.phone }}
        </li>
      </ul>
    </template>

    <template v-slot:[`item.insuranceCompany`]="{ item }">
      <ul class="text-left">
        <li>
          <v-icon small color="black">mdi-shield-home</v-icon>
          {{ item.insuranceCompany }}
        </li>
        <li>
          <v-icon small color="black">mdi-cash</v-icon>
          {{ item.insuranceValue }}
        </li>
      </ul>
    </template>

    <template v-slot:[`item.id`]="{ item }">
      <div>
        <v-btn
          v-if="isPending"
          data-cy="set-done"
          icon
          x-small
          color="success"
          @click="setDone(item.id)"
        >
          <v-icon>mdi-check</v-icon>
        </v-btn>

        <v-btn
          v-else
          data-cy="set-pending"
          icon
          x-small
          color="warning"
          @click="setPending(item.id)"
        >
          <v-icon>mdi-undo</v-icon>
        </v-btn>

        <DeleteRequestButton @click="deleteRequest(item.id)" />
      </div>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { CarInsuranceRequest } from "@/controller/car-insurance";
import DeleteRequestButton from "./DeleteRequestButton.vue";

@Component({
  components: {
    DeleteRequestButton
  }
})
export default class CarInsuranceRequestTable extends Vue {
  @Prop({ required: true, type: Array })
  requests!: CarInsuranceRequest[];

  @Prop({ type: Boolean, default: false })
  isPending!: boolean;

  @Prop({ type: Boolean, default: true })
  isLoading!: boolean;

  headers = [
    { text: "Ngày", value: "date", width: "110px" },
    {
      text: "Thông tin liên lạc",
      value: "email",
      width: "280px",
      sortable: false
    },
    {
      text: "Thông tin bảo hiểm",
      value: "insuranceCompany",
      width: "200px",
      sortable: false
    },
    { text: "Ghi chú", value: "note", sortable: false },
    { text: "", value: "id", sortable: false, width: "120px" }
  ];

  get hasRequest(): boolean {
    return this.requests.length > 0;
  }

  @Emit("set-done")
  setDone(requestId: string) {
    return requestId;
  }

  @Emit("set-pending")
  setPending(requestId: string) {
    return requestId;
  }

  @Emit("delete")
  deleteRequest(requestId: string) {
    return requestId;
  }
}
</script>
