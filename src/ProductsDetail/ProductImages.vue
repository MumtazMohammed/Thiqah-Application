<template>
  <div class="product">
    <v-row no-gutters class="justify-space-around">
      <!-- small devices image -->
      <v-col xs="12" sm="12" md="6" class="hidden-md-and-up">
        <div>
          <v-dialog
            class="overflow--hidden"
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-banner
                color="grey darken-2"
                style="overflow: hidden; position: relative"
              >
                <div class="badge-promo">
                  <span class="badge-promo-content"> متميز </span>
                </div>
                <v-carousel
                  v-model="customerIMageNo"
                  delimiter-icon="mdi-minus"
                  :show-arrows="false"
                  height="auto"
                >
                  <v-carousel-item
                    v-for="(singleImage, x) in getCarInfo.images"
                    :key="x"
                  >
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      aspect-ratio="1.5"
                      :src="getimageUrl(getCarInfo.folder, singleImage)"
                    >
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
                <!-- <v-row no-gutters justify="center" class="py-1">
                  <v-chip
                    color="grey lighten-1"
                    small
                    class="elevation-0 white--text"
                  >
                    {{ customerIMageNo + 1 }} |
                    {{ getCarInfo.images.length }}
                  </v-chip>
                </v-row> -->
              </v-banner>
            </template>
            <v-card flat tile color="grey darken-4" class="overflow--hidden">
              <v-toolbar tile dark flat color="grey darken-3">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-title>
                  {{ customerIMageNo + 1 }} /
                  {{ getCarInfo.images.length }}
                </v-toolbar-title>
              </v-toolbar>
              <v-carousel
                v-model="customerIMageNo"
                height="93vh"
                width="100%"
                touch
                hide-delimiters
                :show-arrows="false"
                class="overflow--hidden px-1"
              >
                <v-carousel-item
                  v-for="(singleImage, x) in getCarInfo.images"
                  :key="x"
                >
                  <v-img
                    contain
                    :src="getimageUrl(getCarInfo.folder, singleImage)"
                  >
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <!-- big devices image -->
      <v-col xs="12" sm="12" md="5" class="big-screen-img px-1 transparent">
        <v-sheet class="transparent">
          <v-dialog
            v-model="dialogBig"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-banner
                color="transparent"
                style="overflow: ; position: relative"
              >
                <div class="badge-promo">
                  <span class="badge-promo-content"> متميز </span>
                </div>
                <v-carousel
                  delimiter-icon="mdi-minus"
                  v-model="customerIMageNoBig"
                  hide-delimiters
                  height="400"
                >
                  <v-carousel-item
                    v-for="(singleImage, x) in getCarInfo.images"
                    :key="x"
                  >
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="getimageUrl(getCarInfo.folder, singleImage)"
                    >
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-banner>
            </template>
            <v-card flat tile color="grey darken-4" class="overflow--hidden">
              <v-toolbar tile dark flat color="grey darken-3">
                <v-btn icon dark @click="dialogBig = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-title>
                  {{ customerIMageNo + 1 }} /
                  {{ getCarInfo.images.length }}
                </v-toolbar-title>
              </v-toolbar>
              <v-carousel
                v-model="customerIMageNoBig"
                width="100%"
                touch
                height="91vh"
                show-arrows="false"
                class="overflow--hidden px-1"
                delimiter-icon="mdi-minus"
              >
                <v-carousel-item
                  v-for="(singleImage, x) in getCarInfo.images"
                  :key="x"
                >
                  <v-img
                    height="90vh"
                    contain
                    :src="getimageUrl(getCarInfo.folder, singleImage)"
                  >
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-col>
      <!-- big and small screen Products ordered Info  -->
      <v-col cols="12" sm="12" md="7" lg="7" class="remov-p-from-col-box-all">
        <productInformation />
        <!-- Products ordered Info  -->
        <v-sheet class="pa-2 mt-0 transparent hidden-sm-and-down">
          <v-card-actions class="pa-0">
            <p class="Colors-text grey--text text--darken-3">موديل :</p>
            <v-chip-group active-class="select-img" tile class="mx-auto" column>
              <v-chip
                v-for="(singleImage, x) in getCarInfo.images"
                :key="x"
                class="px-1 mr-0 transparent rounded-0"
                label
              >
                <v-img
                  width="60"
                  height="30"
                  @click="
                    ActiveImage = getimageUrl(getCarInfo.folder, singleImage)
                  "
                  :src="getimageUrl(getCarInfo.folder, singleImage)"
                />
              </v-chip>
            </v-chip-group>
          </v-card-actions>
          <v-card-actions class="py-1">
            <p class="Colors-text grey--text text--darken-3">أختيار 2 :</p>
            <v-chip-group active-class="select" column class="mx-auto">
              <v-chip small> Elevator </v-chip>
              <v-chip small> Washer / Dryer </v-chip>
              <v-chip small> Fireplace </v-chip>
            </v-chip-group>
          </v-card-actions>
          <v-card-actions class="py-1">
            <p class="Colors-text grey--text text--darken-3">أختيار 3 :</p>
            <v-chip-group active-class="select" column class="mx-auto">
              <v-chip small> Elevator </v-chip>
              <v-chip small> Washer / Dryer </v-chip>
              <v-chip small> Fireplace </v-chip>
            </v-chip-group>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <p class="Colors-text grey--text text--darken-3">العدد :</p>

            <v-spacer></v-spacer>
            <v-card
              style="overflow: hidden; margin: 0 auto"
              outlined
              max-width="200"
            >
              <v-card-actions class="pa-0">
                <v-btn
                  class="px-1"
                  tile
                  elevation="0"
                  height="30"
                  min-width="35"
                  @click="Quantity++"
                >
                  <v-icon size="17">mdi-plus</v-icon>
                </v-btn>
                <v-text-field
                  v-model="Quantity"
                  solo
                  dense
                  flat
                  hide-details
                  type="number"
                ></v-text-field>
                <v-btn
                  class="px-1"
                  tile
                  elevation="0"
                  height="30"
                  min-width="35"
                  @click="Quantity--"
                >
                  <v-icon size="17">mdi-minus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card flat tile color="grey lighten-5">
            <v-card-actions class="justify-space-around pa-1">
              <v-btn
                tile
                text
                color="grey darken-2"
                elevation="0"
                width="49%"
                class="add-chat white"
              >
                إضافة الى السلة
                <v-icon size="18" color="#fc624d" right>mdi-cart-plus</v-icon>
              </v-btn>
              <v-btn
                text
                width="49%"
                elevation="0"
                color=" grey darken-2"
                tile
                class="add-chat white mr-0"
              >
                محادثة
                <v-icon size="18" color="light-blue lighten-1" right>
                  mdi-message-text
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
        <div class="addToCartAndChat-SmallScreen">
          <!-- small screen Add to cart or buy  -->
          <v-bottom-navigation
            height="46"
            style="z-index: 17; align-items: center; flex: 0 1 auto"
            fixed
            grow
            dark
            class="white"
          >
            <v-btn min-width="120" @click="sheet = !sheet" color="red">
              <span class="btn">شـراء الان</span>
            </v-btn>
            <v-btn
              min-width="120"
              @click="sheet = !sheet"
              color="amber darken-1"
            >
              <span class="btn"> إضافة الى السلة </span>
              <v-icon size="20">mdi-cart-plus</v-icon>
            </v-btn>
            <v-btn class="">
              <span class="btn black--text">مراسلة</span>
              <v-icon color="green accent-4" size="20">
                mdi-forum-outline
              </v-icon>
            </v-btn>
            <v-btn class="" to="/SellerStorePage">
              <v-avatar size="35" color="transparent">
                <img
                  src="../assets/showroom/orignal-1615322218-744.png"
                  alt="alt"
                />
              </v-avatar>
            </v-btn>
          </v-bottom-navigation>
          <!-- small screen Products ordered Info  -->
          <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center pt-1" height="auto">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-card-actions class="justify-start py-0 align-start">
                    <v-avatar tile size="70" color="transparent">
                      <img
                        v-if="
                          ActiveImage.length < 1
                            ? (ActiveImage = getimageUrl(
                                getCarInfo.folder,
                                getCarInfo.image
                              ))
                            : ActiveImage
                        "
                        :src="ActiveImage"
                        :lazy-src="ActiveImage"
                      />
                    </v-avatar>
                    <div>
                      <p
                        class="Product-name-text grey--text text--darken-1 d-inline-block text-truncate mr-2 ma-0 mt-1"
                      >
                        {{ getCarInfo.company }} {{ getCarInfo.name }}
                        {{ getCarInfo.modle }}
                      </p>
                      <p
                        style="font-size: 17px; font-weight: 600"
                        class="mb-1 mr-2 d-block text-start red--text"
                      >
                        {{ getCarInfo.payment }}
                      </p>
                      <!-- <p
                        class="my-1 mr-2 Colors-text d-block text-start grey--text text--darken-1"
                      >
                        المخزون : <span class="">40</span>
                      </p> -->
                    </div>
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-card flat color="" class="pa-2 pt-0">
                <v-card-actions>
                  <p class="Colors-text grey--text text--darken-1">الألوان :</p>
                  <v-chip-group
                    active-class="select-img"
                    class="mx-auto"
                    column
                  >
                    <v-chip
                      label
                      v-for="(singleImage, x) in getCarInfo.images"
                      :key="x"
                      class="px-1 image-chip"
                    >
                      <v-img
                        width="50"
                        height="30"
                        @click="
                          ActiveImage = getimageUrl(
                            getCarInfo.folder,
                            singleImage
                          )
                        "
                        :src="getimageUrl(getCarInfo.folder, singleImage)"
                      />
                    </v-chip>
                  </v-chip-group>
                </v-card-actions>
                <v-card-actions>
                  <p class="Colors-text grey--text text--darken-1">الألوان :</p>
                  <v-chip-group active-class="select" column class="mx-auto">
                    <v-chip small> Elevator </v-chip>
                    <v-chip small> Washer / Dryer </v-chip>
                    <v-chip small> Fireplace </v-chip>
                  </v-chip-group>
                </v-card-actions>
                <v-card-actions>
                  <p class="Colors-text grey--text text--darken-1">الألوان :</p>
                  <v-chip-group active-class="select" column class="mx-auto">
                    <v-chip small> Elevator </v-chip>
                    <v-chip small> Washer / Dryer </v-chip>
                    <v-chip small> Fireplace </v-chip>
                  </v-chip-group>
                </v-card-actions>
                <v-card-actions>
                  <p class="Colors-text mb-0 grey--text text--darken-1">
                    العدد :
                  </p>
                  <v-card
                    style="overflow: hidden; margin: 0 auto"
                    outlined
                    max-width="150"
                  >
                    <v-card-actions class="pa-0">
                      <v-btn
                        class="px-1"
                        tile
                        elevation="0"
                        height="30"
                        min-width="35"
                        @click="Quantity++"
                      >
                        <v-icon size="18" color="grey darken-2">
                          mdi-plus
                        </v-icon>
                      </v-btn>
                      <v-text-field
                        solo
                        dense
                        flat
                        v-model="Quantity"
                        hide-details
                        class="text-center"
                        type="number"
                      ></v-text-field>
                      <v-btn
                        class="px-1"
                        tile
                        elevation="0"
                        height="30"
                        min-width="35"
                        @click="Quantity--"
                      >
                        <v-icon size="18" color="grey darken-2">
                          mdi-minus
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card-actions>
              </v-card>
              <!-- <v-divider class="mb-2"></v-divider> -->
              <v-card-actions class="justify-center pt-0">
                <v-btn elevation="0" width="120px" class="add-chat">
                  إضــافـة
                </v-btn>
                <v-btn
                  @click="sheet = false"
                  elevation="0"
                  width="120px"
                  class="add-chat"
                >
                  إلـغـاء
                </v-btn>
              </v-card-actions>
            </v-sheet>
          </v-bottom-sheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import productInformation from "./productInformation.vue";
