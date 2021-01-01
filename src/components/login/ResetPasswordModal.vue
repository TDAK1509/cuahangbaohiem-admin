<template>
  <v-dialog :value="true" persistent max-width="330" @click:outside="close">
    <v-card data-cy="reset-password-modal">
      <v-card-title class="headline">
        Email của bạn
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="email"
          data-cy="reset-password-email"
          label="Email"
          prepend-inner-icon="mdi-email"
        />

        <p v-if="errorMessage" class="red--text">{{ errorMessage }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn
          data-cy="reset-password-button"
          color="red"
          text
          @click="onClickReset"
        >
          Cài lại mật khẩu
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { isEmail } from "@/utils/form-validation";

@Component
export default class ResetPasswordModal extends Vue {
  email = "";
  errorMessage = "";

  close() {
    this.$emit("close");
  }

  onClickReset() {
    if (!this.email) {
      this.errorMessage = "Vui lòng điền email";
      return;
    }

    if (!isEmail(this.email)) {
      this.errorMessage = "Định dạng email không đúng";
      return;
    }
  }
}
</script>
