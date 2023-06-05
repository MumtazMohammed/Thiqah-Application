<template>
  <div class="car-info my-2">
    <div class="store-col">
      <v-sheet class="store-card hidden-sm-and-down" width="100%">
        <v-list-item link to="/SellerStorePage">
          <v-list-item-avatar size="45px" color="transparent">
            <img
              src="../assets/showroom/orignal-1615322218-744.png"
              alt="alt"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-truncate store-name">
              تفاصيل
            </v-list-item-title>
            <v-list-item-subtitle class="owner-btns mt-1">
              رؤيـة الـمـتـجر
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </div>
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-sheet tile flat class="detail-card pa-3">
      <v-card-text class="tital text--primary pa-0 mb-3">
        عـنـوان قصير عن المنتج لا يتجاوز 2 أسطر في الشاشة الصغيره 1 سطر في
        الشاشة الكبيره
      </v-card-text>
      <v-card-text class="pa-0 text text--secondary">
        مثال :
        <br />
        <br />
        الشكل والمبنى، من المهم أن يكون الموقع جاذبا من الناحية البصرية فهو
        يساعد المتصفح على فهم المحتوى أكثر وبالإضافة إلى الألوان التي ستجعل
        موقعك ذا إحساس عالي. التنوين، وهو على ثلاث أشكال: تنوين ضم وتنوين فتح
        وتنوين كسر هذا نص عشوائي الشكل الشكل والمبنى، من المهم أن يكون الموقع
        جاذبا من الناحية البصرية فهو يساعد الشكل والمبنى، من المهم أن يكون
        الموقع جاذبا من الناحية البصرية فهو يساعد المتصفح على فهم المحتوى أكثر
        وبالإضافة إلى الألوان التي ستجعل موقعك ذا إحساس عالي. التنوين، وهو على
        ثلاث أشكال: تنوين ضم وتنوين فتح وتنوين كسر هذا نص عشوائي الشكل الشكل
        والمبنى، من المهم أن يكون الموقع جاذبا من الناحية البصرية فهو يساعد
        <br />
        <br />
        <br />
        المتصفح على فهم المحتوى أكثر وبالإضافة إلى الألوان التي ستجعل موقعك ذا
        إحساس عالي. التنوين، وهو على ثلاث أشكال: تنوين ضم وتنوين فتح وتنوين كسر
        هذا نص عشوائي الشكل
        <br />
        <br />
        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" class="pa-1">
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-sheet>

    <!-- card discrption  -->
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";

export default {
  name: "CarDetails",
  components: {},
  data() {
    return {
      SeeMore: null,
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  // this computed to call the item by it info
  computed: {
    getCarInfo() {
      let Carinformation = "";
      for (let i = 0; i < this.GetCarData.length; i++) {
        if (this.GetCarData[i].id == this.carId) {
          Carinformation = this.GetCarData[i];
          break;
        }
      }
      return Carinformation;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.car-info {
  background-color: $color-background;
}
.tital {
  font-family: $fontfamliy3;
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
  line-height: 1.5;

  pointer-events: none;
  @media (max-width: 400px) {
    font-size: 14px;
  }
  // store {
  //   color: $color-2;
  // }
}

.store-name {
  letter-spacing: 0px !important;
  font-family: $fontfamliy3;
  pointer-events: none;
  font-size: 15px !important;
  font-weight: 600;
}
.owner-btns {
  letter-spacing: 0 !important;
  font-family: $fontfamliy3;
  font-weight: 600;
  color: #039be5 !important;
  font-size: 13px !important;
  // padding: 10px 15px !important;
  @media (max-width: 600px) {
    font-size: 13px !important;
  }
}

::v-deep .v-avatar.transparent {
  @media (max-width: 600px) {
    height: 50px !important;
    min-width: 50px !important;
    width: 50px !important;
  }
  @media (max-width: 500px) {
    height: 40px !important;
    min-width: 40px !important;
    width: 40px !important;
  }
}

.detail-card {
  overflow: hidden;
  .text {
    position: relative;
    font-family: $fontfamliy3;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
    overflow: hidden;
    pointer-events: none;
    background-color: transparent !important;
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
}
</style>
