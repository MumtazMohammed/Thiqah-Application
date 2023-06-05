<template>
  <div class="UserAdd">
    <v-app-bar flat color="#fff" class="mb-5" app>
      <v-toolbar-title class="toolbar-title">
        <v-icon class="white--text" size="22">mdi-cart-check</v-icon>
        مشترياتي
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="goBack" icon>
        <v-icon color="#fc624d" size="30">mdi-arrow-left-thin</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet height="56"></v-sheet>
    <v-tabs
      v-model="tab"
      slider-color="#fc624d"
      class="overflow-hidden"
      centered
      grow
      background-color="#fff"
    >
      <v-tab
        href="#tab-1"
        active-class="black--text font-weight-bold"
        class="links"
      >
        الكل
      </v-tab>
      <v-tab
        href="#tab-2"
        active-class="black--text font-weight-bold"
        class="links"
      >
        الشحن
      </v-tab>
      <v-tab
        href="#tab-3"
        active-class="black--text font-weight-bold"
        class="links"
      >
        مكتمل
      </v-tab>
      <v-tab
        href="#tab-4"
        active-class="black--text font-weight-bold"
        class="links"
      >
        ملغي
      </v-tab>
    </v-tabs>
    <v-tabs-items class="transparent pa-2a" v-model="tab">
      <!-- All  -->
      <v-tab-item
        style="height: calc(100vh - 100px); overflow-y: scroll"
        value="tab-1"
        class="pa-2 px-3"
      >
        <v-row no-gutters>
          <v-col cols="12" class="pa-1 px-0">
            <v-sheet rounded class="pa-1 px-2">
              <v-card-actions class="pa-0 align-center">
                <v-card-text class="pa-1 store-name">
                  <v-icon right>mdi-store-outline </v-icon>
                  وقت العطور
                </v-card-text>
                <v-btn icon>
                  <v-icon class="green--text" size="20">mdi-message </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card
                v-for="i in 3"
                :key="i"
                style="display: flex"
                class="pa-1 mb-1 grey lighten-4"
                flat
              >
                <v-list-item three-line class="px-0">
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
                      <v-chip-group column>
                        <v-chip v-for="i in 5" :key="i" x-small class="">
                          (15 - 18)
                        </v-chip>
                      </v-chip-group>
                    </v-list-item-subtitle>
                    <v-list-item-title class="price pt-0 pa-2 red--text">
                      10254<span class="mr-1">ريال</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- <v-card-title class="recount pa-0 pr-2 grey--text text--darken-1">
                *عدد (<span>55</span>)
              </v-card-title> -->
              </v-card>
              <v-card-actions class="pa-2 px-0">
                <v-btn block elevation="0" class="btn1"> الشراء مجدداً </v-btn>
              </v-card-actions>
            </v-sheet>
          </v-col>
          <v-col cols="12" class="pa-2 px-0">
            <v-sheet rounded class="pa-1 px-2">
              <v-card-actions class="pa-0 align-center">
                <v-card-text class="pa-1 store-name">
                  <v-icon right>mdi-store-outline </v-icon>
                  وقت العطور
                </v-card-text>
                <v-btn icon>
                  <v-icon class="green--text" size="20">mdi-message </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon class="grey--text" size="24">mdi-delete </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card
                v-for="i in 2"
                :key="i"
                rounded="sm"
                flat
                style="display: flex"
                class="pa-1 mb-1 grey lighten-4"
              >
                <v-list-item three-line class="px-0">
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
                      <v-chip-group column>
                        <v-chip v-for="i in 5" :key="i" x-small class="">
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
              <v-card-actions class="pa-2 justify-center">
                <v-btn text elevation="0" class="rate-text">
                  قيم الآن واحصل على 5 نقاط
                </v-btn>
                <!-- <v-spacer></v-spacer>
              <span class="rate-text"> قيم الآن واحصل على 5 نقاط </span> -->
              </v-card-actions>
            </v-sheet>
          </v-col>
          <v-col cols="12" class="pa-2 px-0">
            <v-sheet rounded class="pa-1 px-2">
              <v-card-actions class="pa-0 align-center">
                <v-card-text class="pa-1 store-name">
                  <v-icon right>mdi-store-outline </v-icon>
                  وقت العطور
                </v-card-text>
                <v-btn icon>
                  <v-icon class="green--text" size="20">mdi-message </v-icon>
                </v-btn>
                <v-btn small class="btn1 white--text grey" elevation="0">
                  إلغاء
                </v-btn>
              </v-card-actions>
              <v-card
                style="display: flex"
                class="pa-1 grey lighten-4"
                width="100%"
                flat
                rounded="sm"
              >
                <v-list-item three-line class="px-0">
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
                      <v-chip-group column>
                        <v-chip v-for="i in 5" :key="i" x-small class="">
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
              <!-- Progress  -->
              <v-card-actions class="px-0 py-3">
                <v-card-text
                  class="stepper-Info pa-0 grey--text text--darken-2"
                >
                  <v-icon
                    size="16"
                    style="border-radius: 50%; width: 18px; height: 18px"
                    class="blue white--text"
                    right
                    dark
                  >
                    mdi-check
                  </v-icon>
                  تم دفع ( <span>154</span> ريال)
                </v-card-text>
                <v-card-text
                  class="stepper-Info pa-0 grey--text text--darken-2"
                >
                  <v-icon
                    size="16"
                    style="border-radius: 50%; width: 18px; height: 18px"
                    class="grey white--text"
                    right
                  >
                    mdi-check
                  </v-icon>
                  تم شحن المنتج
                </v-card-text>
                <v-card-text
                  class="stepper-Info pa-0 grey--text text--darken-2"
                >
                  <v-icon
                    size="16"
                    style="border-radius: 50%; width: 18px; height: 18px"
                    class="grey white--text"
                    right
                  >
                    mdi-check
                  </v-icon>
                  تم توصيل المنتج
                </v-card-text>
              </v-card-actions>
            </v-sheet>
          </v-col>
        </v-row>
      </v-tab-item>
      <!-- shipping order  -->
      <v-tab-item
        style="height: calc(100vh - 100px); overflow-y: scroll"
        value="tab-2"
        class="pa-2 px-3"
      >
        <v-col cols="12" class="pa-2 px-0">
          <v-sheet rounded class="pa-1 px-2">
            <v-card-actions class="pa-0 align-center">
              <v-card-text class="pa-1 store-name">
                <v-icon right>mdi-store-outline </v-icon>
                وقت العطور
              </v-card-text>
              <v-btn icon>
                <v-icon class="green--text" size="20">mdi-message </v-icon>
              </v-btn>
              <v-btn small class="btn1 white--text grey" elevation="0">
                إلغاء
              </v-btn>
            </v-card-actions>
            <v-card
              style="display: flex"
              class="pa-1 grey lighten-4"
              width="100%"
              flat
              rounded="sm"
            >
              <v-list-item three-line class="px-0">
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
                    <v-chip-group column>
                      <v-chip v-for="i in 5" :key="i" x-small class="">
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
            <!-- Progress  -->
            <v-card-actions class="px-0 py-3">
              <v-card-text class="stepper-Info pa-0 grey--text text--darken-2">
                <v-icon
                  size="16"
                  style="border-radius: 50%; width: 18px; height: 18px"
                  class="blue white--text"
                  right
                  dark
                >
                  mdi-check
                </v-icon>
                تم دفع ( <span>154</span> ريال)
              </v-card-text>
              <v-card-text class="stepper-Info pa-0 grey--text text--darken-2">
                <v-icon
                  size="16"
                  style="border-radius: 50%; width: 18px; height: 18px"
                  class="grey white--text"
                  right
                >
                  mdi-check
                </v-icon>
                تم شحن المنتج
              </v-card-text>
              <v-card-text class="stepper-Info pa-0 grey--text text--darken-2">
                <v-icon
                  size="16"
                  style="border-radius: 50%; width: 18px; height: 18px"
                  class="grey white--text"
                  right
                >
                  mdi-check
                </v-icon>
                تم توصيل المنتج
              </v-card-text>
            </v-card-actions>
          </v-sheet>
        </v-col>
      </v-tab-item>
      <!-- completed shipping order  -->
      <v-tab-item
        style="height: calc(100vh - 100px); overflow-y: scroll"
        value="tab-3"
        class="pa-2 px-3"
      >
        <v-col cols="12" class="pa-2 px-0">
          <v-sheet rounded class="pa-1 px-2">
            <v-card-actions class="pa-0 align-center">
              <v-card-text class="pa-1 store-name">
                <v-icon right>mdi-store-outline </v-icon>
                وقت العطور
              </v-card-text>
              <v-btn icon>
                <v-icon class="green--text" size="20">mdi-message </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="grey--text" size="24">mdi-delete </v-icon>
              </v-btn>
            </v-card-actions>
            <v-card
              v-for="i in 2"
              :key="i"
              rounded="sm"
              flat
              style="display: flex"
              class="pa-1 mb-1 grey lighten-4"
            >
              <v-list-item three-line class="px-0">
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
                    <v-chip-group column>
                      <v-chip v-for="i in 5" :key="i" x-small class="">
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
            <v-card-actions class="pa-2 justify-center">
              <v-btn text elevation="0" class="rate-text">
                قيم الآن واحصل على 5 نقاط
              </v-btn>
              <!-- <v-spacer></v-spacer>
              <span class="rate-text"> قيم الآن واحصل على 5 نقاط </span> -->
            </v-card-actions>
          </v-sheet>
        </v-col>
      </v-tab-item>
      <!-- cancelled order  -->
      <v-tab-item
        style="height: calc(100vh - 100px); overflow-y: scroll"
        value="tab-4"
        class="pa-2 px-3"
      >
        <v-col cols="12" class="pa-1 px-0">
          <v-sheet rounded class="pa-1 px-2">
            <v-card-actions class="pa-0 align-center">
              <v-card-text class="pa-1 store-name">
                <v-icon right>mdi-store-outline </v-icon>
                وقت العطور
              </v-card-text>
              <v-btn icon>
                <v-icon class="green--text" size="20">mdi-message </v-icon>
              </v-btn>
            </v-card-actions>
            <v-card
              v-for="i in 3"
              :key="i"
              style="display: flex"
              class="pa-1 mb-1 grey lighten-4"
              flat
            >
              <v-list-item three-line class="px-0">
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
                    <v-chip-group column>
                      <v-chip v-for="i in 5" :key="i" x-small class="">
                        (15 - 18)
                      </v-chip>
                    </v-chip-group>
                  </v-list-item-subtitle>
                  <v-list-item-title class="price pt-0 pa-2 red--text">
                    10254<span class="mr-1">ريال</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- <v-card-title class="recount pa-0 pr-2 grey--text text--darken-1">
                *عدد (<span>55</span>)
              </v-card-title> -->
            </v-card>
            <v-card-actions class="pa-2 px-0">
              <v-btn block elevation="0" class="btn1"> الشراء مجدداً </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-col>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "SmallScreenClientOrderPage",
  components: {},
  data() {
    return {
      text: "هل أنت متأكد من حذف الأعلان.",
      tab: null,
    };
  },
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.hasSaved = true;
    },
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.UserAdd {
  width: 100%;
  // padding: $padding;
  height: 100vh;
  background-color: #eee;
  .title {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    color: $fontcolor;
    font-size: 16px !important;
  }
  .recount {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    color: $fontcolor;
    font-size: 14px !important;
  }
  .price {
    font-family: sans-serif !important;
    // letter-spacing: 0;
    color: $color-2;
    font-size: 17px !important;
    font-weight: 700;
  }
  .links {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    // font-weight: 600;
    font-size: 15px !important;
    color: $fontcolor !important;
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

  .btn1 {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    color: $fontcolorlinks;
  }
  .btn2 {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 13px !important;
    color: $fontcolorlinks;
    background-color: transparent !important;
    border: 1px solid rgb(222, 222, 222);
  }
  .rate-text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    // font-weight: 500 !important;
    font-size: 14px !important;
  }
  // .oreder-CANCELLED {
  //   font-family: $fontfamliy3 !important;
  //   letter-spacing: 0;
  //   font-weight: 500 !important;
  //   font-size: 16px !important;
  //   color: #ffffff !important;
  //   background-color: #e53935;
  // }
}
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
.stepper-Info {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  color: $fontcolorlinks !important;
  text-align: center;
}
::v-deep span.v-stepper__step__step.primary {
  background-color: $color-2 !important;
  border-color: $color-2 !important;
}
::v-deep .theme--light.v-stepper .v-stepper__step--complete .v-stepper__label {
  color: $color-2 !important;
}
::v-deep .theme--light.v-tabs .v-tab:hover:before {
  opacity: 0 !important;
}
::v-deep span.v-stepper__step__step {
  margin-left: 0;
  margin-bottom: 10px;
}
</style>
