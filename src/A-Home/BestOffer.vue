<template>
  <div class="BestOffer pa-1">
    <v-container class="container pa-0">
      <v-card tile color="transparent" flat>
        <div class="pa-2 align-center d-flex font-weight-bold tital">
          عروضات
          <!-- <strong class="mx-1">مجنونه</strong> -->
          <v-icon right color="#fc624d">mdi-flash</v-icon>
          <!-- بأفضل
          <strong class="mx-1">الأسعار</strong> -->
          <v-spacer></v-spacer>
          <countdown :time="2 * 24 * 60 * 60 * 1000">
            <template slot-scope="props">
              <v-row
                align="center"
                no-gutters
                style="flex-direction: row-reverse"
              >
                <span class="Countdown">
                  {{ props.days }}
                </span>
                <span class="Countdown">
                  {{ props.hours }}
                </span>
                <span class="Countdown">
                  {{ props.minutes }}
                </span>
                <span class="Countdown">
                  {{ props.seconds }}
                </span>
              </v-row>
            </template>
          </countdown>
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
                width="100%"
                height="240"
                class=""
                rounded="lg"
                flat
                style="overflow: hidden; background-color: #fff"
              >
                <div v-if="Product.discountPercent" class="best-price-tag">
                  <small class="discountPercent">
                    {{ Product.discountPercent }}-
                  </small>
                </div>
                <v-img
                  height="130"
                  :src="getimageUrl(Product.folder, Product.image)"
                ></v-img>
                <!-- Product Name -->
                <v-row no-gutters>
                  <v-card-text
                    style="
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                    class="card-text py-1 pa-2"
                  >
                    <!-- if this product at thiqah mall  -->
                    {{ Product.name }} {{ Product.company }} {{ Product.name }}
                    {{ Product.company }}
                    {{ Product.name }}
                    {{ Product.name }}
                  </v-card-text>
                </v-row>
                <v-row class="px-2" justify="center" align="center" no-gutters>
                  <!-- if this item belong to the store registered with thiqah mall  -->
                  <v-avatar size="22" color="red lighten-1">
                    <v-icon color="white" size="16">mdi-shopping</v-icon>
                  </v-avatar>
                  <!-- Price  -->
                  <strong class="PriceAfter py-1 pt-0 pa-2 text-truncate">
                    {{ Product.payment }}
                    <v-icon color="grey darken-3" size="19">
                      mdi-currency-rial
                    </v-icon>
                  </strong>
                </v-row>
                <!-- Residual   -->
                <v-row class="px-2" no-gutters align="center">
                  <v-card flat style="position: relative; width: fit-content">
                    <v-icon class="v-icon-most-sel">mdi-fire</v-icon>
                    <v-sheet
                      style="position: relative; overflow: hidden"
                      class="my-2 mx-auto text-center"
                      width="130px"
                      color="#FFCCBC"
                      rounded="lg"
                      height="8"
                    >
                      <span class="progress"></span>
                    </v-sheet>
                  </v-card>
                  <v-spacer></v-spacer>
                  <span
                    style="
                      font-family: sans-serif;
                      font-size: 14px;
                      font-weight: 600;
                    "
                    class="deep-orange--text"
                    >150</span
                  >
                </v-row>
              </v-card>
            </div>
          </swiper-slide>
          <swiper-slide>
            <v-card
              flat
              max-width="190px"
              height="240px"
              router
              color="transparent"
              class="overflow-hidden d-flex flex-column justify-center align-center"
            >
              <v-card-text class="text-center py-1 card-text-seeMore">
                الكل
              </v-card-text>
              <v-icon size="23" class="deep-orange--text text--darken-1">
                mdi-plus
              </v-icon>
            </v-card>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VerifiedCar from "../data-json/All-Car.json";
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
          1261: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1260: {
            slidesPerView: 5,
            slidesPerGroup: 5,
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
  background-color: #eeeee4;

  .swiper {
    height: 300px;
    // padding-bottom: 45px;
    padding-right: 5px !important;
    padding-left: 3px;
    .swiper-slide {
      height: 265px !important;
    }
  }

  ::v-deep .swiper-container-horizontal > .swiper-pagination-progressbar {
    top: 95% !important;
    width: 50px;
    height: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;

    span.swiper-pagination-progressbar-fill {
      background-color: $color-2;
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
    font-size: 22px;
    color: $color-2;
    letter-spacing: 0px !important;
    pointer-events: none;
    @media (max-width: 470px) {
      font-size: 18px;
    }
    @media (max-width: 350px) {
      font-size: 17px;
    }
  }
  a {
    font-size: 13px;
  }
}

::v-deep i.v-icon.notranslate.material-icons.theme--light {
  color: $color-2;
  font-size: 28px;
  font-weight: 600;
}

.card-text-seeMore {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 600;
  color: $fontcolor !important;
}
// Products
.sold-info {
  font-family: $fontfamliy3 !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: $fontcolorlinks;
  span {
    color: $color-2 !important;
    margin-left: 5px;
    font-size: 14px !important;
    letter-spacing: 1.5px !important;
  }
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
  top: -1px;
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
  background: linear-gradient(140deg, #fc624d 30%, #ffc0ac94 100%);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  // transform: rotate(360deg);
  z-index: 1;
  border-radius: 0 0 4px 4px !important;
  .discountPercent {
    color: white !important;
    font-weight: 600;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-family: sans-serif;
  }
}
//
.ribbon {
  position: absolute;
  top: 14px;
  right: 8px;
  z-index: 1;
  width: 50px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  border-radius: 3px 0px 0px 3px !important;
  background: $color-2;
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
.progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: linear-gradient(90deg, #fc624d 0%, #f4511e 100%);
  // border-radius: 1000px !important;
}
.progress-info {
  // color: ;
  text-align: center;
  letter-spacing: 0 !important;
  font-size: 13px !important;
  color: #424242;
  font-weight: 600;
  font-family: $fontfamliy3 !important;
  z-index: 2;
  span {
    font-family: sans-serif !important;
    font-size: 15px !important;
    letter-spacing: 0.5px !important;
  }
}
.v-icon-most-sel {
  position: absolute !important;
  top: -4px;
  right: -5px;
  font-size: 23px !important;
  color: #ffc400 !important;
  z-index: 800;
}
.Countdown {
  width: 27px !important;
  height: 27px !important;
  // height: 20px !important;
  // display: block !important;
  background-color: $color-2 !important;
  color: #eee !important;
  margin: 0 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: sans-serif !important;
  font-size: 17px !important;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 15px !important;
  }
}
.ribbon-2 {
  font-size: 13px !important;
  font-family: $fontfamliy3 !important;
}
</style>
