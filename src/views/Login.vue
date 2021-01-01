<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="login">
          <v-form
            v-model="isFormValid"
            ref="form"
            class="login__form"
            @submit.prevent="login"
          >
            <h2 class="mb-4">Trang quản lý cuahangbaohiem.com</h2>

            <v-text-field
              v-model="email"
              data-cy="email"
              label="Email"
              :rules="rules.email"
              prepend-inner-icon="mdi-email"
            />
            <v-text-field
              v-model="password"
              data-cy="password"
              type="password"
              label="Password"
              :rules="rules.password"
              prepend-inner-icon="mdi-key"
            />

            <p class="red--text">{{ errorMessage }}</p>

            <v-btn
              data-cy="login-button"
              type="submit"
              :loading="isLoggingIn"
              width="100%"
              color="black"
              dark
            >
              Đăng nhập
            </v-btn>

            <v-btn
              text
              color="info"
              class="mt-4"
              @click="showResetPasswordModal = true"
            >
              Quên mật khẩu?
            </v-btn>
          </v-form>
        </div>
      </v-container>

      <ResetPasswordModal
        v-if="showResetPasswordModal"
        @close="showResetPasswordModal = false"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthController from "@/controller/auth";
import ResetPasswordModal from "@/components/login/ResetPasswordModal.vue";

@Component({
  components: {
    ResetPasswordModal
  }
})
export default class Login extends Vue {
  isFormValid = false;
  email = "";
  password = "";
  errorMessage = "";
  isLoggingIn = false;
  showResetPasswordModal = false;

  rules = {
    email: [
      (v: string) => !!v || "Vui lòng điền email",
      (v: string) => /.+@.+/.test(v) || "Định dạng email không chính xác"
    ],
    password: [(v: string) => !!v || "Vui lòng điền mật khẩu"]
  };

  async login() {
    this.validateForm();

    if (!this.isFormValid) {
      return;
    }

    this.isLoggingIn = true;

    try {
      await AuthController.login(this.email, this.password);
    } catch {
      this.errorMessage = "Email hoặc password không chính xác";
    } finally {
      this.isLoggingIn = false;
    }
  }

  validateForm() {
    (this.$refs.form as HTMLFormElement).validate();
  }

  onForgotPasswordClick() {
    //
  }
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 400px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

.login__form {
  flex: 1;
}
</style>
