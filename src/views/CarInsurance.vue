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
}
</script>
