<template>
  <div class="ContactSeller grey lighten-5">
    <TheNavBar />
    <v-container class="pa-1 py-0">
      <v-row no-gutters>
        <v-col class="pa-1 transparent" cols="12" md="8" lg="8">
          <!-- here the product img  -->
          <v-dialog
            class="overflow--hidden"
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-banner
                color="white"
                class="my-auto"
                style="overflow: hidden; position: relative"
              >
                <v-carousel
                  v-model="customerIMageNo"
                  delimiter-icon="mdi-minus"
                  class="align-center"
                  height="auto"
                >
                  <v-carousel-item
                    v-for="(singleImage, x) in getCarInfo.images"
                    :key="x"
                  >
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      aspect-ratio="1.7"
                      :src="getimageUrl(getCarInfo.folder, singleImage)"
                    >
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
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
                height="80vh"
                width="100%"
                touch
                hide-delimiters
                class="overflow--hidden px-1"
              >
                <v-carousel-item
                  v-for="(singleImage, x) in getCarInfo.images"
                  :key="x"
                >
                  <v-img
                    height="80vh"
                    contain
                    :src="getimageUrl(getCarInfo.folder, singleImage)"
                  >
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-dialog>
          <!-- here the product seller info & price  -->
          <v-col class="pa-0 hidden-md-and-up" cols="12" md="4" lg="4">
            <v-card tile flat width="100%">
              <v-row no-gutters>
                <v-col cols="12" class="pa-2">
                  <v-row no-gutters justify="space-between">
                    <p class="ma-0 price">
                      {{ getCarInfo.payment }}
                      <span> ريال </span>
                    </p>
                    <v-card-actions class="pa-0">
                      <v-btn icon class="" color="grey darken-3">
                        <v-icon size="20">mdi-heart-outline</v-icon>
                      </v-btn>
                      <v-btn icon class="mr-0" color="grey darken-3 ">
                        <v-icon size="20">mdi-share</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <!-- info  -->
            <v-card tile flat width="100%" class="">
              <v-row no-gutters align="center" class="pa-2">
                <v-col cols="auto" class="text-center my-auto">
                  <v-avatar rounded="lg" size="40" color="grey">
                    <!-- <img src="src" alt="alt"> -->
                  </v-avatar>
                </v-col>
                <v-col cols="6" class="pr-2">
                  <p class="ma-0 text-for-all">محمد أمين شمسان</p>
                  <p class="ma-0 text-for-all">بائع شخصي</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="auto" class="text-center">
                  <v-btn tile small class="text" depressed block> أتصال </v-btn>
                  <v-btn tile small class="text mt-1" depressed block>
                    وتس آب
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
            <v-row no-gutters>
              <v-col cols="12" md="4" lg="4" sm="4">
                <v-card flat width="100%" tile>
                  <v-list dense class="py-1">
                    <v-list-item class="px-1 py-0">
                      <v-icon color="green accent-4" size="22">
                        mdi-shield-check
                      </v-icon>
                      <v-list-item-content class="pa-0 pr-2">
                        <v-list-item-title class="Guarantee-text">
                          مــوثق
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item one-line class="px-1 py-0">
                      <v-icon color="deep-orange darken-1" size="22">
                        mdi-map-marker-radius
                      </v-icon>
                      <v-list-item-content class="pa-0 pr-2">
                        <v-list-item-title class="Guarantee-text">
                          اليمن - تعز
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item one-line class="px-1 py-0">
                      <v-icon color="yellow darken-1" size="22">
                        mdi-credit-card
                      </v-icon>
                      <v-list-item-content class="pa-0 pr-2">
                        <v-list-item-title class="Guarantee-text">
                          <v-row
                            no-gutters
                            align="center"
                            justify="space-between"
                          >
                            1235454812
                            <v-btn
                              height="30"
                              class="text"
                              text
                              color="red lighten-1"
                              style="float: left"
                            >
                              إبـلاغ
                            </v-btn>
                          </v-row>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" class="pa-2 amber lighten-5">
                <p class="mb-1">نصائح عامة</p>
                <ul class="px-6 text">
                  <li>اجتمع في الأماكن العامة فقط.</li>
                  <li>لا تقم بإرسال المال مسبقاً.</li>
                  <li>قم بتفقد المنتج جيداً قبل شرائه.</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <!-- here the product car info & price  -->
          <v-sheet>
            <v-row no-gutters>
              <v-col cols="12" class="pa-2">
                <p class="ProductName ma-0">المعلومات</p>
              </v-col>
              <v-col cols="12" md="6" lg="6" sm="6">
                <ul class="px-1 text hidden-sm-and-up" style="list-style: none">
                  <li v-for="(info, i) in infoCar" :key="i" class="pa-1 table">
                    <v-row justify="space-between" no-gutters>
                      <span>
                        {{ info.Title }}
                        :
                      </span>
                      <span>
                        {{ info.detail }}
                      </span>
                    </v-row>
                  </li>
                </ul>
                <ul class="px-1 text hidden-xs-only" style="list-style: none">
                  <li
                    v-for="(info, i) in infoCarOne"
                    :key="i"
                    class="pa-1 table"
                  >
                    <v-row justify="space-between" no-gutters>
                      <span>
                        {{ info.Title }}
                        :
                      </span>
                      <span>
                        {{ info.detail }}
                      </span>
                    </v-row>
                  </li>
                </ul>
              </v-col>
              <v-col class="hidden-xs-only" cols="12" md="6" lg="6" sm="6">
                <ul class="px-1 text" style="list-style: none">
                  <li
                    v-for="(info, i) in infoCarTwo"
                    :key="i"
                    class="pa-1 table"
                  >
                    <v-row justify="space-between" no-gutters>
                      <span>
                        {{ info.Title }}
                        :
                      </span>
                      <span>
                        {{ info.detail }}
                      </span>
                    </v-row>
                  </li>
                </ul>
              </v-col>
              <v-col cols="12">
                <ul class="pa-1 text" style="list-style: none">
                  <li class="pa-1 table">
                    <v-row justify="space-between" no-gutters>
                      <span class="mb-1 font-weight-bold">
                        مواصفات خارجية :
                      </span>
                      <span>
                        جنطات المنيوم , ABS , أضوية LED , إطار احتياطي , حساس
                        ضغط الاطارات , حساسات اصطفاف , فتحة بانوراما , كاميرا
                        360° , كاميرا خلفية , مانع انزلاق , نسخة رياضية , نظام
                        تتبع
                      </span>
                    </v-row>
                  </li>
                  <li class="pa-1 table">
                    <v-row justify="space-between" no-gutters>
                      <span class="mb-1 font-weight-bold">
                        مواصفات داخلية :
                      </span>
                      <span>
                        أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                        سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل
                        AUX/USB , مرايا كهربائية , مقاعد مبردة , مكيف , نظام
                        إنذار , نظام ملاحة
                      </span>
                    </v-row>
                  </li>
                  <li class="pa-1 table">
                    <v-row justify="space-between" no-gutters>
                      <span class="mb-1 font-weight-bold"> الوصف : </span>
                      <span>
                        أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                        سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل
                        AUX/USB , مرايا كهربائية , مقاعد مبردة , مكيف , نظام
                        إنذار , نظام ملاحة
                        <br />
                        <br />
                        <br />
                        أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                        سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل
                        AUX/USB , مرايا كهربائية , مقاعد مبردة , مكيف , نظام
                        إنذار , نظام ملاحة
                        <br />
                        <br />
                        أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                        سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل
                        AUX/USB , مرايا كهربائية , مقاعد مبردة , مكيف , نظام
                        إنذار , نظام ملاحة
                      </span>
                    </v-row>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <!-- here the product seller info & price  -->
        <v-col class="pa-1 hidden-sm-and-down" cols="12" md="4" lg="4">
          <v-card flat width="100%">
            <v-col cols="12" class="pa-2">
              <p class="ma-0 price text-center">
                {{ getCarInfo.payment }}
                <span> ريال </span>
              </p>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-btn class="text" depressed block> أتصال </v-btn>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-btn class="text" depressed block> وتس آب </v-btn>
            </v-col>
            <v-col cols="12" class="pa-2">
              <p class="mb-0">نصائح عامة</p>
              <ul class="px-6 text">
                <li>اجتمع في الأماكن العامة فقط.</li>
                <li>لا تقم بإرسال المال مسبقاً.</li>
                <li>قم بتفقد المنتج جيداً قبل شرائه.</li>
              </ul>
            </v-col>
          </v-card>
          <v-card flat width="100%" class="mt-2">
            <v-row no-gutters class="pa-1">
              <v-col cols="auto" class="text-center my-auto">
                <v-avatar size="45" color="blue">
                  <!-- <img src="src" alt="alt"> -->
                </v-avatar>
              </v-col>
              <v-col cols="10" class="pr-1">
                <p class="mb-1 text-for-all">محمد أمين شمسان</p>
                <v-card-subtitle class="my-1 text-end pa-0 grey--text">
                  20 / 10 / 2022
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
          <!-- add number & trusred  -->
          <v-card flat width="100%" class="mt-2">
            <v-list>
              <v-list-item one-line class="px-1 py-0">
                <v-icon color="green accent-4" size="22">
                  mdi-shield-check
                </v-icon>
                <v-list-item-content class="pa-0 pr-2">
                  <v-list-item-title class="Guarantee-text">
                    مــوثق
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item one-line class="px-1 py-0">
                <v-icon color="deep-orange darken-1" size="22">
                  mdi-map-marker-radius
                </v-icon>
                <v-list-item-content class="pa-0 pr-2">
                  <v-list-item-title class="Guarantee-text">
                    اليمن - تعز
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item one-line class="px-1 py-0">
                <v-icon color="yellow darken-1" size="22">
                  mdi-credit-card
                </v-icon>
                <v-list-item-content class="pa-0 pr-2">
                  <v-list-item-title class="Guarantee-text">
                    <v-row no-gutters align="center" justify="space-between">
                      1235454812
                      <v-btn
                        height="30"
                        class="text"
                        text
                        color="red lighten-1"
                        style="float: left"
                      >
                        إبـلاغ
                      </v-btn>
                    </v-row>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <!-- here the more product   -->
        <v-col cols="12" class="pa-2">
          <p class="ma-0 ProductName">منتجات ذات صلة</p>
        </v-col>
        <v-col
          cols="6"
          md="3"
          sm="4"
          lg="2"
          class="pa-2"
          v-for="Product in GetCarData"
          :key="Product.id"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :to="{
                name: 'ShowroomCarItemDetail',
                params: {
                  carName: Product.name,
                  carShape: Product.Shape,
                  carId: Product.id,
                  Company: Product.folder,
                },
              }"
              :elevation="hover ? 3 : 0"
              min-height="290"
              width="100%"
              rounded="lg"
              style="position: relative"
            >
              <h1 class="ribbon">
                {{ Product.payment }}
                <v-icon color="white" size="19"> mdi-currency-rial </v-icon>
              </h1>
              <v-card
                flat
                rounded="b-0 t-lg"
                style="overflow: hidden; height: 150px; width: 100%"
              >
                <v-img
                  height="150"
                  :src="getimageUrl(Product.folder, Product.image)"
                ></v-img>
              </v-card>

              <!--  product name  -->
              <v-card-text class="card-text pb-1 pa-2">
                التيما 2020 استاندر للمستخدم الي يبي شي بدون اعطال واخو الجديد
                يخدمه
              </v-card-text>
              <!--  product name  -->
              <v-card-text class="text text-truncate pa-2">
                {{ Product.company }} - {{ Product.name }} -
                {{ Product.modle }}
              </v-card-text>
              <v-row
                class="pa-2"
                no-gutters
                align="center"
                justify="space-between"
              >
                <div class="text d-flex align-center text-truncate">
                  <v-icon size="18" color="grey darken-1" right>
                    mdi-speedometer
                  </v-icon>
                  <span>
                    {{ Product.kilometer }}
                  </span>
                </div>
                <span class="text text-truncate">
                  {{ Product.location }}
                </span>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CarData from "@/data-json/All-Car.json";
