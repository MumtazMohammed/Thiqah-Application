<template>
  <v-main flat tile class="">
    <TheNavBar />
    <v-sheet class="support"></v-sheet>
    <v-sheet color="grey lighten-5">
      <v-container class="py-1 px-2">
        <ShowroomCarSearch />
        <ShowroomCarItem />
      </v-container>
    </v-sheet>
  </v-main>
</template>
<script>
import ShowroomCarSearch from "./ShowroomCarSearch.vue";
import ShowroomCarItem from "./ShowroomCarItem.vue";
import TheNavBar from "@/NavBar/TheNavBar.vue";

export default {
  name: "ShowroomCarPage",
  components: { ShowroomCarSearch, ShowroomCarItem, TheNavBar },
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
.logo-text {
  font-family: $fontfamliy3;
  color: #0288d1 !important;
  font-weight: 700 !important;
  font-size: 17px !important;
}
a {
  text-decoration: none;
}
.link {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 17px !important;
  color: $fontcolor !important;
  text-decoration: none;
  border-left: 1px solid #b0bec5;
  padding: 0 10px !important;
  line-height: 1.6 !important;
}
.link:last-child {
  border-left: 0px;
}
</style>
