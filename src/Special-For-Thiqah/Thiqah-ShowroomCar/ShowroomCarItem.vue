<template>
  <div class="BestOffer">
    <v-row no-gutters>
      <v-col cols="12" style="margin-top: -1px">
        <v-tabs
          center-active
          class="overflow-hidden rounded-b"
          :show-arrows="false"
          grow
          height="100"
          icons-and-text
          background-color="deep-orange lighten-5"
          hide-slider
        >
          <v-tab class="text-all" v-for="(Type, i) in CarType" :key="i">
            {{ Type.carName }}
            <!-- <v-icon> {{ Category.icon }} </v-icon> -->
            <v-avatar size="50" color="white">
              <v-img
                contain
                :src="getimageUrl(Type.folder, Type.carLogo)"
                :alt="getimageUrl(Type.folder, Type.carLogo)"
              />
            </v-avatar>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <div class="">
      <v-sheet class="" color="transparent">
        <v-row no-gutters>
          <v-col class="" cols="12">
            <v-card-title class="text-all">
              <span>
                {{ VerifiedCar.length }}
              </span>
              سيارة متاحه
            </v-card-title>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="4"
            lg="2"
            class="pa-2"
            v-for="Product in VerifiedCar"
            :key="Product.id"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :to="{
                  name: 'ShowroomCarItemDetail',
                  params: {
                    carName: Product.name,
                    carShape: Product.Shape,
                    carId: Product.id,
                    Company: Product.folder,
                  },
                }"
                :elevation="hover ? 3 : 0"
                min-height="290"
                width="100%"
                rounded="lg"
                style="position: relative"
              >
                <h1 class="ribbon">
                  {{ Product.payment }}
                  <v-icon color="white" size="19"> mdi-currency-rial </v-icon>
                </h1>
                <v-card
                  flat
                  rounded="b-0 t-lg"
                  style="overflow: hidden; height: 150px; width: 100%"
                >
                  <v-img
                    height="150"
                    :src="getimageUrl(Product.folder, Product.image)"
                  ></v-img>
                </v-card>

                <!--  product name  -->
                <v-card-text class="card-text pb-1 pa-2">
                  التيما 2020 استاندر للمستخدم الي يبي شي بدون اعطال واخو الجديد
                  يخدمه
                </v-card-text>
                <!--  product name  -->
                <v-card-text class="text text-truncate pa-2">
                  {{ Product.company }} - {{ Product.name }} -
                  {{ Product.modle }}
                </v-card-text>
                <!-- <strong class="PriceAfter py-1 pa-2 text-truncate">
                {{ Product.payment }}
                <v-icon color="grey darken-3" size="19">
                  mdi-currency-rial
                </v-icon>
              </strong> -->
                <!-- location -->
                <v-row
                  class="pa-2"
                  no-gutters
                  align="center"
                  justify="space-between"
                >
                  <div class="text d-flex align-center text-truncate">
                    <v-icon size="18" color="grey darken-1" right>
                      mdi-speedometer
                    </v-icon>
                    <span>
                      {{ Product.kilometer }}
                    </span>
                  </div>
                  <span class="text text-truncate">
                    {{ Product.location }}
                  </span>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" class="text-center pa-2">
            <v-btn outlined color="#fc624d" width="300" class="seeMoreBtn">
              تـحـمـيـل الـمـزيـد
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import VerifiedCar from "@/data-json/All-Car.json";
import CarType from "@/data-json/CarType.json";

export default {
  name: "ShowroomCarItem",
  data() {
    return {
      VerifiedCar,
      CarType,
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
            slidesPerView: 4,
            slidesPerGroup: 4,
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
  background-color: #fafafa;
}
.text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  line-height: 1.6;
  font-size: 14px !important;
}
.card-text {
  font-family: $fontfamliy3 !important;
  color: $fontcolor !important;
  letter-spacing: 0 !important;
  font-weight: 700;
  font-size: 13px !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 617px) {
    font-size: 13px !important;
  }
}

.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  color: $fontcolor !important;

  span {
    font-family: sans-serif;
    margin-left: 4px;
  }
}
::v-deep button.seeMoreBtn.v-btn.v-btn--outlined.theme--light.v-size--default {
  letter-spacing: 0 !important;
  font-size: 18px ;
  font-family: $fontfamliy3 !important;
}
.PriceAfter {
  font-size: 17px !important;
  color: $fontcolor;
  font-weight: 600 !important;
  font-family: sans-serif !important;
  display: block;
}
::v-deep .v-slide-group__prev.v-slide-group__prev--disabled {
  display: none !important;
}
::v-deep .v-slide-group__next.v-slide-group__next--disabled {
  display: none !important;
}
.ribbon {
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 1;
  padding: 0 5px;
  min-width: 60px;
  text-align: center;
  font-size: 17px !important;
  color: $fontcolorsm;
  font-weight: 600 !important;
  font-family: sans-serif !important;
  letter-spacing: 0 !important;
  border-radius: 2px 0px 0px 2px !important;
  background: linear-gradient(140deg, #fc624d 0%, #ff8a65 100%);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.ribbon:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.5em;
  height: 100%;
  padding: 0 0 32px 0px !important;
  top: 0;
  right: -0.51em;
  background: #ff8a65;
  border-radius: 0px 5px 5px 0px !important;
}

.ribbon:after {
  position: absolute;
  content: "";
  display: block;
  width: 0.313em;
  height: 0.313em;
  background: rgba(0, 0, 0, 0.35);
  bottom: -0.313em;
  right: -0.3em;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>
