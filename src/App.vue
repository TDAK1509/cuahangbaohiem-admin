<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AuthController from "@/controller/auth";

export default {
  name: "App",

  mounted() {
    AuthController.watchLoggedInState();
  }
};
</script>
