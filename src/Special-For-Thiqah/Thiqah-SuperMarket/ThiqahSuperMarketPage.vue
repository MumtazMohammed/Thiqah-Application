<template>
  <v-main class="">
    <TheNavBar />
    <v-sheet class="grey lighten-4" style="min-height: 100vh">
      <v-container class="py-0">
        <ThiqahSuperMarketAdd />
        <ThiqahSuperMarketStoreProductsPromiuion />
      </v-container>
    </v-sheet>
  </v-main>
</template>
<script>
import TheNavBar from "@/NavBar/TheNavBar.vue";
import ThiqahSuperMarketAdd from "./ThiqahSuperMarketAdd.vue";
import ThiqahSuperMarketStoreProductsPromiuion from "./ThiqahSuperMarketStoreProductsPromiuion.vue";
export default {
  name: "CarShape",
  components: {
    ThiqahSuperMarketAdd,
    ThiqahSuperMarketStoreProductsPromiuion,
    TheNavBar,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.v-toolbar__title.title {
  font-family: $fontfamliy3 !important;
  font-size: 20px !important;
  letter-spacing: 0px !important;
  font-weight: 600;
  color: #2673dd;
  //   border-right: 1px solid white !important;
  //   padding-right: 10px;
  @media (max-width: 800px) {
    font-size: 20px !important;
  }
  @media (max-width: 600px) {
    font-size: 17px !important;
  }
}

// ::v-deep .v-toolbar__extension {
//   padding: 4px 0px !important;
// }
::v-deep .theme--light.v-badge .v-badge__badge:after {
  border-width: 0;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px !important;
  line-height: 1.5 !important;
  font-size: 15px;
}
::v-deep input {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px !important;
  line-height: 1.5 !important;
}
::v-deep span.v-badge__badge {
  font-weight: 700;
  color: $fontcolorsm !important;
  background-color: $color-2 !important;
  // min-width: 15px;
  height: 18px;
  letter-spacing: 0.5px !important;
  // padding: 5px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  border: none;
  // font-size: 13px !important;
  @media (max-width: 600px) {
    font-size: 11px !important;
  }
}
.link {
  color: $fontcolor !important;
  letter-spacing: 0px !important;
  font-family: $fontfamliy3;
  font-size: 13px !important;
  padding: 0px 0px 0 10px;
}
::v-deep
  header.v-sheet.theme--light.v-toolbar.v-toolbar--flat.v-app-bar.grey.lighten-4 {
  height: 93px !important;
  @media (max-width: 900px) {
    height: 120px !important;
  }
}
::v-deep .v-toolbar__content {
  height: 100% !important;
}
</style>
