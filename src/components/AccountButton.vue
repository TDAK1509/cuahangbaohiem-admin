<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn data-cy="account-button" v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        data-cy="change-password-button"
        @click="$emit('click-change-password')"
      >
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Đổi mật khẩu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "AccountButton"
};
</script>
