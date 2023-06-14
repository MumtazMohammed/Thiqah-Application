<template>
  <div class="Store-Voucher white pa-2" style="overflow: hidden">
    <v-card-title class="titel pa-2"> قسائم المتجر </v-card-title>

    <v-row no-gutters>
      <v-col
        v-for="i in 2"
        :key="i"
        class="pa-2 px-1"
        cols="6"
        md="3"
        sm="3"
        lg="3"
      >
        <v-card
          color="deep-orange lighten-2"
          flat
          rounded="lg"
          class="py-1 px-3 overflow-hidden StoreVoucher"
        >
          <v-row no-gutters justify="space-between" class="main">
            <v-col class="pr-1" cols="12" md="auto" sm="auto" lg="auto">
              <v-card-text class="pa-0 text">
                <span class="mx-1 black--text text--accent-2">
                  <v-icon color="white" size="16">mdi-percent</v-icon>
                  20
                </span>
                خصم
              </v-card-text>
              <v-card-text class="pa-0 text">
                أنفق
                <span class="mx-1">
                  52<v-icon color="white" left size="20">
                    mdi-currency-rial
                  </v-icon>
                </span>
                كحد أدنى
              </v-card-text>
              <v-card-text class="pa-0 text">
                متاح حتى
                <span>10/2/2020</span>
              </v-card-text>
            </v-col>
            <v-col
              class="pa-1 ma-auto text-center"
              cols="12"
              md="auto"
              sm="auto"
              lg="auto"
            >
              <v-btn depressed class="btn deep-orange lighten-4" small>
                أحصل عليها
              </v-btn>
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
  overflow: hidden;
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
    color: $fontcolorsm !important;
    font-weight: 600 !important;
    line-height: 1.4;
    font-size: 12px !important;
    @media (max-width: 750px) {
      font-size: 13px !important;
    }
    span {
      font-family: sans-serif !important;
      font-size: 17px;
      font-weight: 600;
      color: $fontcolorsm !important;
      @media (max-width: 600px) {
        font-size: 15px;
      }
    }
  }
  .btn {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    font-size: 12px !important;
    margin: 0 auto !important;
    font-weight: 600;
    // background: linear-gradient(90deg, #FFAB91 20%, #fff 100%);
    // background-color: $color-2 !important;
    @media (max-width: 700px) {
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
  width: 25px;
  height: 25px;
  background-color: #fff;
  left: -17px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
}
.StoreVoucher::before {
  content: "";
  position: absolute;
  background-color: #fff;
  right: -17px;
  top: 50%;
  width: 25px;
  height: 25px;
  transform: translateY(-50%);
  border-radius: 50%;
}
</style>
