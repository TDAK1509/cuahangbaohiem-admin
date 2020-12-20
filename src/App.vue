<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app permanent>
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",

  components: {
    SideBar
  },

  data: () => ({ drawer: null })
};
</script>
