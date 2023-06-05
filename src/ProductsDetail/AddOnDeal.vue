<template>
  <div class="DailyOffer my-2">
    <v-container class="pa-0">
      <p class="ma-0 pa-2 d-flex font-weight-bold tital">
        <v-icon right size="28" color="amber accent-1">mdi-tag</v-icon>
        صفقة مع البيعة
      </p>
      <!-- big screen  -->
      <v-sheet
        :height="SeeMore ? `auto` : `215`"
        class="overflow-y-hidden transparent"
      >
        <v-row no-gutters class="pa-2">
          <v-col cols="6" lg="2" md="2" sm="3" class="pa-2 py-1">
            <v-card flat width="100%" style="overflow: hidden">
              <v-img
                height="80"
                src="https://picsum.photos/500/300?image"
                lazy-src="https://picsum.photos/500/300?image"
              >
              </v-img>
              <!-- Product Img and name  -->
              <v-card-text
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                "
                class="card-text py-1 pb-0 pa-1"
              >
                من المهم أن يكون الموقع جاذبا من الناحية البصرية
              </v-card-text>
              <v-row no-gutters align="center">
                <!-- Product price -->
                <v-col cols="12">
                  <v-row no-gutters align="center" justify="space-between">
                    <small
                      class="grey--text text-decoration-line-through text-center pa-1"
                    >
                      551516
                      <small class="text-truncate">ريال</small>
                    </small>
                    <strong
                      style="color: #fc624d"
                      class="pa-1 text-center text-truncate"
                    >
                      235120
                      <small class="text-truncate">ريال</small>
                    </strong>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <!-- select product -->
                  <v-card-actions class="pt-0 justify-space-between">
                    <v-checkbox
                      v-model="abled"
                      hide-details
                      readonly
                      class="shrink mr-2 mt-0"
                      dense
                    ></v-checkbox>
                    <v-btn
                      depressed
                      text
                      tile
                      small
                      class="text-for-all"
                      color="grey darken-2"
                    >
                      تحديد الطلب
                      <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="2" class="ma-auto text-center">
            <v-icon color="deep-orange">mdi-plus</v-icon>
          </v-col>
          <v-col
            cols="6"
            lg="2"
            md="2"
            sm="3"
            v-for="(Product, index) in getCarInfo"
            :key="index"
            class="pa-2 py-1"
          >
            <v-card flat width="100%" style="overflow: hidden">
              <v-img
                height="80"
                :src="getimageUrl(Product.folder, Product.image)"
                :lazy="getimageUrl(Product.folder, Product.image)"
              >
              </v-img>
              <!-- Product Img and name  -->
              <v-card-text
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                "
                class="card-text py-1 pb-0 pa-1"
              >
                من المهم أن يكون الموقع جاذبا من الناحية البصرية
              </v-card-text>
              <v-row no-gutters align="center">
                <!-- Product price -->
                <v-col cols="12">
                  <v-row no-gutters align="center" justify="space-between">
                    <small
                      class="grey--text text-decoration-line-through text-center pa-1"
                    >
                      551516
                      <small class="text-truncate">ريال</small>
                    </small>
                    <strong
                      style="color: #fc624d"
                      class="pa-1 text-center text-truncate"
                    >
                      235120
                      <small class="text-truncate">ريال</small>
                    </strong>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <!-- select product -->
                  <v-card-actions class="pt-0 justify-space-between">
                    <v-checkbox
                      v-model="enabled"
                      hide-details
                      class="shrink mr-2 mt-0"
                      dense
                    ></v-checkbox>
                    <v-btn
                      depressed
                      text
                      tile
                      small
                      class="text-for-all"
                      color="grey darken-2"
                    >
                      تحديد الطلب
                      <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!-- <v-spacer></v-spacer> -->
        </v-row>
      </v-sheet>

      <!-- see more btn  -->
      <v-col class="text-center pa-0">
        <a
          v-if="!SeeMore"
          class="see-more grey--text text--darken-2"
          @click="SeeMore = !SeeMore"
        >
          رؤية المزيد (<span>{{ VerifiedCar.length }}</span
          >)
        </a>
        <a
          v-else
          class="see-more grey--text text--darken-2"
          @click="SeeMore = !SeeMore"
        >
          رؤية أقل
        </a>
      </v-col>
      <!-- total price and how much u save  -->
      <v-col cols="12" class="pa-2 col-price">
        <v-sheet color="amber lighten-5">
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <!-- price total and price befor  -->
              <v-card-text class="pa-1 total-price">
                المجموع :
                <span class="pa-0 after-price">75 ريال</span>
              </v-card-text>
              <!-- save price  -->
              <v-card-text class="pa-1 total-price">
                موفر :
                <span class="pa-0 save-price">75 ريال</span>
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="pl-2">
              <!-- btn add to cart  -->
              <v-btn small depressed class="red text-for-all" dark>
                إضافة إلى السلة
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import VerifiedCar from "../data-json/All-Car.json";
export default {
  name: "SameWonerProducts",
  components: {},
  data() {
    return {
      dialog: false,
      VerifiedCar,
      SeeMore: false,
      abled: true,
      enabled: ["0", "1", "2", "3", "4", "5", "6"],
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
    };
  },
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
.DailyOffer {
  width: 100%;
  min-height: 20vh;
  background-color: #f5f5f5;
  overflow: hidden;

  .tital {
    font-family: $fontfamliy3;
    font-size: 22px;
    color: $color-2;
    pointer-events: none;

    @media (max-width: 470px) {
      font-size: 18px;
    }
    @media (max-width: 350px) {
      font-size: 17px;
    }
  }
}
.see-more {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 14px;
  span {
    font-family: sans-serif;
    color: $color-2;
  }
}
.text-for-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
}
.text-price {
  font-family: sans-serif !important;
  letter-spacing: 0;
  font-size: 15px;
}
.how-many-percent {
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  background-color: #ef5350;
  padding: 0px 3px 0px 8px;
  color: white;
  font-size: 14px !important;
  @media (max-width: 600px) {
    // clip-path: none !important;
    font-size: 13px !important;
    // padding: 0px 2px !important;
    // border-radius: 3px !important;
  }
}
.befor-price {
  font-family: sans-serif !important;
  font-size: 14px !important;
  font-weight: 700;
  margin: 0 2px;
  text-decoration: line-through;
  color: grey !important;
}
.after-price {
  font-family: sans-serif !important;
  font-size: 17px !important;
  font-weight: 700 !important;
  margin: 0 2px;
  color: $fontcolor !important;
  @media (max-width: 600px) {
    font-size: 15px !important;
  }
}
.save-price {
  font-family: sans-serif !important;
  font-size: 17px !important;
  font-weight: 700 !important;
  margin: 0 2px;
  color: $color-2 !important;
  @media (max-width: 600px) {
    font-size: 15px !important;
  }
}
.total-price {
  font-family: $fontfamliy3 !important;
  font-size: 16px;
  color: $fontcolor !important;
  pointer-events: none;
  display: block;
  @media (max-width: 600px) {
    font-size: 14px;
  }
}

::v-deep .col-price.pa-2.col.col-2 {
  flex: 0 0 18%;
  max-width: 18%;
}
// Products
.card-text {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 14px;
  color: $fontcolor !important;
  @media (max-width: 500px) {
    font-size: 13px !important;
  }
}

::v-deep .v-dialog.v-dialog--active.v-dialog--persistent {
  margin: 5px;
  // height: 95% !important;
  border-radius: 0 !important;
}
::v-deep .v-input--selection-controls__input {
  margin: 0px !important;
}
</style>