import TheNavBar from "@/NavBar/TheNavBar.vue";

export default {
  name: "ShowroomCarItemDetail",
  components: { TheNavBar },
  data() {
    return {
      rating: 4.5,
      dialog: false,
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      ShowPriceOption: true,
      ShowContac: false,
      infoCar: [
        { Title: " النوع ", detail: " إجابه " },
        { Title: " الفئة ", detail: " إجابه " },
        { Title: " سنة الصنع ", detail: " إجابه " },
        { Title: " مواصفات إقليمية  ", detail: " إجابه " },
        { Title: " نوع ناقل الحركة ", detail: " إجابه " },
        { Title: " نوع الوقود ", detail: " إجابه " },
        { Title: " اللون ", detail: " إجابه " },
        { Title: " الحالة ", detail: " إجابه " },
        { Title: " الكيلومترات ", detail: " إجابه " },
        { Title: " الدهان ", detail: " إجابه " },
        { Title: " حالة الهيكل ", detail: " إجابه " },
        { Title: "  طريقة الدفع ", detail: " إجابه " },
        { Title: " المدينة ", detail: " إجابه " },
        { Title: " الحي / المنطقة ", detail: " إجابه " },
        { Title: " القسم الرئيسي ", detail: " إجابه " },
        { Title: "  القسم الفرعي ", detail: " إجابه " },
      ],
      infoCarOne: [
        { Title: " النوع ", detail: " إجابه " },
        { Title: " سنة الصنع ", detail: " إجابه " },
        { Title: " نوع ناقل الحركة ", detail: " إجابه " },
        { Title: " اللون ", detail: " إجابه " },
        { Title: " الكيلومترات ", detail: " إجابه " },
        { Title: " حالة الهيكل ", detail: " إجابه " },
        { Title: " المدينة ", detail: " إجابه " },
        { Title: " القسم الرئيسي ", detail: " إجابه " },
      ],
      infoCarTwo: [
        { Title: " الفئة ", detail: " إجابه " },
        { Title: " مواصفات إقليمية  ", detail: " إجابه " },
        { Title: " نوع الوقود ", detail: " إجابه " },
        { Title: " الحالة ", detail: " إجابه " },
        { Title: " الدهان ", detail: " إجابه " },
        { Title: "  طريقة الدفع ", detail: " إجابه " },
        { Title: " الحي / المنطقة ", detail: " إجابه " },
        { Title: "  القسم الفرعي ", detail: " إجابه " },
      ],
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
.logo-text {
  font-family: $fontfamliy3;
  color: #00b8d4 !important;
  font-weight: 700 !important;
  font-size: 17px !important;
}
a {
  text-decoration: none;
}
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
  font-size: 25px !important;
  font-weight: 600 !important;
  color: $fontcolor;
  font-family: sans-serif !important;
  font-weight: 700 !important;
  @media (max-width: 600px) {
    font-size: 20px !important;
  }
  @media (max-width: 350px) {
    font-size: 18px !important;
  }
}

p {
  font-family: $fontfamliy3 !important;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 450px) {
    font-size: 14px !important;
  }
}
.text-for-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  // margin: 0 auto !important;
  font-weight: 500;
  font-size: 15px !important;
  @media (max-width: 450px) {
    font-size: 14px !important;
  }
}
.text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 13.5px !important;
  }
}
.promotion-card {
  position: relative;
}

