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
        <p v-else-if="successMessage" class="success--text">
          {{ successMessage }}
        </p>
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
import AuthController from "@/controller/auth";

@Component
export default class ResetPasswordModal extends Vue {
  email = "";
  errorMessage = "";
  successMessage = "";

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

    AuthController.sendPasswordResetEmail(this.email)
      .then(() => {
        this.errorMessage = "";
        this.successMessage =
          "Vui lòng kiểm tra email của bạn để lấy lại mật khẩu!";
      })
      .catch(e => {
        this.errorMessage = e.message;
      });
  }
}
</script>
