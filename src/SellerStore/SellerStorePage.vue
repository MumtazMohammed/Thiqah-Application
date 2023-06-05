<template>
  <div class="Sellerstore">
    <TheNavBar />
    <v-sheet class="grey lighten-5">
      <!-- <v-sheet class="supporter"></v-sheet> -->
      <seller-info />
      <v-container class="pa-0">
        <store-voucher />
        <about-store />
        <store-products />
      </v-container>
    </v-sheet>
    <div class="hidden-md-and-up">
      <v-sheet height="50"></v-sheet>
      <FixedBottomNav />
    </div>
  </div>
</template>

<script>
import SellerInfo from "./SellerInfo.vue";
import StoreVoucher from "./StoreVoucher.vue";
import AboutStore from "./AboutStore.vue";
import StoreProducts from "./StoreProducts.vue";
import FixedBottomNav from "../NavBar/FixedBottomNav.vue";
import TheNavBar from "@/NavBar/TheNavBar.vue";
export default {
  name: "ServicesPage",
  components: {
    SellerInfo,
    StoreVoucher,
    AboutStore,
    StoreProducts,
    FixedBottomNav,
    TheNavBar,
  },
  data() {
    return {};
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
</style>
