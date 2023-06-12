<template>
  <div class="ContactSeller grey lighten-5">
    <TheNavBar />
    <v-container class="pa-1 px-2">
      <v-row no-gutters>
        <!-- image and info  -->
        <v-col cols="12" md="8" lg="8" sm="8" class="pa-1">
          <v-row no-gutters>
            <v-col cols="12">
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
                <v-card
                  flat
                  tile
                  color="grey darken-4"
                  class="overflow--hidden"
                >
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
            </v-col>
            <v-sheet color="">
              <v-col cols="12" class="pa-2">
                <v-row no-gutters justify="space-between">
                  <p class="ma-0 price">
                    {{ getCarInfo.payment }}
                    <span> ريال </span>
                  </p>
                  <v-card-actions class="pa-0">
                    <v-btn icon class="blue-grey lighten-5">
                      <v-icon size="20" color="grey darken-3"
                        >mdi-heart-outline</v-icon
                      >
                    </v-btn>
                    <v-btn icon class="blue-grey lighten-5">
                      <v-icon size="20" color="grey darken-3">mdi-share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-col>
              <v-col cols="12" class="pa-2 pt-0">
                <v-list-item class="px-0" three-line>
                  <v-list-item-content class="py-0">
                    <!-- Add title  -->
                    <v-list-item-title class="text-all my-2">
                      اسم الاعلان
                    </v-list-item-title>
                    <!-- location  -->
                    <v-list-item-title class="text-all my-2">
                      عنوان كامل
                    </v-list-item-title>

                    <!-- realEstate info  -->
                    <v-list-item-action
                      class="ma-0 mt-2"
                      style="flex-direction: row; justify-content: start"
                    >
                      <!-- room  -->
                      <div class="ml-3">
                        <v-icon size="22" color="grey darken-3">
                          mdi-bed
                        </v-icon>
                        <span class="span mr-2">3.5</span>
                      </div>
                      <!-- bathroom  -->
                      <div class="mx-3">
                        <v-icon size="22" color="grey darken-3">
                          mdi-shower
                        </v-icon>
                        <span class="span mr-2">3.5</span>
                      </div>
                      <!-- size  -->
                      <div class="mx-3">
                        <v-icon size="22" color="grey darken-3">
                          mdi-wall
                        </v-icon>
                        <span class="span mr-2">3.5</span>
                      </div>
                    </v-list-item-action>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="px-0 mt-2" four-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title class="card-text my-1">
                      <span class="font-weight-bold"> تعيين المعلن </span>
                      :
                      <span> مفوض </span>
                    </v-list-item-title>
                    <v-list-item-title class="card-text my-1">
                      <span class="font-weight-bold"> رقم تسجيل المعلن </span>
                      :
                      <span class="span"> 123456 </span>
                    </v-list-item-title>
                    <v-list-item-title class="card-text my-1">
                      <span class="font-weight-bold"> رقم ترخيص المعلن </span>
                      :
                      <span class="span"> 123456 </span>
                    </v-list-item-title>
                    <v-list-item-title class="card-text my-1">
                      <span class="font-weight-bold"> رقم التفويض </span>
                      :
                      <span class="span"> 123456 </span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" class="text-for-all">
                <span class="mb-1 d-block font-weight-bold"> الوصف : </span>
                <span>
                  أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                  سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل AUX/USB ,
                  مرايا كهربائية , مقاعد مبردة , مكيف , نظام إنذار , نظام ملاحة
                  <br />
                  <br />
                  <br />
                  أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                  سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل AUX/USB ,
                  مرايا كهربائية , مقاعد مبردة , مكيف , نظام إنذار , نظام ملاحة
                  <br />
                  <br />
                  أكياس هوائية , بلوتوث , دخول بدون مفتاح , زجاج كهربائي ,
                  سنترلوك , شاشة لمس , كراسي جلد , مثبت سرعة , مدخل AUX/USB ,
                  مرايا كهربائية , مقاعد مبردة , مكيف , نظام إنذار , نظام ملاحة
                </span>
              </v-col>
            </v-sheet>
          </v-row>
        </v-col>
        <!--  -->
        <v-col cols="12" md="4" lg="4" sm="4" class="pa-1">
          <v-row no-gutters>
            <!-- Advertiser information -->
            <v-col cols="12">
              <v-card flat width="100%" class="">
                <v-row no-gutters class="pa-2">
                  <v-col cols="auto" class="text-center my-auto">
                    <v-avatar size="60" color="grey">
                      <!-- <img src="src" alt="alt"> -->
                    </v-avatar>
                  </v-col>
                  <v-col cols="auto" class="pr-2">
                    <p class="my-1 grey--text text--darken-2 text-for-all">
                      <span class="black--text"> صاحب الملكية </span>
                      : شركة ثقة التجارية
                    </p>
                    <p class="my-1 grey--text text--darken-2 text-for-all">
                      <span class="black--text"> وكيل العقار </span>
                      : شركة ثقة التجارية
                    </p>
                  </v-col>
                  <v-col
                    style="border-top: 1px solid #e0e0e0"
                    cols="12"
                    class="pa-2 pt-3 mt-3 text-center"
                  >
                    <v-btn class="text mx-1" color="" depressed width="47%">
                      <v-icon left>mdi-phone</v-icon>
                      أتصل
                    </v-btn>
                    <v-btn class="text mx-1" depressed width="47%">
                      <v-icon left>mdi-gmail</v-icon>
                      الإيميل
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <!-- similarities search -->
            <v-col cols="12" class="mt-2">
              <p class="mb-0 px-2 py-1">عقارات مشابهة</p>
              <ul class="px-2 text">
                <li class="my-3">
                  <a href="#"> عقارات للبيع في المنطقة الغربية </a>
                </li>
                <li class="my-3">
                  <a href="#"> عقارات للبيع في المنطقة الغربية </a>
                </li>
                <li class="my-3">
                  <a href="#"> عقارات للبيع في المنطقة الغربية </a>
                </li>
                <li class="my-3">
                  <a href="#"> عقارات للبيع في المنطقة الغربية </a>
                </li>
              </ul>
            </v-col>
            <!-- report this add  -->
            <v-col cols="12" class="mt-2">
              <v-btn color="red accent-2" class="text" block outlined>
                <v-icon left>mdi-flag</v-icon>
                الإبلاغ عن هذا الإعلان
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters class="">
        <!-- here the more item   -->
        <v-col cols="12" class="pa-2">
          <p class="ma-0 ProductName">عقارات ذات صلة</p>
        </v-col>
        <v-col
          class="pa-2"
          cols="12"
          md="6"
          lg="6"
          sm="6"
          v-for="(Product, index) in GetCarData"
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
              <v-col cols="4" class="my-auto lighten-5">
                <v-img
                  height="170"
                  :src="getimageUrl(Product.folder, Product.image)"
                ></v-img>
              </v-col>
              <v-col cols="8">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-list-item three-line>
                      <v-list-item-content class="pb-0">
                        <v-list-item-title class="card-text">
                          المنطقة الشرقية حي اليرموك، المنطقة الشرقية حي
                          اليرموك، المنطقة الشرقية حي اليرموك،
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
                    <v-list-item dense three-line>
                      <v-list-item-content
                        style="align-content: space-around"
                        class="py-0"
                      >
                        <v-list-item-action
                          class="ma-0 mt-1"
                          style="
                            flex-direction: row;
                            align-content: space-around;
                          "
                        >
                          <!-- room  -->
                          <div>
                            <v-icon size="22" color="grey darken-3">
                              mdi-bed
                            </v-icon>
                            <span class="span mr-2">3.5</span>
                          </div>
                          <!-- bathroom  -->
                          <div>
                            <v-icon size="22" color="grey darken-3">
                              mdi-shower
                            </v-icon>
                            <span class="span mr-2">3.5</span>
                          </div>
                          <!-- size  -->
                          <div>
                            <v-icon size="22" color="grey darken-3">
                              mdi-wall
                            </v-icon>
                            <span class="span mr-2">3.5</span>
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
                            >
                              عمارة
                            </v-chip>
                            <v-chip
                              style="font-size: 14px"
                              small
                              class="text-all"
                              color="blue-grey lighten-5"
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
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CarData from "@/data-json/All-Car.json";
import TheNavBar from "@/NavBar/TheNavBar.vue";
export default {
  name: "RealEstateItemDetail",
  components: {
    TheNavBar,
  },
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
.link-bar {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 17px !important;
  color: $fontcolor !important;
  text-decoration: none;
  border-left: 1px solid #b0bec5;
  padding: 0 10px !important;
  line-height: 1.6 !important;
}
.link-bar:last-child {
  border-left: 0px;
}
.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
}

