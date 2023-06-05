<template>
  <div class="BestOffer pa-1 grey lighten-3">
    <v-container class="container pa-0">
      <v-row class="pa-2" no-gutters justify="center" align="center">
        <div class="font-weight-bold tital">
          ثـقـة
          <strong class="mx-1">مـول</strong>
        </div>
        <v-spacer></v-spacer>
        <v-btn text class="text-for-all">رؤية الكل</v-btn>
      </v-row>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(Product, index) in getCarInfo" :key="index">
          <div style="position: relative">
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
              height="220"
              class=""
              rounded="lg"
              flat
            >
              <v-img
                height="120"
                :src="getimageUrl(Product.folder, Product.image)"
              ></v-img>
              <v-row style="margin-top: -30px" justify="center" no-gutters>
                <v-avatar class="" size="60" color="white">
                  <v-img
                    height="45"
                    contain
                    src="../assets/outsrc/adidas-logo.png"
                  ></v-img>
                </v-avatar>
              </v-row>
              <v-row no-gutters justify="center">
                <v-card-text
                  class="d-block text-center card-text py-1 pa-2 text-truncate"
                >
                  {{ Product.name }} {{ Product.company }}
                </v-card-text>
                <v-subtitle class="grey--text text-for-all pa-0 text-truncate">
                  {{ Product.name }} {{ Product.company }}
                </v-subtitle>
              </v-row>
            </v-card>
          </div>
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
      VerifiedCar,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      swiperOption: {
        initialSlide: 0,
        freeMode: false,
        effect: "cards",
        spaceBetween: 10,
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
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          471: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          470: {
            slidesPerView: 4,
            slidesPerGroup: 4,
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
  background-color: #fafafa;
  .swiper {
    height: 245px;
    // padding-bottom: 45px;
    padding-right: 5px !important;
    padding-left: 3px;
    .swiper-slide {
      height: 230px !important;
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
      background-color: #f44336;
    }
  }
  .container {
    @media (max-width: 950px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
  .card-text {
    font-family: $fontfamliy3;
    letter-spacing: 0;
    font-size: 15px;
    color: $fontcolor;
  }
  .text-for-all {
    font-family: $fontfamliy3;
    letter-spacing: 0;
    color: $fontcolor;
  }
  .tital {
    font-family: $fontfamliy3;
    font-size: 22px;
    color: #f44336;
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
</style>
