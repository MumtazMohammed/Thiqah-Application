<template>
  <!-- this component will be under the image  -->
  <div class="ContactSeller">
    <!-- here the product name  -->
    <v-row no-gutters>
      <v-col class="pa-2 py-1">
        <p class="ProductName ma-0">
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
        </p>
      </v-col>
      <span small class="discount-tag ml-1 px-1">
        <span>25%</span>
      </span>
    </v-row>
    <!-- here the Price Info   -->
    <v-row no-gutters align="center" class="pa-2">
      <p class="ma-0 price">
        {{ getCarInfo.payment }}
        <v-icon color="grey " size="23">mdi-currency-rial</v-icon>
      </p>
      <span class="mx-2 grey--text">|</span>
      <p class="ma-0 price">
        {{ getCarInfo.payment }}
        <v-icon color="grey " size="23">mdi-currency-rial</v-icon>
      </p>
      <v-spacer></v-spacer>
      <p class="ma-0 if-discount grey--text text--lighten-1">
        {{ getCarInfo.payment }}
        <v-icon color="grey " size="23">mdi-currency-rial</v-icon>
      </p>
    </v-row>
    <!-- here the Guarantee    -->
    <v-row no-gutters align="center" class="px-1">
      <v-sheet width="100%" color="grey lighten-3">
        <!-- product Guarantee  -->
        <v-list-item class="px-1 py-0">
          <v-icon color="red " size="23">mdi-shopping</v-icon>
          <v-list-item-content class="pa-0 pr-2">
            <v-list-item-title class="Guarantee-text">
              ثقة مول
            </v-list-item-title>
            <v-list-item-subtitle class="Guarantee-text-tow">
              بائع موثوق ومرخص
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- product Guarantee  -->
        <v-list-item class="px-1 py-0">
          <v-icon color="red" size="23"> mdi-shield-check </v-icon>
          <v-list-item-content class="pa-0 pr-2">
            <v-list-item-title class="Guarantee-text">
              100٪ أصلي
            </v-list-item-title>
            <v-list-item-subtitle class="Guarantee-text-tow">
              ضمان حقيقي أو استرد أموالك
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- product Guarantee  -->
        <v-list-item class="px-1 py-0">
          <v-icon color="red" size="23"> mdi-chevron-triple-down </v-icon>
          <v-list-item-content class="pa-0 pr-2">
            <v-list-item-title class="Guarantee-text">
              أقل سعر مضمون
              <v-icon
                color="amber darken-2"
                style="transform: scaleX(-1)"
                size="19"
              >
                mdi-help-circle-outline
              </v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="Guarantee-text-tow">
              أوجد خيار أرخص ؟ ستحصل عملات مجانية
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </v-row>
    <!-- here are the rating and sales Info   -->
    <v-row align="center" no-gutters class="pa-2">
      <p class="ma-0">التقيمات</p>
      <span class="number mr-1"> 9 </span>
      <v-divider vertical class="mx-2"></v-divider>
      <v-rating
        v-model="rating"
        half-increments
        background-color="orange"
        color="orange"
        small
        readonly
      ></v-rating>
      <!-- <span class="grey--text number text--darken-1 mr-1">
        {{ rating }}
      </span> -->
      <v-divider vertical class="mx-2"></v-divider>
      <p class="ma-0">المبيعات</p>
      <span class="number mr-1"> 33 </span>
      <v-spacer></v-spacer>
      <ShareSaveReport />
    </v-row>
    <!-- here are the Promotions -->
    <v-sheet color="#fff" class="py-md-1 py-lg-1 pt-0">
      <v-menu max-width="700" center left>
        <template v-slot:activator="{ on, attrs }">
          <v-card style="width: fit-content" flat tile v-bind="attrs" v-on="on">
            <v-row no-gutters class="fill-height" align="center">
              <span class="text-for-all mx-2">العروض :</span>
              <v-col class="pa-1 px-1" v-for="i in 3" :key="i">
                <v-sheet
                  dark
                  rounded="sm"
                  class="px-2"
                  color="orange promotion lighten-2"
                >
                  <v-card-text class="pa-0 coupons">
                    خصم
                    <span class="mx-">20%</span>
                  </v-card-text>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card>
        </template>
        <v-sheet
          style="overflow-x: hidden"
          height="300"
          class="pa-2"
          color="grey lighten-5"
        >
          <v-row no-gutters>
            <v-col class="pa-1 px-1" cols="6" md="4" sm="4" lg="4" v-for="n in 3" :key="n">
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
          </v-row>
        </v-sheet>
      </v-menu>
    </v-sheet>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import ShareSaveReport from "./ShareSaveReport.vue";
