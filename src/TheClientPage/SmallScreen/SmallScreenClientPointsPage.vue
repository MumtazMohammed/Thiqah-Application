<template>
  <div class="SmallScreenClientPointsPage grey lighten-4">
    <v-app-bar flat class="" app>
      <v-toolbar-title class="toolbar-title">
        <v-avatar class="ml-1" size="40" color="transparent">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/dailycheckin/efa54441c1dd47a845e8c3572f1b65bf.png"
            alt="alt"
          />
        </v-avatar>
        النقاط
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon size="30">mdi-arrow-left-thin</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet height="56"></v-sheet>
    <v-container>
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
      <v-sheet class="transparent">
        <v-card-text class="get-text py-2">
          كيفية الحصول على عملات مجانية
        </v-card-text>
        <v-card flat class="pa-1 my-1">
          <v-row
            justify="space-between"
            style="height: 100%"
            align="center"
            no-gutters
          >
            <v-col class="text-center" cols="auto">
              <span size="30" class="Num-List pr-2">1</span>
            </v-col>
            <v-col cols="8">
              <v-card-text class="card-text pa-0">
                قم بدعوة أشخاص جدد لتسجيل على موقعنا واحصل على
                <span>30</span> عملة من خلال رابطك الخاص
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="text-center">
              <v-btn
                tile
                text
                color="amber darken-2"
                class="get-points-btn px-0"
              >
                الرابط
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat class="pa-1 my-1">
          <v-row
            justify="space-between"
            style="height: 100%"
            align="center"
            no-gutters
          >
            <v-col class="text-center" cols="auto">
              <span size="30" class="Num-List pr-2">2</span>
            </v-col>
            <v-col cols="8">
              <v-card-text class="card-text pa-0">
                قم بترويج بعض المنتجات وأحصل على عملات تفوق حتى<span>300</span>
                عملة عند قيام الطرف الثالث في الشراء
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="text-center">
              <v-btn
                text
                tile
                color="amber darken-2 "
                class="get-points-btn px-1"
              >
                الرابط
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-card flat class="pa-1 my-1">
          <v-row
            style="height: 100%"
            justify="space-between"
            align="center"
            no-gutters
          >
            <v-col class="text-center" cols="auto">
              <span size="30" class="Num-List pr-2">3</span>
            </v-col>
            <v-col cols="8">
              <v-card-text class="card-text pa-0">
                قم بمتابعة بعض المتاجر وأحصل على
                <span>10</span>
                عملات مجانية
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="text-center">
              <v-btn tile text color="amber darken-2">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-sheet>
      <v-sheet rounded="lg" class="grey lighten-3 mt-2 overflow-hidden">
        <v-tabs
          v-model="tab"
          slider-color="amber "
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
        <v-tabs-items v-model="tab" class="amber lighten-5">
          <!-- All hostry  -->
          <v-tab-item value="tab-1" style="min-height: 190px" class="pa-2">
            <v-card flat class="overflow-hidden py-0 pa-2">
              <v-list-item dense three-line class="pa-0">
                <v-avatar tile size="50" color="grey lighten-3">1</v-avatar>
                <v-list-item-content class="pa-1 pr-2">
                  <v-list-item-title class="text-all">
                    محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                    شمسان
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-truncate d-block text-all">
                    محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                  </v-list-item-subtitle>
                  <v-list-item-subtitle style="font-family: sans-serif">
                    05 / 08 /2022
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-avatar tile size="40" color="transparent">
                  <span style="font-size: 16px">+</span>
                  <span class="mr-1" style="font-size: 15px">5</span>
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
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SmallScreenClientPointsPage",
  components: {},
  data() {
    return {
      tab: null,
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
.SmallScreenClientPointsPage {
  width: 100%;
  min-height: calc(100vh - 40px);

  .toolbar-title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolor !important;
    font-size: 16px !important;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .get-text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px;
    font-size: 14px !important;
    // color: $fontcolor !important;
    font-weight: 600 !important;
    pointer-events: none;
    text-align: center;
  }
}
.links {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-weight: 600;
  font-size: 14px !important;
}
.get-points-btn {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px;
  color: $fontcolorsm !important;

  // font-weight: 600 !important;
  // font-size: 14px !important;
}
.points-No-text-total {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0px;
  font-weight: 600 !important;
  font-size: 16px !important;
  color: $fontcolor !important;
  pointer-events: none;
}
.Num-List {
  color: $fontcolor !important;
  pointer-events: none;
  font-weight: 600 !important;
  font-size: 16px !important;
  display: block;
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
::v-deep .pa-0.v-list-item.v-list-item--three-line.theme--light {
  min-height: 55px !important;
}
</style>
