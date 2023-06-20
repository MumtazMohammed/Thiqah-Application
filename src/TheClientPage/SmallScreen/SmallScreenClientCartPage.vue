<template>
  <div class="TheClientCartPage">
    <v-app-bar color="#fff" flat class="mb-5" app>
      <v-toolbar-title class="toolbar-title">
        <v-icon size="22">mdi-cart-plus</v-icon>
        سلة التسوق
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="goBack" icon>
        <v-icon color="#fc624d" size="30">mdi-arrow-left-thin</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet color="grey lighten-4" height="60"> </v-sheet>
    <v-sheet
      color="grey lighten-4"
      style="height: calc(100vh - 140px); overflow-y: scroll"
    >
      <v-container class="pa-0">
        <v-col v-for="i in 2" :key="i" cols="12" class="py-1 px-0">
          <v-sheet class="py-1">
            <v-card-actions class="ma-0  px-4  align-center">
              <v-checkbox
                hide-details
                value="1"
                dense
                class="ma-0"
                v-model="checkbox"
              ></v-checkbox>
              <v-card-text class="pa-1 pr-0 store-name">
                <v-icon right>mdi-store-outline </v-icon>
                وقت العطور
              </v-card-text>
              <v-btn icon>
                <v-icon class="green--text text--lighten-1" size="20">
                  mdi-message
                </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="red--text text--lighten-1" size="22">
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-card-actions>
            <v-card v-for="i in 3" :key="i" class="ma-2" outlined>
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
                <v-avatar rounded="" size="85" color="blue-grey lighten-5">
                  <v-img
                    contain
                    src="@/assets/Mazda/mazda1.jpg"
                    alt="@/assets/Hyundai/image2.jpg"
                  ></v-img>
                </v-avatar>

                <v-list-item-content class="py-0 px-2 pl-0">
                  <v-list-item-title class="title pa-2 ma-0">
                    مـازدا مازدا3
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip-group>
                      <v-chip
                        @click="sheet = !sheet"
                        v-for="i in 3"
                        :key="i"
                        small
                        class="mr-1 blue-grey lighten-5"
                      >
                        (15 - 18)
                      </v-chip>
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
      </v-container>
    </v-sheet>
    <!-- edit the order   -->
    <v-bottom-sheet v-model="sheet">
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
            <p class="Colors-text mb-0 grey--text text--darken-1">الألوان :</p>
            <v-chip-group
              class="justify-center"
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
          <v-btn elevation="0" width="120px" class="add-chat"> إضــافـة </v-btn>
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
    <!-- select all  -->
    <v-sheet class="sheet px-2" height="80">
      <v-card-actions
        class="pa-0"
        style="width: 100%; justify-content: space-between; height: 100%"
      >
        <v-card
          flat
          tile
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          "
          height="100%"
          class="transparent"
        >
          <v-checkbox
            hide-details
            class="ma-0 pa-0"
            v-model="checkbox"
            label="أختيار الكل"
          ></v-checkbox>
          <v-card-text class="pa-1 pr-2 check-out">
            إجمالي الطلبات (
            <span class="mx-1 red--text">{{ checkbox }}</span> )
            <span class="mx-1 green--text">0.00</span> ريال
          </v-card-text>
        </v-card>
        <v-btn depressed tile class="CheckOut">شراء</v-btn>
      </v-card-actions>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "TheClientCartPage",
  data() {
    return {
      checkbox: 0,
      value: "recent",
      sheet: false,
      Quantity: 1,
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.TheClientCartPage {
  width: 100%;
  min-height: 40vh;
  // padding: $padding;
  .toolbar-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    font-size: 15px !important;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .v-icon {
      color: $color-2 !important;
      margin-left: 5px;
    }
  }

  .title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    // font-weight: 600;
    color: $fontcolor;
    font-size: 15px !important;
    // pointer-events: none;
  }
  .price {
    font-family: sans-serif !important;
    color: $color-2;
    font-size: 18px !important;
    font-weight: 600;
  }

  .check-out {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 600 !important;
    font-size: 15px !important;
    color: $fontcolorlinks;
  }

  .chat-icon {
    color: #fff !important;
  }
}
.store-name {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-weight: 600 !important;
  font-size: 13px !important;
  color: $fontcolorlinks;
  .v-icon {
    color: $fontcolorlinks !important;
    font-size: 20px !important;
  }
}
::v-deep .theme--light.v-btn:hover:before {
  opacity: 0;
}
::v-deep .theme--light.v-btn:focus:before {
  background-color: transparent;
}
::v-deep label.v-label.theme--light {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-weight: 500 !important;
  font-size: 13.5px !important;
}
::v-deep .v-input--selection-controls__ripple {
  display: none;
}
::v-deep .v-input__slot {
  width: fit-content;
}
.sheet {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  border-top: 1px solid #eee !important;
}
.CheckOut {
  background-color: $color-2 !important;
  font-family: $fontfamliy3;
  letter-spacing: 0;
  color: #fff !important;
  font-size: 14px !important;
}
::v-deep .v-chip-group .v-slide-group__content {
  padding: 0 !important;
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
