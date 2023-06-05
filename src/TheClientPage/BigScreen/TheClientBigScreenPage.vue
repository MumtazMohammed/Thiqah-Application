<template>
  <v-main class="grey lighten-4">
    <v-navigation-drawer
      style="z-index: 2 !important"
      v-model="drawer"
      permanent
      app
      right
    >
      <!-- home btn  -->
      <v-list class="grey lighten-4">
        <v-list-item to="/" link class="px-2 white">
          <v-list-item-title class="home-link">
            <h3 class="logo-text d-inline">ثــــقـــة لتجارة الأكترونية</h3>
            <v-icon
              style="
                background-color: #fc624d;
                padding: 3px;
                border-radius: 50%;
                color: white;
              "
              left
              size="22"
            >
              mdi-shopping
            </v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- profile  -->
      <v-list-item class="px-2">
        <v-list-item-avatar size="30">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="user-name"> محمد الحريبي </v-list-item-title>
        <v-btn icon color="grey darken-1">
          <v-icon size="24"> mdi-dots-vertical </v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-tabs
        v-model="tab"
        slider-size="3"
        class="tab"
        color="#fc624d"
        vertical
      >
        <v-tab
          :to="{
            name: 'UserProfileEdit',
            params: { Acount: 'حسابي' },
          }"
          class="link"
        >
          حسابي
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-account </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'TheClientCartPage',
            params: { Cart: 'سلة التسوق ' },
          }"
          class="link"
        >
          سلة التسوق
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-cart-plus </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'TheClientOrderPage',
            params: { Ordered: 'مشترياتي' },
          }"
          class="link"
        >
          مشترياتي
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-cart-check </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'TheClientCouponsPage',
            params: { Coupons: 'قسائمي' },
          }"
          class="link"
        >
          قسائمي
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-ticket-percent </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'TheClientPointsPage',
            params: { Points: 'نقاطي' },
          }"
          class="link"
        >
          نقاطي
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-bag-personal </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'Lastviewed',
            params: { Lastviewed: ' شوهدت مؤخرا ' },
          }"
          class="link"
        >
          شوهدت مؤخرا
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-archive-eye </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'Favorite',
            params: { Favorite: ' المفضلة ' },
          }"
          class="link"
        >
          المفضلة
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-heart </v-icon>
        </v-tab>
        <v-tab
          :to="{
            name: 'TheRating',
            params: { TheRating: 'التقييمات' },
          }"
          class="link"
        >
          تقييمي
          <v-spacer></v-spacer>
          <v-icon size="18"> mdi-message-draw </v-icon>
        </v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <v-container class="transparent pa-0" style="overflow: hidden">
      <router-view />
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: "NormalUserPage",
  components: {},
  // components: { NavigationUser },
  data() {
    return {
      drawer: true,
      tab: null,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
#inspire {
  width: 100%;
  min-height: 100vh !important;
  background-color: #eeeeee;
  .logo-text {
    font-family: $fontfamliy3;
    color: $color-2 !important;
    font-weight: 600 !important;
    font-size: 17px !important;
  }
  .user-name {
    text-decoration: none;
    font-size: 13px;
    font-family: $fontfamliy3 !important;
    font-weight: 500;
    color: $fontcolor !important;
  }
  .home-link {
    text-decoration: none;
    font-size: 15px;
    font-family: $fontfamliy3 !important;
    font-weight: 500;
    color: $fontcolor;
    text-align: center;
  }

  .link-icon {
    // font-size: 19px;
    color: $color-2;
  }

  ::v-deep a.v-list-item.v-list-item--link.theme--light:not(:last-child) {
    border-bottom: 0.5px solid rgb(212, 212, 212);
  }
  .icon {
    color: $color-2;
  }
}
::v-deep a.v-tab {
  font-size: 15px !important;
  font-weight: 600px;
  letter-spacing: 0 !important;
  font-family: $fontfamliy3;
}
::v-deep
  nav.px-0.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--is-mobile.v-navigation-drawer--open.v-navigation-drawer--right.theme--light {
  z-index: 208;
}
::v-deep.v-overlay.v-overlay--active.theme--dark {
  z-index: 208;
}
::v-deep .v-toolbar__content {
  align-items: flex-start;
  // justify-content: end;
}
</style>
