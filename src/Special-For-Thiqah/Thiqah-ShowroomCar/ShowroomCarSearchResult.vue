<template>
  <div class="ContactSeller grey lighten-4">
    <TheNavBar />
    <v-container class="py-1 px-2">
      <p class="title pa-3 mb-0">سيارة هواند أكسنت للبيع في آب</p>
      <v-row no-gutters class="">
        <!-- here is the filtration -->
        <v-col cols="12" class="pa-1 ">
          <v-btn-toggle borderless tile v-model="toggle_filter" dense>
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
          cols="6"
          md="2"
          sm="4"
          lg="2"
          class="pa-1"
          v-for="Product in GetCarData"
          :key="Product.id"
        >
          <v-hover v-slot="{ hover }">
            <div style="position: relative">
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
                style="overflow: hidden; position: relative"
              >
                <v-img
                  height="150"
                  :src="getimageUrl(Product.folder, Product.image)"
                ></v-img>
                <!--  product name  -->
                <v-card-text class="card-text py-1 pa-2">
                  التيما 2020 استاندر للمستخدم الي يبي شي بدون اعطال واخو الجديد
                  يخدمه
                </v-card-text>
                <!--  product name  -->
                <v-card-text class="text text-center text-truncate py-1 pa-2">
                  {{ Product.company }} - {{ Product.name }} -
                  {{ Product.modle }}
                </v-card-text>
                <p class="PriceAfter ma-0 text-center text-truncate">
                  {{ Product.payment }}
                  <small class="text-truncate">ريال</small>
                </p>
                <!-- location -->
                <v-row
                  class="pa-2"
                  no-gutters
                  align="center"
                  justify="space-between"
                >
                  <div class="text d-flex align-center text-truncate">
                    <v-icon size="20" color="deep-orange lighten-1" right>
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
            </div>
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
  name: "ShowroomCarSearchResult",
  components: {
    TheNavBar,
  },
  data() {
    return {
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
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
  color: #1e88e5 !important;
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
.text {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  line-height: 1.6;
  font-size: 14px;
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

.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  span {
    font-family: sans-serif;
    margin-left: 4px;
  }
}
.see-more {
  font-family: $fontfamliy3;
  letter-spacing: 0;
  font-size: 17px !important;
  font-weight: 600 !important;
  color: $fontcolor !important;
}

.PriceAfter {
  font-size: 17px !important;
  color: $color-2;
  font-weight: 700 !important;
  font-family: sans-serif !important;
}
</style>
