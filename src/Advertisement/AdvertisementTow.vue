<template>
  <v-sheet color="transparent" class="my-2">
    <!-- advertisement  -->
    <v-container class="pa-0 pa-md-0 pa-lg-0 pa-sm-1">
      <!-- TheAdv -->
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, i) in items" :key="i">
          <v-img
            :style="`background-color:${item.color} ;`"
            contain
            max-height="360"
            :src="item.src"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              no-gutters
            >
              <span class="adv-text"> إعلان ({{ i + 1 }}) </span>
            </v-row>
          </v-img>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </v-container>
  </v-sheet>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "AdvertisementTow",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
  data() {
    return {
      model: 0,
      items: [
        {
          src: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
          color: "#F5F5F5",
        },
        {
          src: "https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_1280.png",
          color: "#d0dce5",
        },
        {
          src: "https://cdn.pixabay.com/photo/2018/01/04/11/51/design-3060480_1280.jpg",
          color: "#009688",
        },
        {
          src: "https://www.shutterstock.com/image-photo/contemporary-art-collage-stylish-man-600w-2159890271.jpg",
          color: "#ffb702",
        },
      ],
      swiperOption: {
        initialSlide: 0,
        freeMode: false,
        effect: "card",
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        },
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          471: {
            slidesPerView: 1,
            slidesPerGroup: 1,
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
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "@/scss/virables";
@import "@/scss/mixin";

.swiper {
  height: 360px !important;
  @media (max-width: 600px) {
    height: 200px !important;
  }

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
    background-color: $color-2;
  }
  ::v-deep.swiper-container {
    @media (max-width: 600px) {
      padding-right: 5px;
      padding-left: 5px;
    }
  }
}
::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 7px !important;
}

::v-deep .v-image.v-responsive.theme--light {
  height: 360px !important;
  @media (max-width: 600px) {
    height: 200px !important;
  }
}
.adv-text {
  font-family: $fontfamliy3;
  font-size: 20px;
  background-color: #fc624d;
  padding: 42px 30px;
  border-radius: 50%;
  color: #f3f3f3;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 17px;
    padding: 42px 30px;
  }
}
</style>
