<template>
  <div class="UserAdd">
    <!-- small Screen Tabs  -->
    <div class="hidden-md-and-up">
      <v-app-bar flat fixed color="grey lighten-4">
        <!-- <v-btn
          :to="{
            name: 'MainStorePage',
            params: { MyCar: 'إعلاناتي' },
          }"
          icon
        >
          <v-icon> mdi-home </v-icon>
        </v-btn>
        <v-toolbar-title class="pr-1 titel">الرئيسية</v-toolbar-title> -->
        <v-card-title v-if="tab === `tab-1`" class="text pa-2">
          <span class="ml-1">{{ ShowRoomUserCars.length }}</span>
          طلب جديد
        </v-card-title>
        <v-card-title v-else class="text pa-2">
          <span class="ml-1">{{ ShowRoomUserCars.length }}</span>
          منتج في طريقها للعميل
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          :to="{
            name: 'MainStorePage',
            params: { MyCar: 'إعلاناتي' },
          }"
          icon
        >
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet height="56"></v-sheet>
    </div>
    <v-tabs
      slider-color="1"
      color="grey darken-2"
      v-model="tab"
      grow
      :show-arrows="false"
    >
      <v-tab href="#tab-1" class="links"> بإنتظار التجهيز </v-tab>
      <v-tab href="#tab-2" class="links"> بإنتظار الشحن </v-tab>
      <v-tab href="#tab-3" class="links"> مكتمل </v-tab>
      <v-tab href="#tab-4" class="links"> ملغي </v-tab>
    </v-tabs>
    <!-- order Tabs  -->
    <v-card flat tile color="card-height ">
      <div class="hidden-sm-and-down">
        <v-card-title v-if="tab === `tab-1`" class="text pa-2">
          <span class="ml-1">{{ ShowRoomUserCars.length }}</span>
          طلب جديد
        </v-card-title>
        <v-card-title v-else class="text pa-2">
          <span class="ml-1">{{ ShowRoomUserCars.length }}</span>
          منتج في طريقها للعميل
        </v-card-title>
      </div>
      <v-tabs-items touchless v-model="tab" class="transparent">
        <!-- prepare the order  -->
        <v-tab-item value="tab-1">
          <v-card flat tile class="mx-auto">
            <!-- order card  -->
            <v-row no-gutters>
              <v-col
                v-for="(Car, i) in ShowRoomUserCars"
                :key="i"
                cols="12"
                class="pa-2"
              >
                <v-card
                  flat
                  class="pa-2"
                  color="blue-grey lighten-5
