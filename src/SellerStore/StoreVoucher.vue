<template>
  <div class="Store-Voucher white pa-2" style="overflow: hidden">
    <v-card-title class="titel pa-2"> قسائم المتجر </v-card-title>

    <v-row no-gutters>
      <v-col class="pa-1 px-1" cols="6" md="4" sm="4" lg="4">
        <v-card
          style="border: 1px dashed #ffab40"
          color="#FFF3E0"
          flat
          rounded="lg"
          class="pb-1 pl-5 px-3 StoreVoucher"
        >
          <v-row no-gutters justify="center" class="main">
            <v-col class="pr-1" cols="12" sm="9" md="9" lg="9">
              <v-card-text class="pa-0 text">
                خصم
                <span class="mx-1 amber--text text--accent-4">
                  <span>20</span>%
                </span>
              </v-card-text>
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
            <v-col cols="3">
              <v-row
                align="center"
                style="height: 100%"
                justify="center"
                no-gutters
              >
                <v-btn tile text class="btn" small> أحصل عليها </v-btn>
              </v-row>
            </v-col>
          </v-row>
          <!-- <div class="copy-button">
        <input id="copyvalue" type="text" readonly value="GOFREE" />
        <button onclick="copyIt()" class="copybtn">COPY</button>
      </div> -->
        </v-card>
      </v-col>
      <v-col class="pa-1 px-1" cols="6" md="4" sm="4" lg="4">
        <v-card
          style="border: 1px dashed #ffab40"
          color="#FFF3E0"
          flat
          disabled
          rounded="lg"
          class="pb-1 pl-5 px-3 StoreVoucher"
        >
          <v-row no-gutters justify="center" class="main">
            <v-col class="pr-1" cols="12" sm="9" md="9" lg="9">
              <v-card-text class="pa-0 text">
                خصم
                <span class="mx-1 amber--text text--accent-4">
                  <span>20</span>%
                </span>
              </v-card-text>
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
            <v-col cols="3">
              <v-row
                align="center"
                style="height: 100%"
                justify="center"
                no-gutters
              >
                <v-btn tile text class="btn" small> أحصل عليها </v-btn>
              </v-row>
            </v-col>
          </v-row>
          <!-- <div class="copy-button">
        <input id="copyvalue" type="text" readonly value="GOFREE" />
        <button onclick="copyIt()" class="copybtn">COPY</button>
      </div> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Services from "../data-json/showroom.json";
export default {
  name: "ServicesPage",
  components: {},
  data() {
    return {
      current: null,
      Services,
      swiperOption: {
        initialSlide: 0,
        freeMode: false,
        effect: "cards",
        spaceBetween: 0,
        autoplay: false,
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,

          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${
              index + 1
            }</span>`;
          },
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          471: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          470: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          250: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
      },
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Store-Voucher {
  // background-color: $color-background;
  .titel {
    letter-spacing: 0 !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    font-family: $fontfamliy3 !important;
    color: $fontcolor !important;
    // justify-content: center;
    @media (max-width: 750px) {
      font-size: 18px !important;
    }
  }
  .text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    font-weight: 600 !important;
    line-height: 1.4;
    font-size: 13px !important;

    @media (max-width: 750px) {
      font-size: 13px !important;
    }
    span {
      font-family: sans-serif !important;
      font-size: 15px;
      font-weight: 600 !important;
      @media (max-width: 600px) {
        font-size: 14px !important;
      }
    }
  }
  .btn {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    font-size: 13px !important;
    margin: 0 auto !important;
    font-weight: 600;
    // background-color: $color-2 !important;
    @media (max-width: 600px) {
      font-size: 13px !important;
    }
  }
}
.swiper {
  height: auto;
  padding-bottom: 45px;
  ::v-deep.swiper-pagination-bullet {
    font-size: 10px;
    width: 15px !important;
    height: 15px !important;
    line-height: 1.5;
    opacity: 0.5;
    background: rgb(223, 223, 223);
    transition: all 0.2s 0s linear;
    color: rgb(82, 82, 82);

    &:hover {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: #fff;
      background: $color-2;
    }
  }
}
.StoreVoucher::after {
  content: "";
  position: absolute;
  width: 27px;
  height: 27px;
  background-color: #fafafa;
  left: -16px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  border-right: 1.5px dashed #ff9800;
}
.StoreVoucher::before {
  content: "";
  position: absolute;
  width: 27px;
  height: 27px;
  background-color: #fafafa;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  border-left: 1.5px dashed #ff9800;
}
</style>
