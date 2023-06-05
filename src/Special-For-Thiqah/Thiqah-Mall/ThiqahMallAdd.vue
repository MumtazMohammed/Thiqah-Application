<template>
  <div class="ThqahMall">
    <v-sheet class="overflow-hidden">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, i) in items" :key="i">
          <v-img
            :style="item.color"
            aspect-ratio="2.2"
            contain
            :src="item.src"
            :lazy-src="item.src"
          >
          </v-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- <v-sheet width="100%" color="">
        <v-row no-gutters align="center" justify="center">
          <v-col  v-for="(guarantee, i) in guarantees" :key="i">
            <v-list-item one-line class="">
              <v-icon
                color="white"
                class="red lighten-1"
                style="border-radius: 50%; padding: 4px"
              >
                {{ guarantee.icon }}
              </v-icon>
              <v-list-item-content class="py-0 px-2">
                <v-list-item-title class="text-all">
                  {{ guarantee.title }}
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-sheet> -->
    </v-sheet>
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
      guarantees: [
        {
          title: " 100٪ أصلي ",
          // description: " ضمان أصلي أو أسترد موالك ",
          icon: " mdi-shield-check",
        },
        {
          title: " 15 يوم للإرجاع * ",
          // description: " إسترجاع مجاني بدون تكلفة ",
          icon: " mdi-arrow-u-left-top",
        },
        {
          title: " خصم 20% ",
          // description: " خصم 20% على التوصيل ",
          icon: " mdi-truck",
        },
      ],
      items: [
        {
          src: "https://cf.shopee.com.my/file/my-50009109-bd6483779d95f8a15e68e48de1947af9",
          color: "background-color: #dadbdd;",
        },
        {
          src: "https://cf.shopee.com.my/file/my-50009109-5db86ad6b92076e86517bdbf6bd2b3a0",
          color: "background-color: rgb(18 38 169);",
        },
        {
          src: "https://cf.shopee.com.my/file/my-50009109-420d220bf887c9d1164a376e07ecc69b",
          color: "background-color: #b40009;",
        },
        {
          src: "https://icms-image.slatic.net/images/ims-web/2f133fd9-43fe-4653-90c5-30cdac32bf87.jpg",
          color: "background-color: #2c0500;",
        },
      ],
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
        slidesPerView: 1,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
.ThqahMall {
  .swiper {
    // height: 500px !important;

    .swiper-pagination::v-deep .swiper-pagination-bullet {
      width: 10px !important;
      border-radius: 50%;
      height: 10px;
      margin: 0 5px;
      background-color: #eee;
      opacity: 1;

      @media (max-width: 600px) {
        height: 6px;
        width: 6px !important;
      }
    }
    .swiper-pagination::v-deep .swiper-pagination-bullet-active {
      background-color: #ef5350;
    }
    ::v-deep.swiper-container {
      @media (max-width: 600px) {
        padding-right: 5px;
        padding-left: 5px;
      }
    }
  }
  ::v-deep .swiper-wrapper {
    align-items: center;
  }
  ::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px !important;
  }
}
.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  line-height: 1.4 !important;
  @media (max-width: 610px) {
    font-size: 14px !important;
  }
  @media (max-width: 350px) {
    font-size: 13px !important;
  }
}

::v-deep .v-list-item.theme--dark {
  min-height: 55px !important;
}
::v-deep .v-icon.v-icon {
  @media (max-width: 610px) {
    font-size: 20px !important;
  }
}
</style>