export default {
  name: "productInformation",
  components: { ShareSaveReport },
  data() {
    return {
      rating: 4.5,
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      ShowPriceOption: true,
      ShowContac: false,
    };
  },
  // this is help full to call the image inside folder and inject to the src
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
.ProductName {
  font-family: $fontfamliy3 !important;
  color: $fontcolor !important;
  font-weight: 400;
  letter-spacing: 0 !important;
  font-size: 23px !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden;
  pointer-events: none;
  @media (max-width: 960px) {
    font-size: 18px !important;
  }
  @media (max-width: 600px) {
    font-size: 16px !important;
  }
}
.price {
  font-size: 25px;
  font-weight: 600 !important;
  color: $fontcolor;
  font-family: sans-serif !important;
  font-weight: 700 !important;
  @media (max-width: 600px) {
    font-size: 18px !important;
  }
  @media (max-width: 350px) {
    font-size: 15px !important;
  }
  span {
    font-size: 17px;
    font-weight: 500 !important;
    font-family: $fontfamliy3 !important;
  }
}
.if-discount {
  font-size: 17px;
  text-decoration: line-through;
  font-weight: 700 !important;
  font-family: sans-serif !important;
  @media (max-width: 600px) {
    font-size: 13px !important;
  }
}
p {
  font-family: $fontfamliy3 !important;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 450px) {
    font-size: 14px !important;
  }
}
.number {
  font-family: sans-serif !important;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.718);
  font-size: 15px !important;
  color: $color-2;
  font-weight: 600;
}
::v-deep
  button.v-icon.notranslate.v-icon--link.material-icons.theme--light.orange--text {
  font-size: 15px !important;
  padding: 0.5px !important;
}
.discount-tag {
  background-color: $color-2 !important;
  color: #fff !important;
  font-size: 15px !important;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 83%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  @media (max-width: 500px) {
    font-size: 13px;
  }
}

::v-deep ::v-deep .theme--light.v-btn:before {
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s 0s ease;
}

::v-deep .theme--light.v-btn:hover:before {
  opacity: 0;
}
// coupons
.coupons {
  font-family: $fontfamliy3 !important;
  padding: 0px 5px;
  font-size: 13px;
  color: $fontcolorsm !important;
  font-weight: 600 !important;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 10px !important;
  }
  span {
    font-family: sans-serif !important;
    font-size: 16px;
  }
}
// Voucher
.StoreVoucher {
  .titel {
    letter-spacing: 0 !important;
    font-size: 17px !important;
    font-weight: 500 !important;
    font-family: $fontfamliy3 !important;
    color: $fontcolor !important;
  }
  .text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    // font-weight: 600 !important;
    line-height: 1.4;
    font-size: 12px !important;

    @media (max-width: 750px) {
      font-size: 13px !important;
    }
    span {
      font-family: sans-serif !important;
      font-size: 13px;
      font-weight: 700 !important;
      @media (max-width: 600px) {
        font-size: 13px !important;
      }
    }
  }
  .btn {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    margin: 0 auto !important;
    font-weight: 600;
    font-size: 10px;
  }
}
.StoreVoucher {
  position: relative;
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
::v-deep.v-menu__content.theme--light.menuable__content__active {
  @media (max-width: 600px) {
    left: 7px !important;
    right: 7px !important;
  }
}
.Voucher {
  position: absolute;
  top: 0;
  left: -3px;
  padding: 5px 0;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    list-style: none;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    // border-right: 1px solid #42a5f5;
  }
}

::v-deep
  span.discount-tag.mx-1.justify-center.v-chip.v-chip--no-color.theme--light.v-size--default {
  height: 30px;
}
.text-for-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  // margin: 0 auto !important;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size: 14px !important;
  }
}
.promotion {
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 8.5px;
    height: 8.5px;
    background-color: rgb(255, 255, 255);
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  ::before {
    content: "";
    position: absolute;
    width: 8.5px;
    height: 8.5px;
    background-color: rgb(255, 255, 255);
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
}
::v-deep .px-1.py-0.v-list-item.v-list-item--two-line.theme--light {
  min-height: 50px !important;
}
.Guarantee-text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  @media (max-width: 960px) {
    font-size: 14px;
  }
}
.Guarantee-text-tow {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  line-height: 1.5;
  @media (max-width: 960px) {
    font-size: 13px;
  }
}
</style>
