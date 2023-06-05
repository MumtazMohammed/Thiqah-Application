<template>
  <div class="client-store">
    <!-- client Card -->
    <v-card flat class="mx-auto" tile color="grey lighten-5">
      <v-container>
        <!-- client Card -->
        <v-row align="center" no-gutters class="fill-height">
          <v-col cols="auto">
            <v-avatar class="profile" color="grey" size="40">
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="7" md="10" sm="9" lg="10">
            <v-list-item color="grey">
              <v-list-item-content>
                <v-list-item-title class="user-name">
                  محمد أمين شمسان
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-badge bordered left overlap content="3">
              <v-btn
                :to="{
                  name: 'SmallScreenNotification',
                  params: { Notfication: 'الأشعارات' },
                }"
                exact-path
                depressed
                width="36"
                height="36"
                class="btn-noti-cart"
                icon
              >
                <v-icon> mdi-bell </v-icon>
              </v-btn>
            </v-badge>
            <v-btn depressed width="36" height="36" icon class="btn-noti-cart">
              <v-icon>mdi-dots-vertical </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- quick information  -->
        <v-row
          justify="space-around"
          align="center"
          no-gutters
          class="fill-height mt-6"
        >
          <v-col cols="auto">
            <v-card
              link
              router
              :to="{
                name: 'SmallScreenFavorite',
                params: { Favorite: ' المفضلة ' },
              }"
              color="transparent"
              flat
              tile
            >
              <span
                class="d-block text-center"
                style="font-size: 17px; font-weight: 700"
              >
                2
              </span>
              <v-card-text class="pa-0 mt-1 text text-center">
                المفضلة
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              link
              router
              :to="{
                name: 'LastviewedSmallScreen',
                params: { History: 'شوهدت مؤخرا' },
              }"
              color="transparent"
              flat
              tile
            >
              <span
                class="d-block text-center"
                style="font-size: 17px; font-weight: 700"
              >
                2
              </span>
              <v-card-text class="pa-0 mt-1 text text-center">
                شوهدت مؤخرا
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              link
              router
              :to="{
                name: 'SmallScreenClientCouponsPage',
                params: { coupons: 'قسائم' },
              }"
              color="transparent"
              flat
              tile
            >
              <span
                class="d-block text-center"
                style="font-size: 17px; font-weight: 700"
              >
                2
              </span>
              <v-card-text class="pa-0 mt-1 text text-center">
                القسائم
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              link
              router
              :to="{
                name: 'SmallScreenClientPointsPage',
                params: { Points: 'نقاط' },
              }"
              color="transparent"
              flat
              tile
            >
              <span
                class="d-block text-center"
                style="font-size: 17px; font-weight: 700"
              >
                2
              </span>
              <v-card-text class="pa-0 mt-1 text text-center">
                النقاط
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-container class="pa-0">
      <!-- order  -->
      <v-card dark tile flat color="deep-orange lighten-5" class="pa-2">
        <!-- <v-card-text class="pt-0 pa-4 card-titel"> طلبياتي </v-card-text> -->
        <v-row
          align="center"
          justify="space-between"
          no-gutters
          class="fill-height"
        >
          <v-col
            cols="auto"
            class="px-1"
            v-for="(Second, i) in SecondAccess"
            :key="i"
          >
            <v-card
              flat
              link
              exact-path
              router
              :to="{
                name: 'SmallScreenClientOrderPage',
                params: { Order: 'مشترياتي' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon
                  :style="Second.flib"
                  class="pa- text-center"
                  color="#fc624d"
                  size="26"
                >
                  {{ Second.cunt }}
                </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                {{ Second.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <!-- row for cart and other  -->
      <v-card rounded="lg" flat class="pa-2 transparent">
        <v-row align="center" no-gutters class="fill-height">
          <!-- cart btn  -->
          <v-col cols="3" class="pa-2">
            <v-card
              flat
              :to="{
                name: 'SmallScreenClientCartPage',
                params: { Cart: 'مشترياتي' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon color="grey darken-2" size="27">
                  mdi-cart-outline
                </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                سلة التسوق
              </v-card-text>
            </v-card>
          </v-col>
          <!-- thiqah mall btn  -->
          <v-col cols="3" class="pa-2">
            <v-card
              flat
              :to="{
                name: 'ThiqahMallPage',
                params: { MallPage: ' ثقة مول' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon
                  style="border-radius: 50%"
                  color="grey darken-2"
                  size="27"
                >
                  mdi-shopping-outline
                </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                ثقة مول
              </v-card-text>
            </v-card>
          </v-col>
          <!-- share and wain btn  -->
          <!-- <v-col cols="3" class="pa-1 py-2">
            <v-card
              flat
              :to="{
                name: 'SmallScreenShare',
                params: { Share: 'شارك وأربح' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon color="grey darken-2" size="27"> mdi-link-box </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                شارك وأربح
              </v-card-text>
            </v-card>
          </v-col> -->
          <!-- open your store btn  -->
          <v-col cols="3" class="pa-2">
            <v-card
              flat
              :to="{
                name: 'SmallScreenShare',
                params: { Share: 'شارك وأربح' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon color="grey darken-2" size="27"> mdi-file-sign </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                ابدأ في البيع
              </v-card-text>
            </v-card>
          </v-col>
          <!-- My comments  -->
          <v-col cols="3" class="pa-2">
            <v-card
              flat
              :to="{
                name: 'SmallScreenClientRating',
                params: { Rating: 'تقييمي' },
              }"
              class="transparent"
            >
              <v-row justify="center" no-gutters class="fill-height">
                <v-icon
                  style="transform: scaleX(-1)"
                  color="grey darken-2"
                  size="27"
                >
                  mdi-comment-text-outline
                </v-icon>
              </v-row>
              <v-card-text class="pa-0 mt-2 text text-center">
                تقييمي
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Others  -->
          <v-col
            cols="3"
            class="pa-2"
            v-for="(Fift, i) in FifthhAccess"
            :key="i"
          >
            <v-row justify="center" no-gutters class="fill-height">
              <v-icon :style="Fift.flib" color="grey darken-2" size="27">
                {{ Fift.cunt }}
              </v-icon>
            </v-row>
            <v-card-text class="pa-0 mt-2 text text-center"
              >{{ Fift.title }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <!-- wallet  -->
      <v-card tile flat class="pa-2 py-3 green lighten-5">
        <v-card-title class="pt-0 pa-4 pl-0 card-titel">
          رصيدي
          <!-- <v-icon size="22" color="#fc624d" class="mr-1">mdi-wallet</v-icon> -->
          <v-spacer></v-spacer>
          <v-btn
            dark
            small
            depressed
            class="text mx-1 white--text"
            color="green "
          >
            تحويل
          </v-btn>
          <v-btn dark depressed small class="text white--text" color="green ">
            إيداع
          </v-btn>
        </v-card-title>
        <v-row
          justify="space-around"
          align="center"
          no-gutters
          class="fill-height"
        >
          <v-col cols="auto" class="px-1">
            <v-row justify="center" no-gutters class="fill-height">
              <span style="font-size: 17px; font-weight: 700">0.00</span>
            </v-row>
            <v-card-text class="pa-0 mt-1 text text-center"> ريال </v-card-text>
          </v-col>
          <v-col cols="auto" class="px-1">
            <v-row justify="center" no-gutters class="fill-height">
              <span style="font-size: 17px; font-weight: 700">2</span>
            </v-row>
            <v-card-text class="pa-0 mt-1 text text-center">
              خيار الدفع
            </v-card-text>
          </v-col>
          <v-col cols="auto" class="px-1">
            <v-row justify="center" no-gutters class="fill-height">
              <span style="font-size: 17px; font-weight: 700">20</span>
            </v-row>
            <v-card-text class="pa-0 mt-1 text text-center">
              سجل التحويلات
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <!-- follow  -->
      <v-card flat tile min-height="200">
        <v-card-text class="card-titel"> المتاجر التي تابعتها </v-card-text>
        <v-row no-gutters>
          <v-col class="pa-2 text-center" v-for="i in 26" :key="i" cols="2">
            <v-img
              contain
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            >
            </v-img>
            <p
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
              class="text mb-0 mt-2"
            >
              المتجر
            </p>
          </v-col>
        </v-row>
      </v-card>
      <!-- <Services /> -->
    </v-container>
  </div>
</template>
<script>
// import Services from "@/A-Home/Services.vue";

export default {
  name: "NormalUserPage",
  //   components: { Services },
  // components: { NavigationUser },
  data() {
    return {
      drawer: true,
      FirstAccess: [{ title: "المفضلة", cunt: "1" }],
      SecondAccess: [
        {
          title: " شحن المنتج",
          cunt: "mdi-package",
          flib: "  transform: scaleX(-1)",
        },
        {
          title: "استلام المنتج",
          cunt: "mdi-truck-delivery ",
          flib: "  transform: scaleX(-1)",
        },
        {
          title: "تقييم المنتج",
          cunt: "mdi-message-draw ",
          flib: "  transform: scaleX(-1)",
        },
        {
          title: "المرتجع & والإلغاء",
          cunt: "mdi-archive-cancel",
        },
      ],
      FifthhAccess: [
        {
          title: "مساعدة ",
          cunt: "mdi-help-circle-outline",
        },
        {
          title: "شوهدت مؤخرا",
          cunt: "mdi-history ",
        },
        {
          title: " عضوية",
          cunt: "mdi-card-account-details-star-outline ",
        },
        {
          title: " تعبئة رصيد",
          cunt: "mdi-cellphone-arrow-down mdi-rotate-180 ",
        },
        {
          title: "خدمة العملاء",
          cunt: "mdi-face-agent ",
          flib: "  transform: scaleX(-1)",
        },
      ],

      mini: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.client-store {
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 960px) {
    margin-bottom: 49px;
  }
}
// .v-list-item__title.text.text-h6 {
//   letter-spacing: 0 !important;
//   font-family: $fontfamliy3 !important;
// }
.user-name {
  letter-spacing: 0 !important;
  font-family: $fontfamliy3 !important;
  font-weight: 600;
  font-size: 16px !important;
  line-height: 1.7 !important;
}
.text {
  letter-spacing: 0 !important;
  font-family: $fontfamliy3 !important;
  font-weight: 600;
  font-size: 13.5px !important;
  color: $fontcolor !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-titel {
  letter-spacing: 0 !important;
  font-family: $fontfamliy3 !important;
  // font-weight: 600;
  font-size: 17px;
  color: $fontcolor !important;
  @media (max-width: 450px) {
    font-size: 16px;
  }
}
::v-deep span.v-badge__badge {
  color: $fontcolorsm !important;
  background-color: $color-2 !important;
  // min-width: 15px;
  // height: 18px;
  // padding: 5px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  border: 0 !important;
  // font-size: 13px !important;
  @media (max-width: 600px) {
    font-size: 13px !important;
  }
}
::v-deep .theme--dark.v-badge .v-badge__badge:after {
  border: 0 !important;
}
.btn-noti-cart {
  color: $color-2 !important;
  // background-color: #eee;
  @media (max-width: 600px) {
    font-size: 20px !important;
  }
}
</style>
