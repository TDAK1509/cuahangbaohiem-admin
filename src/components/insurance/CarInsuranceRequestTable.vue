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

          <td>
            <ul>
              <li>{{ request.name }}</li>
              <li>{{ request.email }}</li>
              <li>{{ request.phone }}</li>
            </ul>
          </td>

          <td>
            <ul>
              <li>{{ request.insuranceCompany }}</li>
              <li>{{ request.insuranceValue }}</li>
            </ul>
          </td>

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
              @click="setPending(request.id)"
            >
              <v-icon>mdi-undo</v-icon>
            </v-btn>

            <DeleteRequestButton @click="deleteRequest(request.id)" />
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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

  @Prop({ type: Boolean, default: true })
  isError!: boolean;

  tableHeadings: string[] = [
    "Ngày",
    "Thông tin liên lạc",
    "Thông tin bảo hiểm",
    "Ghi chú",
    ""
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
