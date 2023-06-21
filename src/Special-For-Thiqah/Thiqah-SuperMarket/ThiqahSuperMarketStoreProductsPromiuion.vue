<template>
  <div class="BestOffer">
    <v-row no-gutters>
      <!-- Categories  -->
      <v-col cols="12" class="mt-2">
        <v-container class="pa-0">
          <swiper class="swiperCatgories px-2" :options="swiperCatgories">
            <swiper-slide class="" v-for="i in 22" :key="i">
              <v-avatar color="transparent">
                <v-img
                  src="https://down-my.img.susercontent.com/file/3c8d9860094df6057d95bc545fe1d790_tn"
                  alt="https://down-my.img.susercontent.com/file/3c8d9860094df6057d95bc545fe1d790_tn"
                  contain
                >
                </v-img>
              </v-avatar>
              <v-card-text class="pa-0 list pt-1"> الألبان </v-card-text>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
        </v-container>
      </v-col>
      <!-- crazy sale  -->
      <v-col class="my-3 mb-5" cols="12">
        <v-sheet class="swiper_card">
          <v-container class="pa-0">
            <v-row class="pa-3" no-gutters align="center">
              <strong class="tital ma-0">
                العروضات
                <v-icon right color="#fc624d">mdi-flash</v-icon>
              </strong>
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
            </v-row>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(Product, index) in getCarInfo" :key="index">
                <div class="pa-2" style="position: relative">
                  <h1 class="ribbon-swiper">سـوبـرمـاركـت</h1>
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
                    height="235"
                    class=""
                    rounded="lg"
                    flat
                    style="overflow: hidden"
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
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }} {{ Product.company }}
                        {{ Product.name }}
                        {{ Product.company }}
                        {{ Product.name }}
                        {{ Product.company }}
                      </v-card-text>
                    </v-row>
                    <!-- Price  -->
                    <v-card-actions class="py-0 justify-center">
                      <strong class="PriceAfter text-truncate">
                        {{ Product.payment }}
                        <v-icon color="grey darken-3" size="20">
                          mdi-currency-rial
                        </v-icon>
                      </strong>
                    </v-card-actions>
                    <!-- Residual   -->
                    <v-row class="px-2" no-gutters align="center">
                      <v-card
                        flat
                        style="position: relative; width: fit-content"
                      >
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
                      >
                        150
                      </span>
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
                  <v-icon size="27" color="#2673dd"> mdi-plus</v-icon>
                </v-card>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </v-container>
        </v-sheet>
      </v-col>
      <!-- Products most sales sale and on  -->
    </v-row>
    <v-container class="pa-0">
      <v-row>
        <v-col
          cols="6"
          md="3"
          sm="4"
          lg="2"
          class="pa-2"
          v-for="Product in VerifiedCar"
          :key="Product.id"
        >
          <div style="position: relative">
            <h1 class="ribbon">سـوبـرمـاركـت</h1>
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
              :elevation="hover ? 3 : 0"
              min-height="280"
              width="100%"
              style="
                overflow: hidden;
                background-color: #fff;
                position: relative;
              "
              rounded="lg"
            >
              <div v-if="Product.discountPercent" class="best-price-tag">
                <small class="discountPercent">
                  {{ Product.discountPercent }}-
                </small>
              </div>
              <v-img
                height="150"
                :src="getimageUrl(Product.folder, Product.image)"
              ></v-img>
              <!--  product name  -->
              <v-card-text class="card-text py-1 pa-2">
                {{ Product.name }} {{ Product.company }} {{ Product.name }}
                {{ Product.company }} {{ Product.name }} {{ Product.company }}
                {{ Product.name }}
                {{ Product.name }} {{ Product.company }} {{ Product.name }}
                {{ Product.company }} {{ Product.name }} {{ Product.company }}
                {{ Product.name }}
              </v-card-text>
              <strong class="PriceAfter py-1 pt-0 pa-2 text-truncate">
                {{ Product.payment }}
                <v-icon color="grey darken-3" size="20">
                  mdi-currency-rial
                </v-icon>
              </strong>
              <!-- how many sold and rating  -->
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
              <!-- location -->
              <v-row
                justify="space-between"
                align="center"
                no-gutters
                class="px-2 justify-end"
              >
                <span class="sold-info">
                  {{ Product.location }}
                </span>
                <v-btn depressed style="background-color: #00e676" fab x-small>
                  <v-icon color="white"> mdi-cart-plus </v-icon>
                </v-btn>
              </v-row>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12">
          <v-card-actions class="justify-center">
            <v-btn outlined color="#fc624d" width="300" class="seeMoreBtn">
              تـحـمـيـل الـمـزيـد
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
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
          src: "https://my-test-11.slatic.net/v2/resize/page_decoration/e3260f81739e0849d92bfe109e339efb.jpg_120x120q80.jpg_.webp",
        },
        {
          tital: " كمبيوتر وملحقاتها ",
          src: "https://my-test-11.slatic.net/shop/735dc5f46ce3285d9b91a4a8b10d2f18.png_120x120q80.jpg_.webp",
        },
        {
          tital: " الأزياء  ",
          src: "https://my-test-11.slatic.net/shop/81b090ae028a712eab5c6f256f903951.jpeg_120x120q80.jpg_.webp",
        },
        {
          tital: " الصحة & الجمال ",
          src: "https://my-test-11.slatic.net/shop/2d322041ceaad4d517087af4f62303d5.jpeg_120x120q80.jpg_.webp",
        },
        {
          tital: " اثاث منزلية & مكتبية ",
          src: "https://my-test-11.slatic.net/shop/cb1c72bb72effa5f3672244f27429bd1.png_120x120q80.jpg_.webp",
        },
        {
          tital: " القرطاسية ",
          src: "	https://my-test-11.slatic.net/v2/resize/page_decor…5ecb87a47ae4b07ff47c6e4d.jpg_120x120q80.jpg_.webp",
        },
        {
          tital: " ألعاب ",
          src: "	https://sg-test-11.slatic.net/other/shop/eb4eddc4320345119e877fefe2ec2565.png_120x120q80.jpg_.webp",
        },
        {
          tital: " منتجات  الأطفال ",
          src: "https://my-test-11.slatic.net/shop/e0bb35bccb97711dc38c78c99251bb77.jpeg_120x120q80.jpg_.webp",
        },
        {
          tital: " البناء  والكهرباء ",
          src: "https://my-test-11.slatic.net/shop/a66f416c7f19198cd4a63b4f137b1f13.png_120x120q80.jpg_.webp",
        },
      ],
      swiperCatgories: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView:8,
            slidesPerGroup: 8,
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
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          470: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          250: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        },
      },
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
            slidesPerView: 3,
            slidesPerGroup: 3,
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
  .swiperCatgories {
    height: 300px;
    .swiper-slide {
      height: 100px !important;
      margin: 0px !important;
      text-align: center !important;
      // border: 1px solid grey;
    }
  }
  .swiper_card {
    background: linear-gradient(90deg, #A5D6A7 0%, #E8F5E9 100%);
  }
  .swiper {
    height: 280px;
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
    background-color: #fafafa;

    span.swiper-pagination-progressbar-fill {
      background-color: #fc624d;
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
    line-height: 1.5;
  }
  .tital {
    width: fit-content;
    font-family: $fontfamliy3;
    font-size: 18px !important;
    color: $fontcolor !important;
    letter-spacing: 0px !important;
    pointer-events: none;
    @media (max-width: 700px) {
      font-size: 16px;
    }
    @media (max-width: 350px) {
      font-size: 14px;
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
  font-size: 18px;
  color: $fontcolor !important;
}
.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
}
.seeMoreBtn {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 15px !important;
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
  background: linear-gradient(140deg, #388e3c 30%, #00e677a8 100%);
  width: 35px;
  height: 40px;
  display: flex;
  justify-content: center;
  // transform: rotate(360deg);
  z-index: 1;
  border-radius: 0 0 3px 3px !important;
}
.discountPercent {
  color: $fontcolorsm !important;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
//
.ribbon {
  position: absolute;
  top: 7px;
  right: 0px;
  z-index: 1;
  padding: 2px 5px;
  width: fit-content;
  text-align: center;
  font-size: 10px;
  color: #ffffff;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  border-radius: 5px 0px 0px 5px !important;
  background: linear-gradient(140deg, #388e3c 15%, #00e676 100%);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.ribbon:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.5em;
  height: 100%;
  padding: 0 0 2.33em 0px !important;
  top: 0;
  right: -0.51em;
  box-shadow: -1px 0px 0px 0px #00e676;
  background: #00e676;
  border-radius: 0px 5px 5px 0px !important;
}
.ribbon:after {
  position: absolute;
  content: "";
  display: block;
  width: 0.38em;
  height: 0.313em;
  background: rgba(0, 0, 0, 0.35);
  bottom: -0.313em;
  right: -0.3em;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
}
.ribbon-swiper {
  position: absolute;
  top: 15px;
  right: 7.5px;
  z-index: 1;
  padding: 2px 5px;
  width: fit-content;
  text-align: center;
  font-size: 10px;
  color: #ffffff;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  border-radius: 5px 0px 0px 5px !important;
  background: linear-gradient(140deg, #388e3c 15%, #00e676 100%);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.ribbon-swiper:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.5em;
  height: 100%;
  padding: 0 0 0.52em 0px !important;
  top: 0;
  right: -0.51em;
  background: #00e676;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: -1px 0px 0px 0px #00e676;
}
.ribbon-swiper:after {
  position: absolute;
  content: "";
  display: block;
  width: 0.38em;
  height: 0.313em;
  background: rgba(0, 0, 0, 0.35);
  bottom: -0.313em;
  right: -0.3em;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
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
.Countdown {
  width: 27px !important;
  height: 27px !important;
  // height: 20px !important;
  // display: block !important;
  background-color: #fc624d !important;
  color: #eee !important;
  margin: 0 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 3px !important;
  border-radius: 50%;
  font-family: sans-serif !important;
  font-size: 17px !important;
  @media (max-width: 600px) {
    font-size: 15px !important;
  }
}
.progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: #fc624d;
  // border-radius: 1000px !important;
}
.progress-info {
  // color: ;
  text-align: center;
  letter-spacing: 0 !important;
  font-size: 14px !important;
  color: #2f2f2f;
  font-weight: 600;
  font-family: $fontfamliy3 !important;
  z-index: 2;
}
.v-icon-most-sel {
  position: absolute !important;
  top: -4px;
  right: -5px;
  font-size: 23px !important;
  color: #ffc400 !important;
  z-index: 800;
}
.list {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-size: 14px !important;

  // background: linear-gradient(140deg, #388e3c 15%, #00e676 100%);
  // @media (max-width: 700px) {
  //   font-size: 28px !important;
  // }
}

::v-deep .v-avatar.transparent {
  height: 60px !important;
  min-width: 60px !important;
  width: 60px !important;
  @media (max-width: 700px) {
    height: 50px !important;
    min-width: 50px !important;
    width: 50px !important;
  }
}
</style>
