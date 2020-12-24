<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th
            v-for="(heading, index) in tableHeadings"
            :key="index"
            class="text-left"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td :colspan="tableHeadings.length">Loading</td>
        </tr>

        <tr v-else-if="isError">
          <td :colspan="tableHeadings.length">Error</td>
        </tr>

        <tr v-else-if="!hasRequest" data-cy="empty">
          <td :colspan="tableHeadings.length">Empty</td>
        </tr>

        <tr
          v-else
          v-for="(request, index) in requests"
          :key="`request${index}`"
        >
          <td>{{ request.date }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.email }}</td>
          <td>{{ request.phone }}</td>
          <td>{{ request.insuranceCompany }}</td>
          <td>{{ request.insuranceValue }}</td>
          <td>{{ request.note }}</td>
          <td>
            <v-btn
              v-if="isPending"
              fab
              small
              color="success"
              dark
              data-cy="set-done"
              @click="setDone(request.id)"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>

            <v-btn
              v-else
              fab
              small
              color="warning"
              dark
              data-cy="set-pending"
              @click="setPending"
            >
              <v-icon>mdi-undo</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { CarInsuranceRequest } from "@/controller/car-insurance";

@Component
export default class CarInsuranceRequestTable extends Vue {
  @Prop({ required: true, type: Array })
  requests!: CarInsuranceRequest[];

  @Prop({ type: Boolean, default: false })
  isPending!: boolean;

  @Prop({ type: Boolean, default: true })
  isLoading!: boolean;

  @Prop({ type: Boolean, default: true })
  isError!: boolean;

  tableHeadings: string[] = [
    "Ngày",
    "Tên",
    "Email",
    "Điện thoại",
    "Công ty bảo hiểm",
    "Số tiền bảo hiểm",
    "Ghi chú"
  ];

  get hasRequest(): boolean {
    return this.requests.length > 0;
  }

  @Emit("set-done")
  setDone(requestId: string) {
    return requestId;
  }

  @Emit("set-pending")
  setPending() {
    //
  }
}
</script>
