<template>
  <div class="TheClientCartPage">
    <v-sheet outlined class="pa-3 transparent">
      <v-card-actions class="justify-space-between">
        <v-checkbox
          hide-details
          class="ma-0 pa-0"
          v-model="checkbox"
          label="أختيار الكل"
        ></v-checkbox>
        <v-btn depressed tile small class="btn2 white"> حذف الكل </v-btn>
      </v-card-actions>
    </v-sheet>
    <v-sheet height="670" class="overflow-y-auto example transparent">
      <v-row no-gutters class="">
        <v-col cols="12" md="8" lg="8" sm="8" xl="8">
          <v-row no-gutters>
            <v-col v-for="i in 2" :key="i" cols="12" class="pa-2">
              <v-sheet rounded class="pa-2">
                <v-card-actions class="pa-0">
                  <v-checkbox
                    hide-details
                    value="1"
                    class="ma-0 pa-0"
                    v-model="checkbox"
                  ></v-checkbox>
                  <v-card-text class="pa-1 store-name">
                    <v-icon right>mdi-store-outline </v-icon>
                    وقت العطور
                  </v-card-text>
                  <v-btn icon>
                    <v-icon class="green--text" size="20">mdi-message </v-icon>
                  </v-btn>
                  <v-btn small class="mr-0 store-name" elevation="0">
                    حذف
                  </v-btn>
                </v-card-actions>
                <v-card
                  v-for="i in 3"
                  :key="i"
                  tile
                  color="white"
                  flat
                  class="pa-1 overflow-hidden grey lighten-4"
                >
                  <v-list-item three-line class="px-0">
                    <v-card-actions class="ma-0 pl-0 pa-2">
                      <v-checkbox
                        dense
                        class="ma-0 pa-0"
                        hide-details
                        value="1"
                        v-model="checkbox"
                      >
                      </v-checkbox>
                    </v-card-actions>
                    <v-img
                      height="94"
                      contain
                      max-width="80"
                      class="white"
                      src="@/assets/Mazda/mazda1.jpg"
                      alt="@/assets/Hyundai/image2.jpg"
                    ></v-img>
                    <v-list-item-content class="py-0 px-2">
                      <v-list-item-title class="title pr-2">
                        مـازدا مازدا3
                      </v-list-item-title>
                      <v-list-item-subtitle class="text-all">
                        <v-chip-group>
                          <v-chip v-for="i in 5" :key="i" small class="">
                            (15 - 18)
                          </v-chip>
                          <v-spacer></v-spacer>
                          <v-btn small icon @click="sheet = !sheet">
                            <v-icon size="22">mdi-chevron-down</v-icon>
                          </v-btn>
                        </v-chip-group>
                      </v-list-item-subtitle>
                      <v-list-item-title class="price pt-0 pa-2 red--text">
                        10254<span class="mr-1">ريال</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-2">
          <v-banner sticky class="mx-2 pa-0 white" min-height="100">
            <!-- <v-card-actions class="justify-space-between">
              <v-checkbox
                hide-details
                class="ma-0 pa-0"
                v-model="checkbox"
                label="أختيار الكل"
              ></v-checkbox>
              <v-btn elevation="0" small class="btn2">
                <v-icon size="15" color="red lighten-2" right>
                  mdi-trash-can
                </v-icon>
                حذف الكل
              </v-btn>
            </v-card-actions> -->
            <!-- <v-subheader>ملخص الطلب</v-subheader> -->
            <span class="pa-2 d-block location">
              <v-icon color="blue lighten-2" right size="20">
                mdi-map-marker
              </v-icon>
              الموقع -- المنطقة -- الحي -- رقم المنزل
            </span>
            <v-divider></v-divider>
            <v-card-actions class="">
              <v-card-text class="pa-0 check-out">
                إجمالي الطلبات (
                <span class="mx-1 red--text">{{ checkbox }}</span> )
              </v-card-text>
              <div class="d-flex">
                <span class="mx-2 green--text">0.00</span> ريال
              </div>
            </v-card-actions>
            <v-card-actions class="justify-center px-0">
              <v-btn tile block class="btn1" elevation="0">شراء</v-btn>
            </v-card-actions>
          </v-banner>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- edit the order   -->
    <v-bottom-sheet v-model="sheet">
      <v-container>
        <v-sheet class="text-center pt-1" height="auto">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-actions class="justify-start py-0 align-start">
                <v-avatar tile size="70" color="transparent">
                  <v-img
                    contain
                    max-width="85"
                    class="my-auto"
                    src="@/assets/Mazda/mazda1.jpg"
                    alt="@/assets/Hyundai/image2.jpg"
                  ></v-img>
                </v-avatar>
                <div>
                  <p
                    class="Product-name-text grey--text text--darken-1 d-inline-block text-truncate mr-2 ma-0 mt-1"
                  >
                    مـازدا مازدا3
                  </p>
                  <p
                    style="font-size: 17px; font-weight: 600"
                    class="mb-1 mr-2 d-block text-start red--text"
                  >
                    10254
                  </p>
                </div>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-card flat color="" class="pa-2 pt-0">
            <v-card-actions>
              <p class="Colors-text mb-0 grey--text text--darken-1">
                الألوان :
              </p>
              <v-chip-group
                class="justify-center mx-auto"
                active-class="select-img"
                tile
                column
              >
                <v-chip label v-for="x in 5" :key="x" class="px-1">
                  <v-img
                    width="50"
                    height="30"
                    @click="
                      ActiveImage = getimageUrl(getCarInfo.folder, singleImage)
                    "
                    src="@/assets/Mazda/mazda1.jpg"
                    alt="@/assets/Hyundai/image2.jpg"
                  />
                </v-chip>
              </v-chip-group>
            </v-card-actions>
            <v-card-actions>
              <p class="Colors-text grey--text text--darken-1">الألوان :</p>
              <v-chip-group active-class="select" column class="mx-auto">
                <v-chip active small> Elevator </v-chip>
                <v-chip small> Washer / Dryer </v-chip>
                <v-chip small> Fireplace </v-chip>
              </v-chip-group>
            </v-card-actions>
            <v-card-actions>
              <p class="Colors-text grey--text text--darken-1">الألوان :</p>
              <v-chip-group active-class="select" column class="mx-auto">
                <v-chip active small> Elevator </v-chip>
                <v-chip small> Washer / Dryer </v-chip>
                <v-chip small> Fireplace </v-chip>
              </v-chip-group>
            </v-card-actions>
            <v-card-actions>
              <p class="Colors-text mb-0 grey--text text--darken-1">العدد :</p>
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
                    <v-icon size="18" color="grey darken-2"> mdi-plus </v-icon>
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
                    <v-icon size="18" color="grey darken-2"> mdi-minus </v-icon>
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
      </v-container>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  name: "TheClientCartPage",
  data() {
    return {
      checkbox: 0,
      sheet: false,
      Quantity: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.TheClientCartPage {
  width: 100%;
  min-height: 80vh;
  // padding: $padding;

  .title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    color: $fontcolor;
    font-size: 17px !important;
    font-weight: 500;
  }

  .price {
    font-family: sans-serif !important;
    font-size: 18px !important;
    font-weight: 700;
    pointer-events: none;
    color: $color-2;
  }

  .check-out {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 600 !important;
    font-size: 15px !important;
    color: $fontcolorlinks;
  }
  .location {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 13px !important;
    color: $fontcolorlinks;
    pointer-events: none;
  }
  .store-name {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 600 !important;
    font-size: 13px !important;
    color: $fontcolorlinks;
    pointer-events: none;

    .v-icon {
      color: $fontcolorlinks;
      font-size: 20px !important;
    }
  }
  .btn1 {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-size: 15px !important;
    color: #fff;
    background-color: #1976d2 !important;
  }
  .btn2 {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 13px !important;
    color: rgb(106, 104, 104);
  }
}
::v-deep .theme--light.v-btn:hover:before {
  opacity: 0;
}
::v-deep .theme--light.v-btn:focus:before {
  background-color: transparent;
}
::v-deep label.v-label {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-weight: 500 !important;
  font-size: 14px !important;
  color: $fontcolor;
}
/* Chrome, Safari, Edge, Opera */
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
::v-deep input[type="number"] {
  -moz-appearance: textfield;
}
::v-deep .v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 27px !important;
}
::v-deep
  .v-input.text-center.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--solo-flat.v-text-field--is-booted.v-text-field--enclosed {
  min-height: 30px !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input {
  text-align: center;
}
::v-deep
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0;
}
.addToCartAndChat-SmallScreen {
  .addToCartAndChat-SmallScreen-btn {
    background-color: transparent !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
    font-size: 14px !important;
    color: $fontcolorlinks;
    .v-icon {
      color: $color-2 !important;
    }
  }
}
::v-deep .v-banner__wrapper {
  padding: 0 !important;
  border: none !important;
}
// edit order
.select-img {
  box-shadow: 0 0 0px 3px $color-2 !important;
  color: #fff !important;
}
.select {
  background-color: $color-2;
  // box-shadow: 0 0 2px 2px $color-2 !important;
  color: #fff !important;
}
.Colors-text {
  font-family: $fontfamliy3 !important;
  font-size: 16px;
  font-weight: 600;
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
::v-deep button.add-chat {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor;
  font-size: 14px;
  font-weight: 600;
}
::v-deep .v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 30px !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input {
  text-align: center;
}
::v-deep .v-chip--disabled {
  opacity: 1 !important;
}
</style>
