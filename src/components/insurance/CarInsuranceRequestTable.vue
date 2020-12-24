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
        <tr v-for="(row, index) in requests" :key="`row${index}`">
          <td v-for="(cell, cellIndex) in row" :key="`cell${cellIndex}`">
            {{ cell }}
          </td>
          <td>
            <v-btn
              v-if="isPending"
              fab
              small
              color="success"
              dark
              data-cy="set-done"
              @click="setDone"
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

  tableHeadings: string[] = [
    "Ngày",
    "Tên",
    "Email",
    "Điện thoại",
    "Công ty bảo hiểm",
    "Số tiền bảo hiểm",
    "Ghi chú"
  ];

  @Emit("set-done")
  setDone() {
    //
  }

  @Emit("set-pending")
  setPending() {
    //
  }
}
</script>
