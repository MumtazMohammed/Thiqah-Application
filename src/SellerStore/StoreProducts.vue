<template>
  <div class="SpicalShowRoom py-2">
    <!-- <div class="ont-weight-bold pa-2 tital">
      قد تنال على
      <strong class="mx-1">إعجابك</strong>
    </div> -->
    <v-row no-gutters class="">
      <!-- here is the filtration -->
      <v-col cols="12" class="pa-2">
        <v-btn-toggle
          class="transparent"
          background-color="transparent"
          borderless
          tile
          v-model="toggle_filter"
        >
          <v-btn
            active-class="deep-orange--text tex--darken-2"
            class="text-all transparent"
          >
            <span> فلتر </span>
          </v-btn>
          <v-btn
            active-class="deep-orange--text tex--darken-2"
            class="text-all transparent"
          >
            <span> فلتر </span>
          </v-btn>
          <v-btn
            active-class="deep-orange--text tex--darken-2"
            class="text-all transparent"
          >
            <span> فلتر </span>
          </v-btn>
          <v-menu v-model="menu" bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="text-all transparent" v-bind="attrs" v-on="on">
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
      <v-col
        cols="6"
        md="3"
        sm="4"
        lg="2"
        class="pa-2"
        v-for="Product in Products"
        :key="Product.id"
      >
        <v-hover v-slot="{ hover }">
          <div style="position: relative">
            <h1 class="ribbon">متميز</h1>
            <v-card
              :to="{
                name: 'ShowTheProduct',
                params: {
                  carName: Product.name,
                  carShape: Product.Shape,
                  carId: Product.id,
                  Company: Product.folder,
                },
              }"
              :elevation="hover ? 3 : 0"
              min-height="285"
              width="100%"
              style="
                overflow: hidden;
                background-color: #fff;
                position: relative;
              "
              rounded="lg"
            >
              <div v-if="Product.discountPercent" class="best-price-tag">
                <small class="discountPercent">
                  {{ Product.discountPercent }}-
                </small>
              </div>
              <v-img
                height="130"
                :src="getimageUrl(Product.folder, Product.image)"
              ></v-img>
              <!--  product name  -->
              <v-card-text
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                "
                class="card-text pa-1"
              >
                <!-- if this product at thiqah mall  -->
                <!-- <span class="ribbon-2 pa-1 pl-2 ml-1"> ثـقـة مـول </span> -->
                {{ Product.name }} {{ Product.company }} {{ Product.name }}
                {{ Product.company }}
                {{ Product.name }}
                {{ Product.name }} {{ Product.company }} {{ Product.name }}
                {{ Product.company }}
                {{ Product.name }}
              </v-card-text>
              <strong class="PriceAfter py-1 pt-0 pa-2 text-truncate">
                {{ Product.payment }}
                <v-icon color="grey darken-3" size="19">
                  mdi-currency-rial
                </v-icon>
              </strong>
              <!-- if the product contain any promotion -->
              <v-card-text class="py-1 pa-2 text-truncate">
                <!-- free delivery  -->
                <span class="span-text">
                  <!-- <v-icon>mdi-moped</v-icon> -->
                  توصيل مجاناً
                </span>
                <!-- divider -->
                <span class="divider mx-1"></span>
                <!-- Discount coupon  -->
                <span class="span-text"> قسيمة <span>50%</span> </span>
                <!-- divider -->
                <span class="divider mx-1"></span>
                <!-- free coins  -->
                <span class="span-text"> <span>20</span> نقطه </span>
              </v-card-text>
              <!-- how many sold and rating  -->
              <v-card-actions class="py-0 pa-2">
                <!-- rating  -->
                <v-icon size="17" color="amber">mdi-star</v-icon>
                <span class="span">3.5</span>
                <!-- divider -->
                <span class="divider mx-1"></span>
                <!-- sold Info  -->
                <p class="ma-0 sold-info text-truncate">
                  <span class="span ml-1">({{ Product.id }})</span>بيعت
                </p>
              </v-card-actions>
              <!-- location -->
              <v-row no-gutters class="px-2 justify-end">
                <span class="sold-info">
                  {{ Product.location }}
                </span>
              </v-row>
            </v-card>
          </div>
        </v-hover>
      </v-col>
      <v-col cols="12">
        <v-card-actions class="justify-center">
          <v-btn outlined color="#fc624d" width="300" class="seeMoreBtn">
            تـحـمـيـل الـمـزيـد
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Products from "../data-json/All-Car.json";
export default {
  name: "StoreProducts",
  // components: {},
  data() {
    return {
      Products,
      rating: 3.6,
      menu: false,
      toggle_filter: 0,
      model: "الأكثر مشاهدة",
      items: ["الأكثر مشاهدة", "الأحدث", "الأقل سعراً", " الأعلى سعراً"],
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.SpicalShowRoom {
  width: 100%;
  min-height: 50vh;
  // padding: $padding;
  font-family: $fontfamliy3;
  @media (max-width: 960px) {
    // margin-bottom: 50px;
  }
  .tital {
    position: relative;
    // text-align: center;
    font-family: $fontfamliy3;
    font-size: 22px;
    color: $color-2;
    font-weight: 600;
    pointer-events: none;
    @media (max-width: 600px) {
      font-size: 18px;
    }
    @media (max-width: 350px) {
      font-size: 17px;
    }
  }
  .sold-info {
    font-family: $fontfamliy3 !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    color: $fontcolor !important;
  }
  .span {
    font-family: sans-serif !important;
    // margin-left: 5px;
    font-size: 13px !important;
    letter-spacing: 1.5px !important;
  }
  .span-text {
    font-family: $fontfamliy3 !important;
    font-size: 11px !important;
    // padding: 2px;
    @media (max-width: 600px) {
      padding: 0px;
    }
  }
  .card-text {
    font-family: $fontfamliy3 !important;
    color: $fontcolor !important;
    letter-spacing: 0 !important;
    font-size: 13.5px !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    span {
      background-color: #ff3d00;
      border-radius: 3px;
      font-weight: 600;
      font-size: 12px;
      padding: 1px;
    }
  }
  .PriceAfter {
    font-size: 17px !important;
    color: $fontcolor;
    font-weight: 600 !important;
    font-family: sans-serif !important;
  }
  .best-price-tag {
    position: absolute;
    left: 10px;
    top: -1px;
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 35%,
      100% 70%,
      100% 100%,
      49% 70%,
      0 100%,
      0% 70%,
      0% 35%,
      0 0
    );
    background: linear-gradient(140deg, #fc624d 30%, #ffc0ac94 100%);    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    // transform: rotate(360deg);
    z-index: 1;
    border-radius: 0 0 3px 3px !important;
  }
  .discountPercent {
    color: white !important;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .seeMoreBtn {
    letter-spacing: 0 !important;
    font-size: 17px;
    font-family: $fontfamliy3 !important;
  }
}
//
.ribbon {
  position: absolute;
  top: 8px;
  right: 0px;
  z-index: 1;
  padding: 0 5px;
  width: 50px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  border-radius: 3px 0px 0px 3px !important;
  background: $color-2;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
.ribbon:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.5em;
  height: 100%;
  padding: 0 0 22.5px 0px !important;
  top: 0;
  right: -0.51em;
  background: inherit;
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
@media (max-width: 600px) {
}

::v-deep
  button.v-icon.notranslate.v-icon--link.material-icons.theme--light.orange--text.text--darken-1 {
  font-size: 14px !important;
  padding: 1px !important;
  @media (max-width: 600px) {
    font-size: 13px !important;
  }
}
.divider {
  display: inline-block;
  height: 12px;
  // width: 2px;
  padding: 1px;
  background-color: #e0e0e0;
  border-radius: 2px;
}
.text-all {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
}
.ribbon-2 {
  font-size: 11px !important;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%);
  background: #ef5350;
  color: #fff;
  border-radius: 0px !important;
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
  margin-right: -8px !important;
  // margin-left: 2px !important;
}
</style>
