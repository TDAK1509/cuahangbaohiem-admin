<template>
  <div class="home">
    Khách hàng đăng ký mua bảo hiểm
    <router-link data-cy="car-insurance-request" to="/bao-hiem/o-to"
      >Bảo hiểm ô tô</router-link
    >

    <router-link data-cy="accident-insurance-request" to="/bao-hiem/tai-nan"
      >Bảo hiểm tai nạn</router-link
    >

    <router-link
      data-cy="health-insurance-request"
      to="/bao-hiem/suc-khoe-ca-nhan"
      >Bảo hiểm sức khỏe cá nhân</router-link
    >

    <router-link data-cy="cancer-insurance-request" to="/bao-hiem/ung-thu"
      >Bảo hiểm ung thư</router-link
    >

    <router-link data-cy="house-insurance-request" to="/bao-hiem/nha-tu-nhan"
      >Bảo hiểm nhà tư nnân</router-link
    >

    <router-link data-cy="motorbike-insurance-request" to="/bao-hiem/xe-may"
      >Bảo hiểm xe máy</router-link
    >

    <router-link
      data-cy="travel-insurance-request"
      to="/bao-hiem/du-lich-quoc-te"
      >Bảo hiểm du lịch quốc tế</router-link
    >

    <router-link data-cy="life-insurance-request" to="/bao-hiem/nhan-tho"
      >Bảo hiểm nhân thọ</router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
