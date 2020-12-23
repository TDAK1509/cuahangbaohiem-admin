<template>
  <v-container>
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
          <tr v-for="(row, index) in carInsuranceRequests" :key="`row${index}`">
            <td v-for="(cell, cellIndex) in row" :key="`cell${cellIndex}`">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CarInsuranceController, {
  CarInsuranceRequest
} from "@/controller/car-insurance";

const controller = new CarInsuranceController();

@Component
export default class CarInsurance extends Vue {
  tableHeadings: string[] = [
    "Ngày",
    "Tên",
    "Email",
    "Điện thoại",
    "Công ty bảo hiểm",
    "Số tiền bảo hiểm",
    "Ghi chú"
  ];

  carInsuranceRequests: CarInsuranceRequest[] = [];

  async mounted() {
    this.carInsuranceRequests = controller.requests;
    await Vue.nextTick();
  }
}
</script>
