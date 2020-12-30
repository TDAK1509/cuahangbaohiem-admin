<template>
  <v-app>
    <v-text-field data-cy="email" label="Email" />
    <v-text-field data-cy="password" type="password" label="Password" />
    <v-btn data-cy="button">Login</v-btn>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {}
</script>
