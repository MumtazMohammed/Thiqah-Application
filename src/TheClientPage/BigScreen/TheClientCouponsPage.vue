<template>
  <div class="UserAdd">
    <v-container class="">
      <v-tabs
        background-color="transparent"
        height="30"
        hide-slider
        v-model="tab"
      >
        <v-tab
          active-class="black--text font-weight-bold"
          class="text-all"
          href="#tab-1"
        >
          احصل على المزيد من القسائم
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab
          active-class="black--text font-weight-bold"
          class="text-all"
          href="#tab-2"
        >
          عرض السجل
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="mt-2 transparent">
        <v-tab-item value="tab-1">
          <v-card-title class="coupons-recommended-title pa-2">
            قسائم ثقة مول
          </v-card-title>
          <v-row no-gutters>
            <v-col class="pa-1" lg="4" md="4" cols="12" v-for="n in 3" :key="n">
              <v-sheet
                style="position: relative"
                rounded="lg"
                class="pa-2 pt-0"
              >
                <v-row
                  justify="center"
                  align="center"
                  no-gutters
                  class="pa-2 pr-0"
                >
                  <v-avatar
                    rounded=""
                    class="profile"
                    color="transparent"
                    size="30"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                  <span class="store-name mr-1"> متجر بهلول </span>
                  <v-spacer></v-spacer>
                  <!-- <span class="coupons-date"> ثـقـة مول </span> -->
                </v-row>
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide v-for="n in 3" :key="n">
                    <!-- if store include in thiqah mall   -->
                    <!-- Store Info  -->
                    <v-card flat color="grey lighten-5">
                      <v-row
                        no-gutters
                        justify="space-between"
                        align="center"
                        class="main"
                      >
                        <v-col class="pa-1" cols="auto">
                          <v-card-subtitle class="text pa-0">
                            خصم
                            <span class="mx-1 orange--text">
                              <span>20</span>%
                            </span>
                          </v-card-subtitle>
                          <v-card-text class="pa-0 text">
                            أنفق
                            <span class="mx-1">
                              52<v-icon left size="17"
                                >mdi-currency-rial</v-icon
                              >
                            </span>
                            كحد أدنى
                          </v-card-text>
                          <v-card-text class="pa-0 text">
                            متاح حتى
                            <span>10/2/2020</span>
                          </v-card-text>
                        </v-col>
                        <v-col cols="auto">
                          <v-btn tile small text class="btn">
                            أحصل عليها
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </v-sheet>
            </v-col>
          </v-row>
          <v-card-title class="coupons-recommended-title pa-2">
            جميع القسائم
          </v-card-title>
          <v-row no-gutters>
            <v-col
              class="pa-2 py-1"
              lg="4"
              md="4"
              cols="12"
              v-for="n in 3"
              :key="n"
            >
              <v-sheet
                style="position: relative"
                rounded="lg"
                class="transparent px-0"
              >
                <v-card flat color="#fff">
                  <v-row no-gutters align="center">
                    <v-col class="" cols="auto">
                      <v-img
                        contain
                        height="50px"
                        width="60px"
                        class="transparent"
                        src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                      ></v-img>
                    </v-col>
                    <v-col cols="6">
                      <v-card-subtitle class="text pa-0">
                        خصم
                        <span class="mx-1 orange--text"><span>20</span>%</span>
                      </v-card-subtitle>
                      <v-card-text class="pa-0 text">
                        أنفق
                        <span class="mx-1">
                          52<v-icon left size="17">mdi-currency-rial</v-icon>
                        </span>
                        كحد أدنى
                      </v-card-text>
                      <v-card-text class="pa-0 text">
                        متاح حتى
                        <span>10/2/2020</span>
                      </v-card-text>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto">
                      <v-btn small text tile class="white btn">
                        أحصل عليها
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item value="tab-2">
          <v-card
            class="overflow-hidden"
            rounded="lg"
            flat
            color="grey lighten-3"
          >
            <v-tabs
              background-color="white"
              slider-color="#fc624d"
              v-model="tabTow"
            >
              <v-tab
                active-class="black--text font-weight-bold"
                class="text-all"
                href="#tabTow-1"
              >
                لم يستخدم
              </v-tab>
              <v-tab
                active-class="black--text font-weight-bold"
                class="text-all"
                href="#tabTow-2"
              >
                مستخدم
              </v-tab>
              <v-tab
                active-class="black--text font-weight-bold"
                class="text-all"
                href="#tabTow-3"
              >
                منتهي الصلاحية
              </v-tab>
            </v-tabs>
            <v-tabs-items
              style="height: calc(100vh - 110px); overflow-y: scroll"
              class="transparent"
              v-model="tabTow"
            >
              <v-tab-item class="transparent pa-2" value="tabTow-1">
                <v-row no-gutters>
                  <v-col
                    class="pa-2 py-1"
                    lg="4"
                    md="4"
                    cols="12"
                    v-for="n in 3"
                    :key="n"
                  >
                    <v-card flat color="#fff">
                      <v-row no-gutters align="center" class="main">
                        <v-col cols="auto">
                          <v-img
                            contain
                            width="60px"
                            height="50px"
                            class="transparent"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                          ></v-img>
                        </v-col>
                        <v-col cols="6">
                          <v-card-subtitle class="text pa-0">
                            خصم
                            <span class="mx-1 orange--text">
                              <span>20</span>%
                            </span>
                          </v-card-subtitle>
                          <v-card-text class="pa-0 text">
                            أنفق
                            <span class="mx-1">
                              52<v-icon left size="17"
                                >mdi-currency-rial</v-icon
                              >
                            </span>
                            كحد أدنى
                          </v-card-text>
                          <v-card-text class="pa-0 text">
                            متاح حتى
                            <span>10/2/2020</span>
                          </v-card-text>
                        </v-col>
                        <v-col cols="auto">
                          <v-btn tile small text class="white btn">
                            أستخدم
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
              <v-tab-item class="transparent pa-2" value="tabTow-2">
                <v-row no-gutters>
                  <v-col
                    class="pa-2 py-1"
                    lg="4"
                    md="4"
                    cols="12"
                    v-for="n in 3"
                    :key="n"
                  >
                    <v-card disabled flat color="#fff">
                      <v-row no-gutters align="center" class="main">
                        <v-col cols="auto">
                          <v-img
                            contain
                            width="60px"
                            height="50px"
                            class="transparent"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                          ></v-img>
                        </v-col>
                        <v-col cols="6">
                          <v-card-subtitle class="text pa-0">
                            خصم
                            <span class="mx-1 orange--text">
                              <span>20</span>%
                            </span>
                          </v-card-subtitle>
                          <v-card-text class="pa-0 text">
                            أنفق
                            <span class="mx-1">
                              52<v-icon left size="17"
                                >mdi-currency-rial</v-icon
                              >
                            </span>
                            كحد أدنى
                          </v-card-text>
                          <v-card-text class="pa-0 text">
                            متاح حتى
                            <span>10/2/2020</span>
                          </v-card-text>
                        </v-col>
                        <v-col cols="auto">
                          <v-btn tile small text class="white btn">
                            أستخدم
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
              <v-tab-item class="transparent pa-2" value="tabTow-3">
                <v-row no-gutters>
                  <v-col
                    class="pa-2 py-1"
                    lg="4"
                    md="4"
                    cols="12"
                    v-for="n in 3"
                    :key="n"
                  >
                    <v-card disabled flat color="#fff">
                      <v-row no-gutters align="center" class="main">
                        <v-col cols="auto">
                          <v-img
                            contain
                            width="60px"
                            height="50px"
                            class="transparent"
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                          ></v-img>
                        </v-col>
                        <v-col cols="6">
                          <v-card-subtitle class="text pa-0">
                            خصم
                            <span class="mx-1 orange--text">
                              <span>20</span>%
                            </span>
                          </v-card-subtitle>
                          <v-card-text class="pa-0 text">
                            أنفق
                            <span class="mx-1">
                              52<v-icon left size="17"
                                >mdi-currency-rial</v-icon
                              >
                            </span>
                            كحد أدنى
                          </v-card-text>
                          <v-card-text class="pa-0 text">
                            متاح حتى
                            <span>10/2/2020</span>
                          </v-card-text>
                        </v-col>
                        <v-col cols="auto">
                          <v-btn tile small text class="white btn">
                            أستخدم
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "UserAdd",
  components: { SwiperSlide, Swiper },
  data() {
    return {
      text: "هل أنت متأكد من حذف الأعلان.",
      tab: null,
      tabTow: null,
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        },
      },
    };
  },
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.hasSaved = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.UserAdd {
  width: 100%;
  // padding: $padding;
  min-height: 90vh;
  .coupons-recommended-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px;
    color: $fontcolor !important;
    font-size: 16px !important;
  }
  .toolbar-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0.5px;
    color: $fontcolorsm !important;
    font-size: 15px !important;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .v-icon {
      color: #01579b !important;
      margin-left: 5px;
    }
  }
  .swiper {
    height: 190px;
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      height: 85px;
    }
    .swiper-pagination.swiper-pagination-fraction {
      bottom: 0;
    }
  }
  .store-name {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px;
    font-size: 15px !important;
    color: $fontcolor !important;
    // font-weight: 600 !important;
    pointer-events: none;
  }
  // .coupons-date {
  //   font-family: $fontfamliy3 !important;
  //   letter-spacing: 0px;
  //   padding: 5px 7px;
  //   font-size: 12px !important;
  //   color: $fontcolorsm !important;
  //   background-color: #e53935;
  //   font-weight: 600 !important;
  //   pointer-events: none;
  //   border-radius: 2px;
  // }
}
.text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolorlinks !important;
  font-weight: 600 !important;
  font-size: 12px !important;
  span {
    font-size: 15px !important;
    font-family: sans-serif !important;
    font-weight: 700 !important;
  }
}
.btn {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  // color: $fontcolorsm !important;
  margin: 0 auto !important;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 13px !important;
  }
}

.text-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
}
</style>
