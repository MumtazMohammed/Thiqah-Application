<template>
  <div class="BestOffer pa-1">
    <v-container class="container pa-0">
      <v-row class="pa-2" no-gutters justify="space-between" align="center">
        <div class="tital">الأعلى مبيعاً خلال هذا الشهر</div>
        <a href="#" class="see-all px-4"> رؤية الكل </a>
      </v-row>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(Product, index) in VerifiedCar" :key="index">
          <v-card rounded="lg" flat class="overflow-hidden">
            <v-row no-gutters>
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
                height="185"
                flat
                tile
                color="transparent"
                style="overflow: hidden; position: relative; z-index: 2"
              >
                <v-img
                  height="110"
                  style="overflow: hidden"
                  :src="getimageUrl(Product.folder, Product.image)"
                >
                  <span v-if="index == 0" class="top white elevation-10">
                    <v-icon size="27" color="#ffd700">mdi-seal</v-icon>
                  </span>
                  <span v-if="index == 1" class="top white elevation-10">
                    <v-icon size="27" color="#c0c0c0">mdi-seal</v-icon>
                  </span>
                  <span v-if="index == 2" class="top white elevation-10">
                    <v-icon size="27" color="#cd7f32">mdi-seal</v-icon>
                  </span>
                  <span v-else-if="index >= 3" class="top white elevation-10">
                    {{ index + 1 }}
                  </span>
                  <v-row
                    style="position: absolute; bottom: 0; right: 0; width: 100%"
                    no-gutters
                    align="end"
                    justify="center"
                  >
                    <span class="sold-text px-3 text-truncate">
                      المبيعات الشهرية : <span>{{ index + 70 }}</span>
                    </span>
                  </v-row>
                </v-img>
                <span class="d-block card-text pa-1 text-truncate">
                  {{ Product.name }} {{ Product.company }} {{ Product.name }}
                </span>
                <strong class="PriceAfter py-1 pt-0 pa-2 text-truncate">
                  {{ Product.payment }}
                  <v-icon color="grey darken-2" size="19">
                    mdi-currency-rial
                  </v-icon>
                </strong>
              </v-card>
              <!-- <v-card width="24%" flat tile class="transparent">
                <v-row
                  align="center"
                  justify="center"
                  class="fill-height"
                  no-gutters
                >
                  <span class="top-number">
                    {{ index + 1 }}
                  </span>
                </v-row>
              </v-card> -->
            </v-row>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
      chip: 0,
      VerifiedCar,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      swiperOption: {
        freeMode: false,
        effect: "cards",
        spaceBetween: 8,
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
            slidesPerView: 7,
            slidesPerGroup: 7,
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
            slidesPerView: 2,
            slidesPerGroup: 2,
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
  // display: flex;
  justify-content: center;
  // align-items: center;
  background-color: $color-background;
  // font-family: $fontfamliy;
  .container {
    @media (max-width: 950px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
  .card-text {
    font-family: $fontfamliy3;
    letter-spacing: 0;
    font-size: 14px;
    color: $fontcolorlinks;
    // background-color: aqua;
    span {
      font-size: 15px;
      font-weight: 600;
      color: $fontcolor;
      letter-spacing: 2px;
    }
  }
  .sold-text {
    font-family: $fontfamliy3;
    letter-spacing: 0;
    font-size: 14px;
    color: $fontcolor;
    background-color: #e3f2fdab;
    // border-radius: 30px !important;
    width: 100%;
    text-align: center;
    font-weight: 700;

    span {
      font-family: sans-serif !important;
      font-size: 17px;
      font-weight: 700;
      color: $fontcolor;
    }
  }
  .PriceAfter {
    font-size: 18px !important;
    display: block !important;
    color: $fontcolor;
    font-weight: 600 !important;
    font-family: sans-serif !important;
    text-align: center;
  }
  .tital {
    font-family: $fontfamliy3;
    font-size: 22px;
    color: #ff5722;
    letter-spacing: 0px !important;
    pointer-events: none;
    // text-align: center;
    font-weight: 600;
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

//a
.swiper {
  height: 215px;

  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 190px;
    // margin: 1px !important;
    // margin-bottom: 5px !important;
  }
}
::v-deep .swiper-container-horizontal > .swiper-pagination-progressbar {
  top: 95% !important;
  width: 50px;
  height: 5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;

  span.swiper-pagination-progressbar-fill {
    background-color: $color-2;
    box-shadow: inset 0 0 0 0.2px #eee;
  }
}
::v-deep.swiper-container {
  padding-right: 5px;
  padding-left: 5px !important;
}
::v-deep .v-slide-group__content {
  justify-content: end;
}
.see-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 14px !important;
  color: $fontcolor;
  text-decoration: none;
}
.top {
  // clip-path: polygon(0 0, 100% 0%, 100% 70%, 50% 100%, 0 70%);
  // background-color: aqua;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
  margin-right: 7px;
  margin-top: 5px;
  font-weight: 600;
  color: #424242 !important;
  font-family: sans-serif !important;
}
.top-number {
  background: -webkit-linear-gradient(180deg, #f8f9fa, #fc624d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  // position: absolute;
  // right: -5px;
  font-weight: 600;
  // transform: scale(1.3);
}
</style>