// import Share from "./ShareSaveReport.vue";
export default {
  name: "ProductImages",
  components: { productInformation },
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      customerIMageNo: 0,
      customerIMageNoBig: 0,
      slidesPerView: 1,
      ActiveImage: "",
      width: 300,
      sheet: false,
      Quantity: 1,
      dialog: false,
      dialogBig: false,
      GetCarData: CarData,
      model: null,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
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
// @import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
.product {
  background-color: #fff;
}
::v-deep .v-image.v-responsive.theme--light {
  align-items: center;
}
::v-deep .v-image.v-responsive.img.theme--light {
  align-items: center !important;
}
::v-deep .v-carousel__controls {
  @media (max-width: 960px) {
    border-radius: 0px;
    height: 30px;
  }
}
::v-deep .v-carousel__controls__item {
  margin: 0 3px !important;
}
.img-box {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: black;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

::v-deep span.v-btn__content {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-size: 13.5px !important;
  // font-weight: 600;
  // color: #fff ;
}
::v-deep span.btn {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-size: 13.5px !important;
  // font-weight: 600;
  color: #fff;
}
.not-active-img {
  position: relative;
}
.not-active-img::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // z-index: 1;
  opacity: 0.5;
  background-color: black;
}
::v-deep .v-slide-group__next {
  min-width: 30px;
}
::v-deep .v-slide-group__prev {
  min-width: 30px;
}
::v-deep .v-slide-group__content {
  justify-content: center;
}

.how-many-imag {
  position: relative;
  bottom: 28px;
  right: 50%;
  transform: translateX(50%);
  min-width: 45px;
  background-color: rgb(53, 53, 53);
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  border-radius: 2px !important;
  color: rgb(255, 255, 255);
  pointer-events: none;
  z-index: 5000;
  span {
    font-size: 16px;
  }
}
.big-screen-img {
  @media (max-width: 960px) {
    display: none !important;
  }
}
.small-screen-img {
  padding: 0px !important ;
  @media (min-width: 600px) {
    display: none;
  }
}
.remov-p-from-col-box-all {
  @media (max-width: 600px) {
    padding-bottom: 0;
    padding-top: 0;
  }
}
.Colors-text {
  font-family: $fontfamliy3 !important;
  font-size: 16px;
  font-weight: 400;
  display: block;
  text-align: start;
  margin-bottom: 0;
  pointer-events: none;

  @media (max-width: 600px) {
    font-size: 14px !important;
  }
}
.Product-name-text {
  font-family: $fontfamliy3 !important;
  font-size: 16px;
  font-weight: 400;
  pointer-events: none;
}

::v-deep
  i.v-icon.notranslate.v-chip__filter.v-icon--left.material-icons.theme--light {
  margin-right: 0;
  color: $color-2;
}
::v-deep button.add-chat {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-size: 15px;
  // font-weight: 600;
  @media (max-width: 960px) {
    // color: $fontcolor !important;
  }
}
::v-deep .v-chip.v-size--default {
  // border-radius: 20px !important;
  @media (max-width: 960px) {
    border-radius: 20px !important;
    height: 35px;
  }
  // border-radius: 2px !important;
}
::v-deep .image-chip.v-chip.v-size--default {
  border-radius: 3px !important;
}
::v-deep
  .v-input.v-input--hide-details.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--solo-flat.v-text-field--is-booted.v-text-field--enclosed {
  height: 30px;
  // border-radius: 2px !important;
}
/* Chrome, Safari, Edge, Opera */
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::v-deep .v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 30px !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input {
  text-align: center;
}
.addToCartAndChat-SmallScreen {
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
  .addToCartAndChat-SmallScreen-btn {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    font-size: 13px !important;
    font-weight: 600 !important;
  }
}

::v-deep .v-banner__wrapper {
  padding: 0 0.1px !important;
}
::v-deep .v-banner__content {
  padding: 0px !important;
}

// ::v-deep .v-btn--icon.v-size--small {
//   width: 20px;
//   height: 20px;
// }
::v-deep
  .theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped)
  .v-banner__wrapper {
  border: 0 !important;
}
.select-img {
  // background-color: $color-2;
  box-shadow: 0 0 0px 2px $color-2 !important;
  color: #fff !important;
}
.select {
  background-color: $color-2 !important;
  // box-shadow: 0 0 2px 2px $color-2 !important;
  color: #fff !important;
}
::v-deep .v-chip-group .v-slide-group__content {
  padding: 4px !important;
}
// ribbon code
// ribbon code
.badge-promo {
  position: relative;
  overflow: hidden;
  max-height: 60px;
  margin-bottom: -8px;
  z-index: 1;
  padding: 12px 14px;
  border-radius: 2px 2px 0 0;
  color: #fff;
  text-align: left;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    background: #fc624d;
    height: 100%;
    width: 110%;
    transform-origin: bottom left;
    transform: rotate(-3deg);
  }

  &::before {
    background: #ffccbc;
    transform: rotate(1deg);
    transform-origin: bottom right;
    height: 100%;
    width: 110%;
  }
}

.badge-promo-content {
  position: relative;
  z-index: 1;
  font-family: $fontfamliy3 !important;
  font-size: 18px;
}
::v-deep i.v-icon.notranslate.mdi.mdi-cart-plus.theme--dark {
  color: #fff !important;
}
</style>