.link {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 17px !important;
  color: $fontcolorsm !important;
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
  font-size: 25px;
  font-weight: 600 !important;
  color: $fontcolor;
  font-family: sans-serif !important;
  font-weight: 700 !important;
  @media (max-width: 600px) {
    font-size: 20px !important;
  }
  @media (max-width: 350px) {
    font-size: 15px !important;
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
  @media (max-width: 450px) {
    font-size: 14px !important;
  }
}
.text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  // color: $fontcolor !important;
  line-height: 1.6;
  list-style: none;
  a {
    text-decoration: none;
    color: #03a9f4;
  }
  a:hover {
    text-decoration: underline;
    color: #0288d1;
  }
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
  height: 23px;
  @media (max-width: 960px) {
  }
}
::v-deep .v-carousel__controls__item {
  margin: 0 !important;
}
::v-deep
  button.v-carousel__controls__item.v-btn.v-item--active.v-btn--active.v-btn--icon.v-btn--round.theme--dark.v-size--small {
  width: 21px;
  height: 21px;
}
.card-text {
  font-family: $fontfamliy3 !important;
  // color: $fontcolor !important;
  letter-spacing: 0 !important;
  font-size: 15px !important;
}
.span {
  font-family: sans-serif !important;
  font-size: 15px;
  letter-spacing: 1px !important;
}
</style>