.Guarantee-text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  line-height: 1.7 !important;
  @media (max-width: 600px) {
    font-size: 14px !important;
    line-height: 1.4 !important;
  }
}
.Guarantee-text-tow {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  line-height: 1.5;
}
::v-deep .v-banner__wrapper {
  padding: 0 0.1px !important;
}
::v-deep .v-banner__content {
  padding: 0px !important;
}
::v-deep .v-image.v-responsive.theme--light {
  align-items: center;
}
::v-deep .v-image.v-responsive.img.theme--light {
  align-items: center !important;
}
::v-deep .v-carousel__controls {
  height: 35px;
  @media (max-width: 960px) {
  }
}
::v-deep .v-carousel__controls__item {
  margin: 0 !important;
}
.table:nth-child(odd) {
  background-color: #fafafa;
}
.table-2:nth-child(even) {
  background-color: #f5f5f5;
}
.card-text {
  font-family: $fontfamliy3 !important;
  color: $fontcolor !important;
  letter-spacing: 0 !important;
  font-weight: 700;
  font-size: 13px !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 617px) {
    font-size: 13px !important;
  }
}

.ribbon {
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 1;
  padding: 0 5px;
  min-width: 60px;
  text-align: center;
  font-size: 17px !important;
  color: $fontcolorsm;
  font-weight: 600 !important;
  font-family: sans-serif !important;
  letter-spacing: 0 !important;
  border-radius: 2px 0px 0px 2px !important;
  background: linear-gradient(140deg, #fc624d 0%, #ff8a65 100%);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.ribbon:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.5em;
  height: 100%;
  padding: 0 0 32px 0px !important;
  top: 0;
  right: -0.51em;
  background: #ff8a65;
  border-radius: 0px 5px 5px 0px !important;
}

.ribbon:after {
  position: absolute;
  content: "";
  display: block;
  width: 0.313em;
  height: 0.313em;
  background: rgba(0, 0, 0, 0.35);
  bottom: -0.313em;
  right: -0.3em;
  border-radius: 0px 5px 5px 0px !important;
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>
