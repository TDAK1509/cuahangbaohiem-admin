<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn data-cy="account-button" v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :data-cy="item.dataCy"
        @click="item.clickHandler"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import AuthController from "@/controller/auth";

export default {
  name: "AccountButton",

  data() {
    return {
      items: [
        {
          dataCy: "change-password-button",
          icon: "mdi-key",
          text: "Đổi mật khẩu",
          clickHandler: () => this.$emit("click-change-password")
        },
        {
          dataCy: "logout",
          icon: "mdi-logout",
          text: "Đăng xuất",
          clickHandler: () => this.logout()
        }
      ]
    };
  },

  methods: {
    logout() {
      AuthController.logout();
    }
  }
};
</script>
