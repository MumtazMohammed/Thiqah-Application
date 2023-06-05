<template>
  <div class="ContactSeller grey lighten-5">
    <TheNavBar />
    <v-container class="py-1 px-2">
      <p class="title pr-1 mb-1">عقارات للبيع في تعز</p>
      <v-row no-gutters class="">
        <!-- here is the filtration -->
        <v-col cols="12" class="pa-1">
          <v-btn-toggle borderless tile v-model="toggle_filter" dense>
            <v-btn
              active-class="deep-orange--text tex--darken-2"
              class="toggle_filter"
            >
              <span> جميع العقارات </span>
            </v-btn>
            <v-btn
              active-class="deep-orange--text tex--darken-2"
              class="toggle_filter"
            >
              <span> المفروشة </span>
            </v-btn>
            <v-btn
              active-class="deep-orange--text tex--darken-2"
              class="toggle_filter"
            >
              <span> غير المفروشة </span>
            </v-btn>
            <v-menu v-model="menu" bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="toggle_filter" v-bind="attrs" v-on="on">
                  <span> {{ model }} </span>
                  <v-icon v-if="menu" color=" deep-orange darken-1">
                    mdi-menu-up
                  </v-icon>
                  <v-icon v-else color="grey darken-3"> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item-group v-model="model">
                  <template v-for="(item, i) in items">
                    <v-list-item
                      :key="`item-${i}`"
                      :value="item"
                      active-class="light-blue--text text--darken-2"
                    >
                      <template>
                        <v-list-item-content>
                          <v-list-item-title class="text-all text-center">
                            {{ item }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-btn-toggle>
        </v-col>
        <!-- here the search result -->
        <v-col
          class="pa-1"
          cols="12"
          md="6"
          lg="4"
          sm="4"
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
                  src="https://picsum.photos/510/300?random"
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
                              color="white"
                            >
                              عمارة
                            </v-chip>
                            <v-chip
                              style="font-size: 14px"
                              small
                              class="text-all"
                              color="white"
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
  name: "RealEstateSearchResult",
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
      toggle_filter: 0,
      menu: false,
      model: "الأكثر مشاهدة",
      items: ["الأكثر مشاهدة", "الأحدث", "الأقل سعراً", " الأعلى سعراً"],
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
.toggle_filter {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 14px !important;
  // font-weight: 600;
  @media (max-width: 450px) {
    font-size: 12.5px !important;
  }
}
p.title {
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
