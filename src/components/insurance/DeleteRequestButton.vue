<template>
  <v-dialog v-model="show" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        data-cy="delete-button"
        icon
        x-small
        color="red"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </template>

    <v-card data-cy="confirm-delete-modal">
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>
      <v-card-text
        >Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeModal">
          Disagree
        </v-btn>
        <v-btn
          data-cy="confirm-delete-button"
          color="green darken-1"
          text
          @click="onClickConfirm"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteRequestButton",
  data() {
    return {
      show: false
    };
  },

  methods: {
    onClickConfirm() {
      this.$emit("click");
    },

    closeModal() {
      this.show = false;
    }
  }
};
</script>
