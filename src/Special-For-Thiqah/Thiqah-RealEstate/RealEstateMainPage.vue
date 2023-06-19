<template>
  <v-main flat tile>
    <TheNavBar />
    <!-- <v-sheet height="100"></v-sheet> -->
    <v-sheet class="grey lighten-5" style="min-height: 100vh">
      <ThiqahRealEstateSearch />
      <v-container class="pa-0 px-2">
        <ThiqahRealEstateItem />
      </v-container>
    </v-sheet>
  </v-main>
</template>
<script>
import ThiqahRealEstateSearch from "./ThiqahRealEstateSearch.vue";
import ThiqahRealEstateItem from "./ThiqahRealEstateItem.vue";
import TheNavBar from "@/NavBar/TheNavBar.vue";
export default {
  name: "RealEstateMainPage",
  components: {
    ThiqahRealEstateSearch,
    ThiqahRealEstateItem,
    TheNavBar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.logo-text {
  font-family: $fontfamliy3;
  color: $color-2 !important;
  font-weight: 600 !important;
  font-size: 17px !important;
}
a {
  text-decoration: none;
}
.link {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 14px !important;
  color: $fontcolor !important;
}
.menu {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 17px !important;
  color: $fontcolor !important;
}

::v-deep .v-toolbar__extension {
  padding: 4px 0px !important;
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
</style>
