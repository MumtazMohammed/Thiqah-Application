<template>
  <div class="BestOffer">
    <v-tabs
      active-class=" red--text lighten-5 "
      center-active
      class="overflow-hidden"
      :show-arrows="false"
      grow
      height=""
      icons-and-text
      background-color="blue-grey lighten-5"
      hide-slider
    >
      <v-tab class="text-all" v-for="(Category, i) in Categories" :key="i">
        {{ Category.tital }}
        <v-icon> {{ Category.icon }} </v-icon>
      </v-tab>
    </v-tabs>

    <v-row no-gutters>
      <v-col class="" cols="12">
        <v-card-title class="text-all">
          <span>
            {{ VerifiedCar.length }}
          </span>
          متجر متوفر لي أجلك
        </v-card-title>
      </v-col>
      <v-col class="" cols="12" v-for="i in 5" :key="i">
        <v-card flat tile class="my-1 overflow-hidden">
          <div class="pt-2 pr-3 font-weight-bold tital">
            <v-avatar class="ml-1" size="45">
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
            متجر الذهبي
          </div>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(Product, index) in getCarInfo" :key="index">
              <div class="pa-2" style="position: relative">
                <h1 class="ribbon">متميز</h1>
                <v-card
                  :to="{
                    name: 'ShowTheProduct',
                    params: {
                      carName: Product.name,
                      carShape: Product.Shape,
                      carId: Product.id,
                      Company: Product.folder,
                    },
                  }"
                  height="285"
                  width="100%"
                  outlined
                  style="position: relative; overflow: hidden"
                  rounded="lg"
                >
                  <v-row no-gutters style="height: 100%">
                    <v-col cols="12">
                      <div
                        v-if="Product.discountPercent"
                        class="best-price-tag"
                      >
                        <small class="discountPercent">
                          {{ Product.discountPercent }}-
                        </small>
                      </div>

                      <v-img
                        height="160"
                        :src="getimageUrl(Product.folder, Product.image)"
                      ></v-img>
                    </v-col>
                    <!--  product name  -->
                    <v-col cols="12" class="ma-auto">
                      <v-card-text
                        style="
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                          overflow: hidden;
                        "
                        class="card-text py-0 pa-0"
                      >
                        <!-- if this product at thiqah mall  -->
                        <span class="ribbon-2 pa-1 pl-2">ثـقـة مـول</span>
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.company }} {{ Product.name }}
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" class="ma-auto">
                      <strong class="PriceAfter py-0 pa-2 text-truncate">
                        {{ Product.payment }}
                        <v-icon color="grey darken-2" size="19">
                          mdi-currency-rial
                        </v-icon>
                      </strong>
                    </v-col>
                    <!-- how many sold and rating  -->
                    <v-col cols="12" class="ma-auto">
                      <v-card-actions class="py-0 pa-2">
                        <!-- rating  -->
                        <v-icon size="17" color="amber">mdi-star</v-icon>
                        <span class="span">3.5</span>
                        <!-- divider -->
                        <span class="divider mx-1"></span>
                        <!-- sold Info  -->
                        <p class="ma-0 sold-info text-truncate">
                          <span class="span ml-1">({{ Product.id }})</span>بيعت
                        </p>
                      </v-card-actions>
                    </v-col>
                    <!-- location -->
                    <v-col cols="12" class="ma-auto">
                      <v-row no-gutters class="px-2 justify-end">
                        <span class="sold-info">
                          {{ Product.location }}
                        </span>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card-actions class="justify-center">
          <v-btn outlined color="#fc624d" width="300" class="seeMoreBtn">
            تـحـمـيـل الـمـزيـد
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerifiedCar from "@/data-json/All-Car.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "BestOffer",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      VerifiedCar,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      Categories: [
        {
          tital: "الجولات والأجهزة اللوحية ",
          icon: "mdi-tablet-cellphone",
        },
        {
          tital: " كمبيوتر وملحقاتها ",
          icon: "mdi-laptop",
        },
        {
          tital: " الأزياء  ",
          icon: "mdi-tshirt-crew",
        },
        {
          tital: " الصحة & الجمال ",
          icon: "mdi-bottle-tonic-plus",
        },
        {
          tital: " اثاث منزلية & مكتبية ",
          icon: "mdi-sofa-single",
        },
        {
          tital: " القرطاسية ",
          icon: "mdi-library",
        },
        {
          tital: " ألعاب ",
          icon: "mdi-gamepad-variant",
        },
        {
          tital: " منتجات  الأطفال ",
          icon: "mdi-teddy-bear",
        },
        {
          tital: " البناء  والكهرباء ",
          icon: "mdi-account-hard-hat",
        },
      ],
      swiperOption: {
        initialSlide: 0,
        freeMode: false,
        effect: "cards",
        spaceBetween: 5,
        autoplay: false,
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
          type: "progressbar",
        },

        breakpoints: {
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          471: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          470: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          250: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },
    };
  },
  // this is help full to call the image inside folder and inject to the src
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    getCarInfo() {
      let GetCarVerified = [];
      for (let i = 0; i < this.VerifiedCar.length; i++) {
        if (this.VerifiedCar[i].Vip == true) {
          GetCarVerified.push(this.VerifiedCar[i]);
        }
      }
      return GetCarVerified;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.BestOffer {
  width: 100%;
  min-height: 20vh;
  //   background-color: #eceff1;
  .swiper {
    height: 325px;
    // padding-bottom: 45px;
    padding-right: 5px !important;
    padding-left: 3px;
  }

  ::v-deep .swiper-container-horizontal > .swiper-pagination-progressbar {
    top: 95% !important;
    width: 50px;
    height: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
    background-color: #f5f5f5;

    span.swiper-pagination-progressbar-fill {
      background-color: #f44336;
    }
  }
  .v-sheet {
    @media (max-width: 950px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }

  .container {
    @media (max-width: 950px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
  .card-text {
    font-family: $fontfamliy3 !important;
    color: $fontcolor !important;
    letter-spacing: 0 !important;
    font-size: 13.5px !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    span {
      background-color: #ff3d00;
      border-radius: 3px;
      font-weight: 600;
      font-size: 12px;
      padding: 1px;
    }
  }
  .tital {
    font-family: $fontfamliy3;
    font-size: 18px;
    color: $fontcolor !important;
    letter-spacing: 0px !important;
    pointer-events: none;
    @media (max-width: 700px) {
      font-size: 14px;
    }
    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
  a {
    font-size: 13px;
  }
}

::v-deep i.v-icon.notranslate.material-icons.theme--light {
  // color: $color-2;
  font-size: 28px;
  font-weight: 600;
}

.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  span {
    font-family: sans-serif;
    margin-left: 4px;
  }
}
.seeMoreBtn {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 15px !important;
  // font-weight: 600 !important;
}
// Products
.sold-info {
  font-family: $fontfamliy3 !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: $fontcolor !important;
}

.divider {
  display: inline-block;
  height: 12px;
  // width: 2px;
  padding: 1px;
  background-color: #e0e0e0;
  border-radius: 2px;
}
.PriceAfter {
  font-size: 17px !important;
  color: $fontcolor;
  font-weight: 600 !important;
  font-family: sans-serif !important;
}
.best-price-tag {
  position: absolute;
  left: 10px;
  top: 0px;
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 70%,
    100% 100%,
    49% 70%,
    0 100%,
    0% 70%,
    0% 35%,
    0 0
  );

  background-color: #fff;
  width: 35px;
  height: 40px;
  display: flex;
  justify-content: center;
  // transform: rotate(360deg);
  z-index: 1;
  border-radius: 0 !important;
}
.discountPercent {
  color: $fontcolor !important;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
//
.ribbon {
  position: absolute;
  top: 15px;
  right: 9px;
  z-index: 1;
  width: 50px;
  padding: 3px;
  text-align: center;
  font-size: 11px;
  color: #ffffff;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  border-radius: 2px 0px 0px 2px !important;
  background: #fc624d;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}

.ribbon:before,
.ribbon:after {
  position: absolute;
  content: "";
  display: block;
}

.ribbon:before {
  width: 0.469em;
  height: 100%;
  padding: 0 0 0.438em;
  top: 0;
  right: -0.469em;
  background: inherit;
  border-radius: 0px 5px 5px 0px !important;
}

.ribbon:after {
  width: 0.313em;
  height: 0.313em;
  background: rgba(0, 0, 0, 0.35);
  bottom: -0.313em;
  right: -0.314em;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
}

::v-deep .v-avatar.ml-1.rounded-0.white {
  @media (max-width: 700px) {
    height: 40px !important;
    min-width: 40px !important;
    width: 40px !important;
  }
}
::v-deep .theme--dark.v-tabs .v-tab--active:before,
.theme--dark.v-tabs .v-tab--active:hover:before {
  opacity: 0 !important;
}
::v-deep .v-slide-group__prev.v-slide-group__prev--disabled {
  display: none !important;
}
::v-deep .v-slide-group__next.v-slide-group__next--disabled {
  display: none !important;
}
.ribbon-2 {
  font-size: 11px !important;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%);
  background: #e53935;
  color: #fff;
  border-radius: 0px !important;
}
</style>
