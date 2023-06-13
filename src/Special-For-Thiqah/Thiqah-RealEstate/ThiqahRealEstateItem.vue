<template>
  <div class="BestOffer">
    <v-row no-gutters>
      <v-col class="" cols="12">
        <v-card-title class="text-all">
          <span class="ml-1">
            {{ VerifiedCar.length }}
          </span>
          عقار متاح
        </v-card-title>
      </v-col>
      <v-col
        class="pa-2"
        cols="12"
        md="6"
        lg="6"
        sm="6"
        v-for="(Product, index) in getCarInfo"
        :key="index"
      >
        <v-card
          :to="{
            name: 'RealEstateItemDetail',
            params: {
              carName: Product.name,
              carShape: Product.Shape,
              carId: Product.id,
              Company: Product.folder,
            },
          }"
          :elevation="hover ? 3 : 0"
          width="100%"
          rounded="sm"
          class="overflow-hidden"
        >
          <v-row no-gutters>
            <v-col cols="4" class="my-auto text-center">
              <v-img
                height="170"
                src="https://picsum.photos/510/300?random"
                lazy-src="https://picsum.photos/510/300?random"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-list-item dense three-line class="pl-1">
                    <v-list-item-content class="pb-0">
                      <v-list-item-title class="card-text">
                        المنطقة الشرقية حي اليرموك، المنطقة الشرقية حي اليرموك،
                        المنطقة الشرقية حي اليرموك،
                      </v-list-item-title>
                      <v-list-item-subtitle class="card-text mt-1">
                        لمنطقة الشرقية حي اليرموك، الجبيل، المنطقة الشرقية حي
                        اليرموك، الجبيل، المنطقة الشرقية حي اليرموك، الجبيل،
                        المنطقة الشرقية
                      </v-list-item-subtitle>
                      <v-list-item-title class="Price mt-1">
                        {{ Product.payment }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item dense three-line class="pl-1">
                    <v-list-item-content
                      style="align-content: space-around"
                      class="py-0"
                    >
                      <v-list-item-action
                        class="ma-0 mt-1"
                        style="flex-direction: row; align-content: space-around"
                      >
                        <!-- room  -->
                        <div>
                          <v-icon size="20" color="grey darken-3">
                            mdi-bed
                          </v-icon>
                          <span class="span mr-2">3</span>
                        </div>
                        <!-- bathroom  -->
                        <div>
                          <v-icon size="20" color="grey darken-3">
                            mdi-shower
                          </v-icon>
                          <span class="span mr-2">1</span>
                        </div>
                        <!-- size  -->
                        <div>
                          <v-icon size="20" color="grey darken-3">
                            mdi-wall
                          </v-icon>
                          <span class="span mr-2">132 م/ر</span>
                        </div>
                      </v-list-item-action>
                      <v-list-item-action
                        class="ma-0"
                        style="
                          flex-direction: row;
                          justify-content: start;
                          align-items: center;
                        "
                      >
                        <v-chip-group>
                          <v-chip
                            style="font-size: 14px"
                            small
                            class="text-all mr-0"
                            color="blue-grey lighten-5"
                            text-color="grey darken-2"
                          >
                            عمارة
                          </v-chip>
                          <v-chip
                            style="font-size: 14px"
                            small
                            class="text-all"
                            color="blue-grey lighten-5"
                            text-color="grey darken-2"
                          >
                            غير مفروشة
                          </v-chip>
                        </v-chip-group>
                        <v-spacer></v-spacer>
                        <v-avatar size="35" color="blue-grey lighten-5">
                          <!-- <img src="src" alt="alt" /> -->
                        </v-avatar>
                      </v-list-item-action>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>

                <!-- <v-col cols="12" class="pt-">
                  <v-card-text class="Price pa-2 py-1 text-truncate">
                    {{ Product.payment }}
                    <small class="text-truncate">ريال</small>
                  </v-card-text>
                </v-col> -->
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center pa-2">
        <v-btn outlined color="#fc624d" width="300" class="seeMoreBtn">
          تـحـمـيـل الـمـزيـد
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerifiedCar from "@/data-json/All-Car.json";
import CarType from "@/data-json/CarType.json";

export default {
  name: "BestOffer",
  components: {},
  data() {
    return {
      VerifiedCar,
      CarType,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
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
  .card-text {
    font-family: $fontfamliy3 !important;
    // color: $fontcolor !important;
    letter-spacing: 0 !important;
    font-size: 15px !important;
    // display: -webkit-box;
    // -webkit-line-clamp: 2;
    // -webkit-box-orient: vertical;
    // overflow: hidden;
    // line-height: 1.5;
  }
  .tital {
    clip-path: polygon(7% 0, 100% 0%, 100% 100%, 0 100%);
    background-color: #ffffff;
    width: fit-content;
    font-family: $fontfamliy3;
    font-size: 18px;
    color: $fontcolor !important;
    letter-spacing: 0px !important;
    pointer-events: none;
    @media (max-width: 700px) {
      font-size: 14px;
    }
    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
}

.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
}
.span {
  font-family: $fontfamliy3;
  font-size: 15px;
}
::v-deep button.seeMoreBtn.v-btn.v-btn--outlined.theme--light.v-size--default {
  letter-spacing: 0 !important;
  font-size: 18px;
  font-family: $fontfamliy3 !important;
}
// Products
.Price {
  font-size: 16px !important;
  color: $fontcolor;
  font-weight: 700 !important;
  font-family: sans-serif !important;
}
</style>