"
                >
                  <v-row align="center" no-gutters justify="space-between">
                    <!-- buyer Info  -->
                    <v-col
                      class="mb-1"
                      style="border-bottom: 1px solid #eee"
                      cols="12"
                    >
                      <v-row align="center" no-gutters class="pa-2">
                        <div>
                          <!-- profile image  -->
                          <v-avatar size="25" color="grey"> </v-avatar>
                          <!-- name  -->
                          <span
                            style="font-size: 13px"
                            class="normal-text-edite mr-2"
                          >
                            محمد أمين
                          </span>
                        </div>
                        <v-spacer></v-spacer>
                        <!-- order number   -->
                        <div>
                          <span style="font-size: 13px">رقم الطلب : </span>
                          <span
                            class="mr-2"
                            style="
                              font-size: 13px;
                              font-family: sans-serif;
                              font-weight: 600;
                            "
                          >
                            MMDO461514622151
                          </span>
                        </div>
                      </v-row>
                    </v-col>
                    <v-col class="py-1" cols="12" v-for="i in 2" :key="i">
                      <v-card flat>
                        <v-row
                          align="center"
                          no-gutters
                          justify="space-between"
                        >
                          <!-- order name & imag  -->
                          <v-col cols="auto">
                            <v-row align="center" no-gutters>
                              <!-- imag  -->
                              <v-col cols="auto">
                                <v-avatar tile size="30">
                                  <v-img
                                    :src="getimageUrl(Car.folder, Car.image)"
                                    :lazy-src="
                                      getimageUrl(Car.folder, Car.image)
                                    "
                                    alt="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                                  ></v-img>
                                </v-avatar>
                              </v-col>
                              <!-- name  -->
                              <v-col cols="auto">
                                <v-card-text
                                  class="pa-2 normal-text-edite text-truncate d-block"
                                >
                                  {{ Car.company }} {{ Car.name }}
                                </v-card-text>
                              </v-col>
                            </v-row>
                          </v-col>
                          <!-- total order -->
                          <v-col cols="auto">
                            <v-card-text class="pa-0 text-truncate d-block">
                              {{ Car.payment }}
                            </v-card-text>
                          </v-col>
                          <!-- client's request -->
                          <v-col cols="3">
                            <v-card-text
                              class="pa-2 normal-text-edite text-truncate d-block"
                            >
                              {{ Car.discription }}
                            </v-card-text>
                          </v-col>
                          <!-- client's shipping request -->
                          <v-col cols="auto">
                            <v-card-text class="pa-2 text-truncate d-block">
                              x{{ Car.id }}
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                    <v-col cols="12" class="text-center pa-2 pb-1">
                      <v-btn depressed class="btn grey lighten-5">
                        ابدأ في تجهيز الطلب + 1
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <!-- Confirm  shipping -->
        <v-tab-item value="tab-2">
          <v-card flat tile class="mx-auto">
            <!-- order card  -->
            <v-row no-gutters>
              <v-col
                v-for="(Car, i) in ShowRoomUserCars"
                :key="i"
                cols="12"
                class="pa-2"
              >
                <v-card flat class="pa-2" color="blue-grey lighten-5">
                  <v-row align="center" no-gutters justify="space-between">
                    <!-- buyer Info  -->
                    <v-col
                      class="mb-1"
                      style="border-bottom: 1px solid #eee"
                      cols="12"
                    >
                      <v-row align="center" no-gutters class="pa-2">
                        <div>
                          <!-- profile image  -->
                          <v-avatar size="25" color="grey"> </v-avatar>
                          <!-- name  -->
                          <span
                            style="font-size: 13px"
                            class="normal-text-edite mr-2"
                          >
                            محمد أمين
                          </span>
                        </div>
                        <v-spacer></v-spacer>
                        <!-- order number   -->
                        <div>
                          <span style="font-size: 13px">رقم الطلب : </span>
                          <span
                            class="mr-2"
                            style="
                              font-size: 13px;
                              font-family: sans-serif;
                              font-weight: 600;
                            "
                          >
                            MMDO461514622151
                          </span>
                        </div>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="i in 10" :key="i">
                          <v-card flat class="overflow-hidden" width="100%">
                            <v-row
                              align="center"
                              no-gutters
                              justify="space-between"
                            >
                              <!-- order name & imag  -->
                              <v-col cols="auto">
                                <v-row align="center" no-gutters>
                                  <!-- imag  -->
                                  <v-col cols="auto">
                                    <v-avatar tile size="30">
                                      <v-img
                                        :src="
                                          getimageUrl(Car.folder, Car.image)
                                        "
                                        :lazy-src="
                                          getimageUrl(Car.folder, Car.image)
                                        "
                                        alt="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                                      ></v-img>
                                    </v-avatar>
                                  </v-col>
                                  <!-- name  -->
                                  <v-col cols="auto">
                                    <v-card-text
                                      class="pa-2 normal-text-edite text-truncate d-block"
                                    >
                                      {{ Car.company }} {{ Car.name }}
                                    </v-card-text>
                                  </v-col>
                                </v-row>
                              </v-col>
                              <!-- total order -->
                              <v-col cols="auto">
                                <v-card-text class="pa-0 text-truncate d-block">
                                  {{ Car.payment }}
                                </v-card-text>
                              </v-col>
                              <!-- client's request -->
                              <v-col cols="3">
                                <v-card-text
                                  class="pa-2 normal-text-edite text-truncate d-block"
                                >
                                  {{ Car.discription }}
                                </v-card-text>
                              </v-col>
                              <!-- client's shipping request -->
                              <v-col cols="auto">
                                <v-card-text class="pa-2 text-truncate d-block">
                                  x{{ Car.id }}
                                </v-card-text>
                              </v-col>
                            </v-row>
                          </v-card>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                      </swiper>
                    </v-col>
                    <v-col class="mb-1" cols="12">
                      <v-sheet color="orange lighten-5">
                        <v-row align="center" no-gutters class="pa-2">
                          <!-- total  Products  -->
                          <v-col cols="6">
                            <span class="btn" style="font-size: 14px">
                              مجموع الطلب
                            </span>
                            :
                            <span class="mr-1" style="font-size: 15px">
                              3
                            </span>
                          </v-col>
                          <v-spacer></v-spacer>
                          <!-- total  Price -->
                          <v-col class="text-end" cols="6">
                            <span class="btn" style="font-size: 14px">
                              السعر :
                            </span>
                            <span class="mr-1" style="font-size: 15px">
                              3
                            </span>
                            <span class="btn" style="font-size: 13px">
                              ريال
                            </span>
                          </v-col>
                        </v-row>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12" class="text-center pa-2 pb-1">
                      <v-btn depressed class="btn grey lighten-5">
                        ابدأ في شحن الطلبية الطلب
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <!-- Cancelled Products -->
        <v-tab-item value="tab-3">
          <v-card flat tile class="mx-auto">
            <!-- order card  -->
            <v-row no-gutters>
              <v-col
                v-for="(Car, i) in ShowRoomUserCars"
                :key="i"
                cols="12"
                class="pa-2"
              >
                <v-card flat class="pa-2" color="blue-grey lighten-5">
                  <v-row align="center" no-gutters justify="space-between">
                    <!-- buyer Info  -->
                    <v-col
                      class="mb-1"
                      style="border-bottom: 1px solid #eee"
                      cols="12"
                    >
                      <v-row align="center" no-gutters class="pa-2">
                        <div>
                          <!-- profile image  -->
                          <v-avatar size="25" color="green">
                            <v-icon color="white">mdi-check</v-icon>
                          </v-avatar>
                          <!-- name  -->
                          <span
                            style="font-size: 13px"
                            class="normal-text-edite mr-2"
                          >
                            محمد أمين
                          </span>
                        </div>
                        <v-spacer></v-spacer>
                        <!-- order number   -->
                        <div>
                          <span style="font-size: 13px">رقم الطلب : </span>
                          <span
                            class="mr-2"
                            style="
                              font-size: 13px;
                              font-family: sans-serif;
                              font-weight: 600;
                            "
                          >
                            MMDO461514622151
                          </span>
                        </div>
                      </v-row>
                    </v-col>
                    <!-- Products Info  -->
                    <v-col cols="12">
                      <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="i in 2" :key="i">
                          <v-card flat class="overflow-hidden" width="100%">
                            <v-row
                              align="center"
                              no-gutters
                              justify="space-between"
                            >
                              <!-- order name & imag  -->
                              <v-col cols="auto">
                                <v-row align="center" no-gutters>
                                  <!-- imag  -->
                                  <v-col cols="auto">
                                    <v-avatar tile size="30">
                                      <v-img
                                        :src="
                                          getimageUrl(Car.folder, Car.image)
                                        "
                                        :lazy-src="
                                          getimageUrl(Car.folder, Car.image)
                                        "
                                        alt="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                                      ></v-img>
                                    </v-avatar>
                                  </v-col>
                                  <!-- name  -->
                                  <v-col cols="auto">
                                    <v-card-text
                                      class="pa-2 normal-text-edite text-truncate d-block"
                                    >
                                      {{ Car.company }} {{ Car.name }}
                                    </v-card-text>
                                  </v-col>
                                </v-row>
                              </v-col>
                              <!-- total order -->
                              <v-col cols="auto">
                                <v-card-text class="pa-0 text-truncate d-block">
                                  {{ Car.payment }}
                                </v-card-text>
                              </v-col>
                              <!-- client's request -->
                              <v-col cols="3">
                                <v-card-text
                                  class="pa-2 normal-text-edite text-truncate d-block"
                                >
                                  {{ Car.discription }}
                                </v-card-text>
                              </v-col>
                              <!-- client's shipping request -->
                              <v-col cols="auto">
                                <v-card-text class="pa-2 text-truncate d-block">
                                  x{{ Car.id }}
                                </v-card-text>
                              </v-col>
                            </v-row>
                          </v-card>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                      </swiper>
                    </v-col>
                    <v-col class="mb-1" cols="12">
                      <v-sheet color="orange lighten-5">
                        <v-row align="center" no-gutters class="pa-2">
                          <!-- total  Products  -->
                          <v-col cols="6">
                            <span class="btn" style="font-size: 14px">
                              مجموع الطلب
                            </span>
                            :
                            <span class="mr-1" style="font-size: 15px">
                              3
                            </span>
                          </v-col>
                          <v-spacer></v-spacer>
                          <!-- total  Price -->
                          <v-col class="text-end" cols="6">
                            <span class="btn" style="font-size: 14px">
                              السعر :
                            </span>
                            <span class="mr-1" style="font-size: 15px">
                              3
                            </span>
                            <span class="btn" style="font-size: 13px">
                              ريال
                            </span>
                          </v-col>
                        </v-row>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12" class="text-center pa-2 pb-1">
                      <v-btn depressed class="btn grey lighten-5">
                        رؤية معلومات الطلب
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <!-- Cancelled Products -->
        <v-tab-item value="tab-4">
          <v-card flat tile class="mx-auto">
            <!-- order card  -->
            <v-row no-gutters>
              <v-col
                v-for="(Car, i) in ShowRoomUserCars"
                :key="i"
                cols="12"
                class="pa-2"
              >
                <v-card outlined>
                  <v-row align="center" no-gutters>
                    <!-- buyer Info  -->
                    <v-col
                      class="mb-1"
                      style="border-bottom: 1px solid #eee"
                      cols="12"
                    >
                      <v-row align="center" no-gutters class="pa-2">
                        <!-- profile image  -->
                        <v-avatar size="25" color="grey"> </v-avatar>
                        <!-- name  -->
                        <span
                          style="font-size: 13px"
                          class="normal-text-edite mr-2"
                        >
                          محمد أمين
                        </span>
                        <v-spacer></v-spacer>
                        <!-- order number   -->
                        <span style="font-size: 13px">رقم الطلب : </span>
                        <span
                          class="mr-2"
                          style="
                            font-size: 13px;
                            font-family: sans-serif;
                            font-weight: 600;
                          "
                          >MMDO461514622151</span
                        >
                      </v-row>
                    </v-col>
                    <!-- order name & imag  -->
                    <v-col cols="5">
                      <v-row align="center" no-gutters>
                        <!-- imag  -->
                        <v-col cols="4" lg="2" sm="2" md="2">
                          <v-avatar tile size="50">
                            <v-img
                              :src="getimageUrl(Car.folder, Car.image)"
                              :lazy-src="getimageUrl(Car.folder, Car.image)"
                              alt="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <!-- name  -->
                        <v-col cols="8" lg="10" sm="10" md="10">
                          <v-card-text
                            class="pa-2 normal-text-edite text-truncate d-block"
                          >
                            {{ Car.company }} {{ Car.name }}
                          </v-card-text>
                        </v-col>
                      </v-row>
                    </v-col>
                    <!-- total order -->
                    <v-col cols="1">
                      <v-card-text class="pa-0 text-truncate d-block">
                        {{ Car.payment }}
                      </v-card-text>
                    </v-col>
                    <!-- client's request -->
                    <v-col cols="4">
                      <v-card-text
                        class="pa-2 normal-text-edite text-truncate d-block"
                      >
                        {{ Car.discription }}
                      </v-card-text>
                    </v-col>
                    <!-- client's shipping request -->
                    <v-col cols="2">
                      <v-card-text
                        class="pa-2 normal-text-edite text-truncate d-block"
                      >
                        {{ Car.negotiable }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<script>
import ShowRoomUserCars from "../data-json/All-Car.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "UserAdd",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      ShowRoomUserCars,
      tab: null,
      CustomerInfo: [
        {
          name: " تاريخ الطلب ",
          DateTime: ["21 / 1 / 2022", "10:55 am"],
        },
        {
          name: "طلب رقم ",
          calories: "0147",
        },
        {
          name: "طلب رقم ",
          calories: "0147",
        },
      ],
      ProductInfo: [
        {
          name: "أسم المنتج",
          calories: "مـازدا مازدا3 مـازدا مازدا3 مـازدا مازدا3",
        },
        {
          name: "رقم المنتج ",
          calories: 1654218459,
        },
        {
          name: "الموديل",
          calories: 262,
        },
        {
          name: "المقاس",
          calories: 262,
        },
        {
          name: "اللون",
          calories: 262,
        },
        {
          name: "عدد",
          calories: 2,
        },
        {
          name: "إجمالي",
          calories: "1521 ريال",
        },
      ],
      ShipmentInfo: [
        {
          name: "أسم شركة التوصيل أو أسم موصل الطلب",
          calories: 159,
        },
        {
          name: "رقم هاتف التوصيل",
          calories: 237,
        },
        {
          name: "زمن توصيل المنتج",
          calories: 262,
        },
        {
          name: "رقم التوصيل ",
          calories: 159,
        },
      ],
      ShipmentArrived: [
        {
          calories: "النسر السريع",
          name: "أسم شركة التوصيل أو أسم موصل الطلب",
        },
        {
          calories: "0112151456",
          name: "رقم هاتف التوصيل",
        },
        {
          calories: 4,
          name: "زمن توصيل المنتج",
        },
        {
          name: "رقم التوصيل ",
          calories: "DE2550551",
        },
        {
          name: "عنوان التسليم",
          calories:
            "عنوانعنوانعنوانعنوانعنوانعنوانعنوانعنوان 1424 عنوانعنوانعنوانعنوانعنوان",
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        },
      },
    };
  },
  computed: {
    filteredStore: function () {
      return this.ShowRoomUserCars.filter((ShowRoomUserCars) => {
        return ShowRoomUserCars.name.match(this.search);
      });
    },
  },

  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
    reset() {
      return (this.search = "");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.UserAdd {
  width: 100%;

  // height: calc(100vh - 100px);
  .title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    color: #039be5 !important;
    font-size: 16px !important;
  }
  .btn {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px !important;
  }
  .text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 18px !important;
  }
  .client-Info {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 16px !important;
  }
}
.swiper {
  height: 230px;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 40px;
  }
  .swiper-pagination.swiper-pagination-fraction {
    bottom: 0px;
  }
}
::v-deep .theme--light.v-tabs .v-tab:hover:before {
  opacity: 0 !important;
}
::v-deep span.v-stepper__step__step {
  margin-left: 0;
  margin-bottom: 10px;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 13px;
}
.links {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 15px !important;
  color: $fontcolor !important;
  // font-weight: 600;

  @media (max-width: 600px) {
    font-size: 14px !important;
    font-weight: 600;
  }
}

.PerPrder {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 13px !important;
}
.titel {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 18px !important;
}
.normal-text-edite {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 16px;
  span {
    font-family: sans-serif !important;
    letter-spacing: 0.5px !important;
  }
  @media (max-width: 700px) {
    font-size: 13px;
  }
}
// ::v-deep .v-banner__wrapper {
//   border: 0 !important;
//   padding: 0 !important;
// }
::v-deep
  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
}

.card-height {
  height: calc(100vh - 48px);
  overflow: scroll;
  @media (max-width: 960px) {
    height: calc(100vh - 106px) !important;
  }
}
</style>
