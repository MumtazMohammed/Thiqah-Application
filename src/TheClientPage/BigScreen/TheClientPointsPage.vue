<template>
  <div class="UserAdd pa-2">
    <v-sheet class="" width="100%" rounded="lg" flat>
      <v-card-text class="points-No-text-total text-center">
        مكافآت العملات المعدنية
      </v-card-text>
      <v-row justify="center" align="center" no-gutters class="mb-3">
        <span class="points-No-total"> 8 </span>
        <v-avatar class="mr-3" size="50" color="transparent">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/dailycheckin/efa54441c1dd47a845e8c3572f1b65bf.png"
            alt="alt"
          />
        </v-avatar>
      </v-row>
      <v-row no-gutters justify="center">
        <v-btn depressed class="get-points-btn amber">
          انقر هنا للحصول على عملة 1 مجانية
        </v-btn>
      </v-row>
      <v-card-text class="get-text amber--text">
        1 نقطة تساوي 50 ريال
      </v-card-text>
    </v-sheet>
    <v-sheet rounded="lg" class="mt-2 pb-1">
      <v-card-text class="get-text">
        كيفية الحصول على عملات مجانية
      </v-card-text>
      <v-card tile flat class="ma-2" height="50">
        <v-row style="height: 100%" align="center" no-gutters>
          <v-col class="text-center" cols="auto">
            <span size="30" class="Num-List pr-2">1</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9">
            <v-card-text class="card-text pa-0">
              قم بدعوة أشخاص جدد لتسجيل على موقعنا واحصل على
              <span>30</span> عملة من خلال رابطك الخاص
            </v-card-text>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2" class="text-center">
            <v-btn text tile class="get-points-btn"> الرابط </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card tile flat class="ma-2" height="50">
        <v-row style="height: 100%" align="center" no-gutters>
          <v-col class="text-center" cols="auto">
            <span size="30" class="Num-List pr-2">2</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9">
            <v-card-text class="card-text pa-0">
              قم بترويج بعض المنتجات وأحصل على عملات تفوق حتى<span>300</span>
              عملة عند قيام الطرف الثالث في الشراء
            </v-card-text>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2" class="text-center">
            <v-btn text tile class="get-points-btn"> الرابط </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card tile flat class="ma-2" height="50">
        <v-row style="height: 100%" align="center" no-gutters>
          <v-col class="text-center" cols="auto">
            <span size="30" class="Num-List pr-2">3</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9">
            <v-card-text class="card-text pa-0">
              قم بمتابعة بعض المتاجر وأحصل على
              <span>10</span>
              عملات مجانية
            </v-card-text>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2" class="text-center">
            <v-btn text tile color="black">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
    <v-sheet rounded="lg" class="grey lighten-3 mt-2 overflow-hidden">
      <v-tabs
        v-model="tab"
        slider-color="#fc624d"
        class="overflow-hidden"
        centered
        grow
      >
        <v-tab href="#tab-1" active-class="black--text" class="links">
          كل السجل
        </v-tab>
        <v-tab href="#tab-2" active-class="black--text" class="links">
          أكتسبت
        </v-tab>
        <v-tab href="#tab-3" active-class="black--text" class="links">
          أنفقت
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="">
        <!-- All hostry  -->
        <v-tab-item value="tab-1" style="min-height: 190px" class="pa-2">
          <v-card flat class="overflow-hidden grey lighten-5">
            <v-list-item dense class="pa-0">
              <v-avatar size="50" color="grey lighten-1">1</v-avatar>
              <v-list-item-content class="pa-0 pr-2">
                <v-list-item-title class="text-all ma-0">
                  محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                  شمسان
                </v-list-item-title>
                <v-list-item-subtitle
                  class="text-truncate d-block ma-0 text-all"
                >
                  محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                </v-list-item-subtitle>
                <v-list-item-subtitle> 05 / 08 /2022 </v-list-item-subtitle>
              </v-list-item-content>
              <v-avatar tile size="40" color="transparent">
                <span style="font-size: 18px">+</span>
                <span class="mr-1" style="font-size: 18px">5</span>
              </v-avatar>
            </v-list-item>
          </v-card>
        </v-tab-item>
        <!-- earned coins  -->
        <v-tab-item style="min-height: 190px" value="tab-2" class="pa-2">
          <v-sheet
            height="170px"
            class="d-flex text-all justify-center align-center"
          >
            لا يوجد
          </v-sheet>
        </v-tab-item>
        <!-- spended coins  -->
        <v-tab-item style="min-height: 190px" value="tab-3" class="pa-2">
          <v-sheet
            height="170px"
            class="d-flex text-all justify-center align-center"
          >
            لا يوجد
          </v-sheet>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "UserAdd",
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
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.UserAdd {
  width: 100%;
  min-height: calc(100vh - 40px);
  .toolbar-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0.5px;
    color: $fontcolorlinks !important;
    font-size: 16px !important;
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
  .get-text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px;
    font-size: 15px !important;
    // color: $fontcolor !important;
    font-weight: 600 !important;
    pointer-events: none;
  }
}
.links {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  // font-weight: 600;
  font-size: 14px !important;
}
.get-points-btn {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px;
  // font-weight: 600 !important;
  // font-size: 14px !important;
  color: $fontcolor !important;
}
.points-No-text-total {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px;
  font-weight: 600 !important;
  font-size: 16px !important;
  color: $fontcolor !important;
  pointer-events: none;
}
.points-No-total {
  font-weight: 600 !important;
  font-size: 45px !important;
  color: $fontcolor;
  pointer-events: none;
}
.points-link {
  color: $fontcolor !important;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  pointer-events: none;
  // margin: 0 10px;
}
.points-link-copy {
  font-size: 16px !important;
  letter-spacing: 0.5px;
  font-family: $fontfamliy3 !important;
}
.card-text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-weight: 500 !important;
  font-size: 15px !important;
  color: $fontcolor;
  text-align: justify !important;
  line-height: 1.5 !important;
  span {
    font-family: sans-serif !important;
    font-size: 15px !important;
    letter-spacing: 0.5px;
    font-weight: 700 !important;
    margin: 0 3px;
    text-decoration: underline;
  }
}
.text-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
}
.Num-List {
  color: $fontcolor !important;
  pointer-events: none;
  font-weight: 600 !important;
  font-size: 16px !important;
  display: block;
}
</style>
