<template>
  <v-dialog v-model="show" persistent max-width="330">
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
        Bạn có chắc chắn không?
      </v-card-title>
      <v-card-text>
        Sau khi xóa sẽ không lấy lại được. Bạn có chắc là mình muốn xóa không?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeModal">
          Không
        </v-btn>
        <v-btn
          data-cy="confirm-delete-button"
          color="red"
          text
          @click="onClickConfirm"
        >
          Có
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
