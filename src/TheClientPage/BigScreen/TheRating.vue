<template>
  <div class="TheClientCartPage overflow-hidden">
    <v-tabs
      class="overflow-hidden"
      background-color="#fc624d"
      hide-slider
      v-model="tab"
      grow
    >
      <v-tab
        active-class="font-weight-bold"
        class="text-all white--text"
        href="#tab-1"
      >
        تقييمي
      </v-tab>
      <v-tab
        active-class="font-weight-bold"
        class="text-all white--text"
        href="#tab-2"
      >
        لم يقييم
      </v-tab>
    </v-tabs>
    <v-tabs-items style="height: 100%" v-model="tab" class="transparent">
      <v-tab-item value="tab-1">
        <v-row no-gutters>
          <v-col class="pa-2" v-for="item in 2" :key="item">
            <v-sheet rounded="lg" class="pa-2">
              <v-row
                align="center"
                justify="center"
                no-gutters
                class="mb-2 store-name"
              >
                <v-avatar class="profile ml-2" color="transparent" size="25">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-avatar>
                <span> عبد الصمد </span>
                <v-spacer></v-spacer>
                <span>15 / 01 / 2022</span>
              </v-row>
              <v-card flat class="mb-2">
                <v-row align="center" no-gutters class="pa-0">
                  <v-img
                    contain
                    max-width="60"
                    src="@/assets/Mazda/mazda1.jpg"
                    alt="@/assets/Hyundai/image2.jpg"
                  ></v-img>

                  <span class="recount d-block pr-2 grey--text text--darken-2">
                    مـازدا مازدا3
                  </span>
                </v-row>
              </v-card>
              <v-card flat class="grey lighten-5 pa-1 mb-1">
                <v-row
                  align="center"
                  justify="center"
                  no-gutters
                  class="store-name"
                >
                  <v-avatar
                    tile
                    class="profile ml-2"
                    color="transparent"
                    size="25"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                  <span> أسم المشتري </span>
                  <v-spacer></v-spacer>
                  <v-rating
                    color="warning"
                    dense
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    length="5"
                    readonly
                    size="15"
                    value="4"
                  ></v-rating>
                </v-row>
                <v-card-text class="seller-com pa-1">
                  إذا كنت تريد تصميم صفحة ويب أو موقع إلكتروني يجب عليك أولاً
                  تعلم كتابة الأكواد الأساسية قبل الشروع في كتابة الأوامر
                  والأكواد الثانوية.
                </v-card-text>
              </v-card>
              <v-card flat class="grey pa-1 lighten-4">
                <v-row align="center" no-gutters class="store-name">
                  <v-avatar
                    tile
                    class="profile ml-2"
                    color="transparent"
                    size="25"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                  <span> أسم المتجر </span>
                </v-row>
                <v-card-text class="seller-com pa-1">
                  إذا كنت تريد تصميم صفحة ويب أو موقع إلكتروني يجب عليك أولاً
                  تعلم كتابة الأكواد الأساسية قبل الشروع في كتابة الأوامر
                  والأكواد الثانوية.
                </v-card-text>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-2"> </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "TheClientCartPage",
  data() {
    return {
      checkbox: 0,
      value: "recent",
      tab: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.TheClientCartPage {
  width: 100%;
  min-height: 100vh;
  // padding: $padding;
  background-color: #eeeeee;
  // border: 1px solid #607d8b !important;
  .toolbar-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolorlinks !important;
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

  .recount {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    color: $fontcolor;
    font-size: 13px !important;
    font-weight: 600;
  }

  .store-name {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0;
    font-weight: 500 !important;
    font-size: 14px !important;
    color: $fontcolor;
    .v-icon {
      color: $color-2 !important;
      font-size: 20px !important;
    }
  }
  .seller-com {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    line-height: 1.5;
    font-size: 14px !important;
    color: #757575 !important;
  }
}
.text-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-size: 17px;
}
::v-deep
  button.v-icon.notranslate.v-icon--link.mdi.mdi-star-outline.theme--light.accent--text {
  color: grey !important;
}
</style>
