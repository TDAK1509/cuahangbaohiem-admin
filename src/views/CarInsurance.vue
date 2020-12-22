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
          <tr v-for="(row, index) in tableBody" :key="`row${index}`">
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

  tableBody = [
    {
      date: "2020-12-23 06:43:56",
      name: "Michael Jackson",
      email: "test@gmail.com",
      phone: "1234567",
      insuranceCompany: "PVI",
      insuranceValue: "12.320.000 ₫",
      note: ""
    }
  ];
}
</script>
