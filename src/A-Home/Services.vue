<template>
  <div class="Shape_box">
    <v-container class="py-2 pb-1 px-2 px-md-1 px-lg-1 px-sm-1">
      <!-- <v-card class="mx-auto" style="margin-top: -20px; z-index: 8" height="30" width="80%">
      </v-card> -->
      <v-row no-gutters class="mt-2">
        <!-- grab  -->
        <v-col cols="">
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon size="30" color="#fff" class="grab elevation-3 pa-1">
                  mdi-taxi
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
              توصيل
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Thiqah Mall  -->
        <v-col cols="">
          <v-card
            :to="{
              name: 'ThiqahMallPage',
              params: { MallPage: 'ثقة مول' },
            }"
            color="transparent"
            elevation="0"
          >
            <v-row no-gutters justify="center" align="center">
              <v-icon size="30" color="#fff" class="Thiqah elevation-3 pa-1">
                mdi-shopping
              </v-icon>
            </v-row>
            <v-card-text style="height: 40px" class="text mt-2 px-1 pa-0">
              ثقة مول
            </v-card-text>
          </v-card>
        </v-col>
        <!-- real estate -->
        <v-col cols="">
          <v-card
            :to="{
              name: 'RealEstateMainPage',
              params: { RealEstate: ' ثقة عقارات ' },
            }"
            color="transparent"
            elevation="0"
          >
            <v-row no-gutters justify="center" align="center">
              <v-icon size="30" color="#fff" class="elevation-3 pa-1 RealSta">
                mdi-home-silo
              </v-icon>
            </v-row>
            <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
              عقارات
            </v-card-text>
          </v-card>
        </v-col>
        <!-- traveling -->
        <v-col cols="">
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon size="30" color="#eee" class="elevation-3 pa-1 TrEv">
                  mdi-image-filter-hdr
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
              سياحة
            </v-card-text>
          </v-card>
        </v-col>
        <!-- pro | eng  -->
        <v-col cols="">
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon size="30" color="#fff" class="service elevation-3 pa-1">
                  mdi-code-tags
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
              خدمات عامة
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mb-3">
        <!-- Food  -->
        <v-col>
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon
                  size="30"
                  color="#fff"
                  class="Restaurant elevation-3 pa-1"
                >
                  mdi-food-fork-drink
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text mt-2 px-1 pa-0">
              المطاعم
            </v-card-text>
          </v-card>
        </v-col>
        <!-- supermarket  -->
        <v-col>
          <v-card
            :to="{
              name: 'ThiqahSuperMarketPage',
              params: { MallPage: 'ثقة سوبر ماركت' },
            }"
            color="transparent"
            elevation="0"
          >
            <v-row no-gutters justify="center" align="center">
              <v-icon size="30" color="#fff" class="SuperMar elevation-3 pa-1">
                mdi-cart-variant
              </v-icon>
              <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
                سوبر ماركت
              </v-card-text>
            </v-row>
          </v-card>
        </v-col>
        <!-- ShowRoom Car -->
        <v-col>
          <v-card
            :to="{
              name: 'ShowroomCarPage',
              params: { ShowroomCar: ' معرض السيارات ' },
            }"
            color="transparent"
            elevation="0"
          >
            <v-row no-gutters justify="center" align="center">
              <v-icon size="30" color="#fff" class="elevation-3 Car pa-1">
                mdi-car
              </v-icon>
            </v-row>
            <v-card-text style="height: 40px" class="text px-1 mt-2 pa-0">
              السيارات
            </v-card-text>
          </v-card>
        </v-col>
        <!-- bill  -->
        <v-col>
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon size="30" color="#fff" class="pay elevation-3 pa-1">
                  mdi-contactless-payment
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text mt-2 pa-0 px-1">
              فاتورة & رصيد
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Help  -->
        <v-col>
          <v-card color="transparent" elevation="0">
            <v-row no-gutters justify="center" align="center">
              <v-badge overlap bottom color="white" content="قريباً">
                <v-icon size="30" color="#fff" class="Help elevation-3 pa-1">
                  mdi-help-rhombus
                </v-icon>
              </v-badge>
            </v-row>
            <v-card-text style="height: 40px" class="text mt-2 px-1 pa-0">
              مساعدة
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-img
        class=""
        max-height="300"
        src="https://cf.shopee.com.my/file/my-50009109-69f0041a5f226fe98cb3e5ac3eea4474_xxhdpi"
      >
      </v-img>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CarShape",
  components: {},
  data() {
    return {
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],

      Services: [
        {
          ServicId: 1,
          ServicText: "خدمة هندسية ",
          ServicIcon: "mdi-drawing-box",
          ServicColor: "red--text text--darken-1",
          Color: "red",
        },
        {
          ServicId: 2,
          ServicText: "خدمة برمجية",
          ServicIcon: "mdi-code-greater-than-or-equal",
          ServicColor: "blue--text text--darken-2",
        },
        {
          ServicId: 3,
          ServicText: " نتكفلك في البيع",
          ServicIcon: "mdi-file-sign",
          ServicColor: "",
        },

        {
          ServicId: 6,
          ServicText: "السفريات",
          ServicIcon: "mdi-earth",
          ServicColor: "deep-orange--text",
        },
      ],
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

.Shape_box {
  background-color: $color-background;
}
.text {
  font-family: $fontfamliy3 !important;
  font-size: 14px !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 12px !important;
  }
}
::v-deep span.v-badge__badge.white {
  font-family: $fontfamliy3 !important;
  height: 16px;
  font-size: 10px;
  color: #000;
  inset: calc(100% - 10px) calc(100% - 34.5px) auto auto !important;
}
// Icon color
.TrEv {
  border-radius: 10%;
  background: linear-gradient(
    140deg,
    rgba(230, 81, 0, 1) 15%,
    rgba(255, 183, 77, 1) 100%
  );
}
.RealSta {
  border-radius: 20%;
  background: linear-gradient(140deg, #2196f3 15%, #82b1ff 100%);
}
.Thiqah {
  border-radius: 20%;
  background: linear-gradient(140deg, #f44336 15%, #ff8a80 100%);
}
.grab {
  border-radius: 20%;
  background: linear-gradient(140deg, #00c853 15%, #b9f6ca 100%);
}
.service {
  border-radius: 20%;
  background: linear-gradient(140deg, #009688 15%, #a7ffeb 100%);
}
.Restaurant {
  border-radius: 20%;
  background: linear-gradient(140deg, #f57f17 15%, #fdd835 100%);
}
.SuperMar {
  border-radius: 20%;
  background: linear-gradient(140deg, #388e3c 15%, #00e676 100%);
}
.Car {
  border-radius: 20%;
  background: linear-gradient(140deg, #304ffe 15%, #42a5f5 100%);
}
.pay {
  border-radius: 20%;
  background: linear-gradient(140deg, #78909c 15%, #546e7a 100%);
}
.Help {
  border-radius: 20%;
  background: linear-gradient(140deg, #bdbdbd 15%, #757575 100%);
}
</style>
