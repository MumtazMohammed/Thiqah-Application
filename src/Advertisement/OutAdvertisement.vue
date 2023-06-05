<template>
  <v-sheet
    class="wrap"
    :color="
      model == 0
        ? '#F5F5F5'
        : '#eee' && model == 1
        ? '#d0dce5'
        : '#eee' && model == 2
        ? '#009688'
        : '#ffb702'
    "
  >
    <!-- advertisement  -->
    <v-container class="pa-2 pt-0 pa-md-0 pa-lg-0 pa-sm-1">
      <v-row no-gutters>
        <!-- TheCategories -->
        <v-col cols="2" class="hidden-sm-and-down">
          <!-- first List  -->
          <v-card tile flat color="grey lighten-5" height="100%">
            <v-menu
              allow-overflow
              tile
              class="elevation-0 pa-0"
              open-on-hover
              left
              center
              offset-x
              nudge-left="0"
              nudge-top="2"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list class="py-0" link color="transparent">
                  <v-list-item
                    link
                    v-bind="attrs"
                    v-on="on"
                    v-for="(item, index) in Categories"
                    :key="index"
                  >
                    <v-list-item-title class="link">
                      {{ item.tital }}
                    </v-list-item-title>
                    <v-icon>mdi-menu-left</v-icon>
                  </v-list-item>
                </v-list>
              </template>
              <!-- second List  -->
              <v-card
                style="overflow: hidden"
                outlined
                tile
                color="grey lighten-5"
                height="362"
                width="195"
              >
                <v-menu
                  flat
                  allow-overflow
                  tile
                  open-on-hover
                  left
                  nudge-left="1"
                  nudge-top="2"
                  center
                  offset-x
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-list class="py-0" link color="transparent">
                      <v-list-item
                        link
                        v-bind="attrs"
                        v-on="on"
                        v-for="(item, index) in Categories"
                        :key="index"
                      >
                        <v-list-item-title class="link">
                          {{ item.tital }}
                        </v-list-item-title>
                        <v-icon>mdi-menu-left</v-icon>
                      </v-list-item>
                    </v-list>
                  </template>
                  <!-- third List  -->
                  <v-card
                    outlined
                    color="grey lighten-5"
                    tile
                    height="363"
                    width="195"
                  >
                    <v-list class="py-0" link color="transparent">
                      <v-list-item
                        link
                        v-bind="attrs"
                        v-on="on"
                        v-for="(item, index) in Categories"
                        :key="index"
                      >
                        <v-list-item-title class="link">
                          {{ item.tital }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-card>
            </v-menu>
          </v-card>
        </v-col>
        <!-- TheAdv -->
        <v-col cols="12" md="10" lg="10" xl="10" class="pa-0">
          <!-- <swiper
            v-model="model"
            class="swiper hidden-sm-and-down"
            :options="swiperOption"
          >
            <swiper-slide v-model="model" v-for="(item, i) in items" :key="i">
              <v-card
                style="position: absolute; right: 0; left: 0; width: 100%"
                width="100%"
                height="100%"
                :color="item.color"
                tile
                flat
              >
              </v-card>
              <v-img
                contain
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
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
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
          <v-carousel
            delimiter-icon="mdi-circle-medium"
            :interval="4000"
            cycle
            height="auto"
            v-model="model"
            :show-arrows="false"
            class="hidden-sm-and-down"
          >
            <v-carousel-item v-for="(item, i) in items" :key="i">
              <v-img contain max-height="360" :src="item.src">
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  no-gutters
                >
                  <span class="adv-text"> إعلان ({{ i + 1 }}) </span>
                </v-row>
              </v-img>
            </v-carousel-item>
          </v-carousel>
          <swiper class="swiper hidden-md-and-up" :options="swiperOption">
            <swiper-slide v-for="(item, i) in items" :key="i">
              <v-card
                style="position: absolute"
                width="100%"
                height="100%"
                :color="item.color"
                tile
                flat
              >
              </v-card>
              <v-img contain max-height="360" :src="item.src">
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
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </v-col>
      </v-row>
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
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
      swiper: 0,
      itemss: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      Categories: [
        {
          tital: "كمبيوتر وملحقاتها",
        },
        {
          tital: "الجولات والأجهزة اللوحية ",
        },
        {
          tital: "الأزياء",
        },
        {
          tital: "الصحة & الجمال",
        },
        {
          tital: "اثاث منزلية & مكتبية ",
        },
        {
          tital: "ألعاب",
        },
        {
          tital: " البقالة",
        },
        {
          tital: " منتجات الأطفال",
        },
        {
          tital: " البناء والكهرباء",
        },
        {
          tital: " القرطاسية ",
        },
        {
          tital: "المركبات",
        },
        {
          tital: " عقارات",
        },
      ],
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
        effect: "fade",
        spaceBetween: 10,
        autoplay: {
          delay: 5500,
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
.wrap {
  // background-color: #e64a19 !important;
  position: relative;
  @media (max-width: 960px) {
    background-color: $color-background !important;
  }
}
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
::v-deep .v-carousel__controls {
  background-color: transparent;
}
::v-deep .v-btn--icon.v-size--small {
  width: 20px;
  height: 20px;
  margin: 0 3px;
}
::v-deep i.v-icon.notranslate.mdi.mdi-circle-medium.theme--dark {
  font-size: 25px !important;
  opacity: 1 !important;
}
::v-deep .theme--dark.v-btn--active:before {
  background-color: $color-2;
  opacity: 1 !important;
}
::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 7px !important;
}
::v-deep .container.pa-2.pa-md-0.pa-lg-0.pa-sm-1 {
  @media (max-width: 960px) {
    padding-bottom: 0 !important;
  }
}
::v-deep .v-image.v-responsive.theme--light {
  height: 360px !important;
  @media (max-width: 600px) {
    height: 200px !important;
  }
}
.AdvertisementTow {
  height: 330px !important;
  @media (max-width: 600px) {
    border-radius: 0px !important;
    height: 200px !important;
  }
}
::v-deep.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
  bottom: 0;
}
::v-deep.v-menu__content.theme--light.rounded-0.menuable__content__active {
  box-shadow: 0 0 0 0 !important;
}
::v-deep .v-list-item {
  min-height: 30px;
}
::v-deep .v-list-item:hover .link {
  // font-size: 14px;
  color: $color-2;
}
::v-deep .v-list-item:hover .v-icon {
  color: $color-2;
}
.link {
  font-family: $fontfamliy3;
  font-size: 13px;
}
.adv-text {
  font-family: $fontfamliy3;
  font-size: 20px;
  background-color: #eee;
  padding: 3px 14px;
  border-radius: 10px;
  color: #424242;
}
</style>
