<template>
  <v-app>
    <v-form v-model="isFormValid" ref="form" @submit.prevent="login">
      <v-text-field
        v-model="email"
        data-cy="email"
        label="Email"
        :rules="rules.email"
      />
      <v-text-field
        v-model="password"
        data-cy="password"
        type="password"
        label="Password"
        :rules="rules.password"
      />

      <p class="red--text">{{ errorMessage }}</p>

      <v-btn data-cy="login-button" type="submit">Login</v-btn>
    </v-form>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthController from "@/controller/auth";

@Component
export default class Login extends Vue {
  isFormValid = false;
  email = "";
  password = "";
  errorMessage = "";

  rules = {
    email: [
      (v: string) => !!v || "Vui lòng điền email",
      (v: string) => /.+@.+/.test(v) || "Định dạng email không chính xác"
    ],
    password: [(v: string) => !!v || "Vui lòng điền mật khẩu"]
  };

  login() {
    this.validateForm();

    if (!this.isFormValid) {
      return;
    }

    if (
      this.email !== "correct-email@gmail.com" ||
      this.password !== "correct-password"
    ) {
      this.errorMessage = "Email hoặc password không chính xác";
      return;
    }

    AuthController.setIsAuth();
    this.$router.push("/");
  }

  validateForm() {
    (this.$refs.form as HTMLFormElement).validate();
  }
}
</script>
