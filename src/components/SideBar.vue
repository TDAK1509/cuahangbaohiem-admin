<template>
  <v-list data-cy="side-bar" nav>
    <v-subheader>YÊU CẦU MUA BẢO HIỂM</v-subheader>

    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="({ icon, text, to }, i) in items" :key="i" :to="to">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "SideBar",

  data() {
    return {
      selectedItem: 0,
      items: [
        {
          icon: "mdi-car",
          text: "Ô tô",
          to: "/bao-hiem/o-to"
        },
        {
          icon: "mdi-car-cog",
          text: "Tai nạn 24/24",
          to: "/bao-hiem/tai-nan"
        },
        {
          icon: "mdi-emoticon-sick",
          text: "Sức khỏe cá nhân",
          to: "/bao-hiem/suc-khoe-ca-nhan"
        },
        {
          icon: "mdi-zodiac-cancer",
          text: "Ung thư",
          to: "/bao-hiem/ung-thu"
        },
        {
          icon: "mdi-home",
          text: "Nhà tư nhân",
          to: "/bao-hiem/nha-tu-nhan"
        },
        {
          icon: "mdi-motorbike",
          text: "Xe máy",
          to: "/bao-hiem/xe-may"
        },
        {
          icon: "mdi-airplane-takeoff",
          text: "Du lịch quốc tế",
          to: "/bao-hiem/du-lich-quoc-te"
        },
        {
          icon: "mdi-human-male",
          text: "Nhân thọ",
          to: "/bao-hiem/nhan-tho"
        }
      ]
    };
  }
};
</script>
