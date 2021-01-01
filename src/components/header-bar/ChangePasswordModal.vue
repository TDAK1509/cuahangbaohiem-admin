<template>
  <v-dialog :value="true" persistent max-width="330" @click:outside="close">
    <v-card data-cy="change-password-modal">
      <v-card-title class="headline">
        Đổi mật khẩu
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="newPassword"
          data-cy="new-password"
          type="password"
          label="Mật khẩu mới"
        />

        <v-text-field
          v-model="confirmPassword"
          data-cy="confirm-password"
          type="password"
          label="Mật khẩu cũ"
        />

        <p v-if="errorMessage" class="red--text">{{ errorMessage }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="close">
          Không
        </v-btn>
        <v-btn
          data-cy="change-password-modal-button"
          text
          @click="changePassword"
        >
          Có
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthController from "@/controller/auth";

@Component
export default class ChangePasswordModal extends Vue {
  newPassword = "";
  confirmPassword = "";
  errorMessage = "";

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Mật khẩu không khớp nhau";
      return;
    }

    AuthController.changePassword(this.newPassword)
      .then(() => {
        this.errorMessage = "";
        this.close();
      })
      .catch(e => {
        this.errorMessage = e.message;
      });
  }

  close() {
    this.$emit("close");
  }
}
</script>
