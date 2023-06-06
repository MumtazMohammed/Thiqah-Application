<template>
  <v-main flat tile class="">
    <TheNavBar />
    <v-sheet class="grey lighten-5" style="min-height: 100vh">
      <v-container class="pa-2 py-0">
        <ThiqahMallAdd />
        <ThiqahMallStoreProductsPromiuion />
      </v-container>
    </v-sheet>
  </v-main>
</template>
<script>
import ThiqahMallAdd from "./ThiqahMallAdd.vue";
import ThiqahMallStoreProductsPromiuion from "./ThiqahMallStoreProductsPromiuion.vue";
import TheNavBar from "@/NavBar/TheNavBar.vue";

export default {
  name: "CarShape",
  components: {
    ThiqahMallAdd,
    ThiqahMallStoreProductsPromiuion,
    TheNavBar,
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
</style>
