<template>
  <div class="ThqahMall">
    <v-container>
      <v-col cols="12" class="pa-0">
        <v-card-title class="justify-center title">
          ابحث عن عقارات للبيع أو للايجار
        </v-card-title>
      </v-col>
      <v-row no-gutters justify="center">
        <!-- search / sale or rent  -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-select
              v-model="valueSaleOrRent"
              :items="SaleOrRent"
              attach
              hide-details=""
              flat
              solo
              label="للبيع أو الأيجار"
              dense
              full-width
              class="text-all ma-0 pt-0 transparent"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip small v-if="index === 0">
                  <span>{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption">
                  (+{{ value.length - 1 }} آحرون)
                </span>
              </template>
            </v-select>
          </v-card>
        </v-col>
        <!-- search / Cities  -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-select
              v-model="Citiesvalue"
              :items="Cities"
              attach
              hide-details=""
              flat
              solo
              dense
              full-width
              label="المدينة"
              class="text-all ma-0 pt-0 transparent"
            >
              <template v-slot:selection="{ item, index }">
                <v-chip small v-if="index === 0">
                  <span>{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption">
                  (+{{ value.length - 1 }} آحرون)
                </span>
              </template>
            </v-select>
          </v-card>
        </v-col>
        <!-- real estate or residential -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              centered
              max-width="368"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="my-auto"
                  height="40"
                  flat
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-row class="fill-height px-3" no-gutters align="center">
                    <span
                      style="font-size: 15px !important"
                      class="text-all grey--text text--darken-2 text-right"
                    >
                      نوع العقار
                    </span>
                    <v-spacer></v-spacer>
                    <v-icon>mdi-menu-down</v-icon>
                  </v-row>
                </v-card>
              </template>
              <v-sheet>
                <v-tabs grow v-model="tab">
                  <v-tab class="text-all"> سكني </v-tab>
                  <v-tab class="text-all"> تـجـاري </v-tab>
                </v-tabs>
                <v-tabs-items class="text-all" v-model="tab">
                  <v-tab-item>
                    <v-card flat>
                      <v-chip-group column>
                        <v-chip v-for="item in residential" :key="item">
                          {{ item }}
                        </v-chip>
                      </v-chip-group>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card color="basil" flat>
                      <v-chip-group column>
                        <v-chip v-for="item in realEstate" :key="item">
                          {{ item }}
                        </v-chip>
                      </v-chip-group>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-sheet>
            </v-menu>
          </v-card>
        </v-col>
        <!-- Room AND Bathroom count -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              centered
              max-width="368"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="my-auto"
                  height="40"
                  flat
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-row class="fill-height px-3" no-gutters align="center">
                    <v-col cols="10">
                      <v-card-text
                        style="font-size: 15px !important"
                        class="text-all pa-0 grey--text text--darken-2 text-right text-truncate"
                      >
                        عدد الغرف / الحمامات
                      </v-card-text>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                      <v-icon>mdi-menu-down</v-icon>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <v-sheet>
                <v-card-title class="text-all pa-2"> عدد الغرف </v-card-title>
                <v-chip-group column>
                  <v-chip v-for="i in 5" :key="i">
                    {{ i }}
                  </v-chip>
                </v-chip-group>
                <v-card-title class="text-all pa-2">
                  عدد الحمامات
                </v-card-title>
                <v-chip-group column>
                  <v-chip v-for="i in 5" :key="i">
                    {{ i }}
                  </v-chip>
                </v-chip-group>
              </v-sheet>
            </v-menu>
          </v-card>
        </v-col>
        <!-- space -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              centered
              max-width="368"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="my-auto"
                  height="40"
                  flat
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-row class="fill-height px-3" no-gutters align="center">
                    <v-col cols="10">
                      <v-card-text
                        style="font-size: 15px !important"
                        class="text-all pa-0 grey--text text--darken-2 text-right text-truncate"
                      >
                        المساحة (قدم مربع)
                      </v-card-text>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                      <v-icon>mdi-menu-down</v-icon>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <v-sheet>
                <v-row no-gutters>
                  <v-col class="pa-2">
                    <v-card-subtitle class="text text-center px-0 py-2">
                      الحد الأدنى قدم مربع
                    </v-card-subtitle>
                    <v-select
                      v-model="e6"
                      :items="states"
                      :menu-props="{ maxHeight: '400' }"
                      placeholder="أقل مساحة"
                      hide-details=""
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col class="pa-2">
                    <v-card-subtitle class="text text-center px-0 py-2">
                      الحد الأعلى قدم مربع
                    </v-card-subtitle>
                    <v-select
                      v-model="e6"
                      :items="states"
                      :menu-props="{ maxHeight: '400' }"
                      placeholder="أقل مساحة"
                      hide-details=""
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-menu>
          </v-card>
        </v-col>
        <!-- price -->
        <v-col cols="6" lg="4" sm="4" md="4" class="text-center pa-1">
          <v-card flat>
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              centered
              max-width="368"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="my-auto"
                  height="40"
                  flat
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-row class="fill-height px-3" no-gutters align="center">
                    <v-col cols="10">
                      <v-card-text
                        style="font-size: 15px !important"
                        class="text-all pa-0 grey--text text--darken-2 text-right text-truncate"
                      >
                        السعر (ريال يمني)
                      </v-card-text>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                      <v-icon>mdi-menu-down</v-icon>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <v-sheet>
                <v-row no-gutters>
                  <v-col class="pa-2">
                    <v-card-subtitle class="text text-center px-0 py-2">
                      الحد الأدنى
                    </v-card-subtitle>
                    <v-select
                      v-model="e6"
                      :items="states"
                      :menu-props="{ maxHeight: '400' }"
                      placeholder=" أقل سعر "
                      hide-details=""
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col class="pa-2">
                    <v-card-subtitle class="text text-center px-0 py-2">
                      الحد الأعلى
                    </v-card-subtitle>
                    <v-select
                      v-model="e6"
                      :items="states"
                      :menu-props="{ maxHeight: '400' }"
                      placeholder=" أعلى سعر "
                      hide-details=""
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-menu>
          </v-card>
        </v-col>
        <v-col cols="auto" class="pa-2 text-center">
          <v-btn
            min-width="165"
            depressed
            :to="{
              name: 'RealEstateSearchResult',
              params: {
                Search: ' نتائج البحث ',
              },
            }"
            class="text-all white"
          >
            بحث
          </v-btn>
        </v-col>
        <v-col cols="auto" class="pa-2 text-center">
          <v-btn class="text-all white" min-width="165" depressed>
            إعادة الضبط
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CarType from "@/data-json/CarType.json";
export default {
  name: "ThiqahShowroomCarAdd",
  components: {},
  data() {
    return {
      CarType,
      SaleOrRent: [" للبيع ", " للأجار "],
      Cities: [
        " 1المدينة ",
        " 2المدينة ",
        " 3المدينة ",
        " 4المدينة ",
        " 5المدينة ",
      ],
      residential: [
        " شقة ",
        " تاون هاوس ",
        " فيلا مجمع سكني ",
        " ارض سكنية ",
        " مبنى سكني ",
        " فیلا ",
        " بنتهاوس ",
        " شقة فندقية ",
        " طابق سكني ",
      ],
      realEstate: [
        " مکتب ",
        " مستودع ",
        " فيلا تجارية ",
        "  ارض تجارية ",
        " مبنی تجاري ",
        " ارض صناعية ",
        " معرض تجاري ",
        " محل تجاري ",
        " سكن عمال ",
        " مجمع سكني",
        " طابق تجاري ",
        " مصنع ",
        " ارض استخدام متعدد ",
        " عقارات تجارية اخرى ",
      ],
      Citiesvalue: [" 1المدينة "],
      valueSaleOrRent: [" للأجار "],
      items: ["الكل", " جديد ", " مستخدم ", " تنازل "],
      itemsTow: ["الكل", " كهربائي ", " عادي ", " اوتوماتيك "],
      Years: [" 2004 ", " 2003 ", " 2002 ", " 2001 "],

      tab: null,
    };
  },
  // this is help full to call the image inside folder and inject to the src
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    getCarInfo() {
      let GetCarVerified = [];
      for (let i = 0; i < this.VerifiedCar.length; i++) {
        if (this.VerifiedCar[i].Vip == true) {
          GetCarVerified.push(this.VerifiedCar[i]);
        }
      }
      return GetCarVerified;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ThqahMall {
  background: linear-gradient(#fafafa 0%, #eceff1 100%);

  .title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0px !important;
    font-size: 23px !important;
    font-weight: 500;
    color: $fontcolor;
    @media (max-width: 600px) {
      font-size: 18px !important;
    }
  }
}

.text {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  // font-size: 15px !important;
  line-height: 1.8 !important;
}
.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 17px !important;
  @media (max-width: 610px) {
    font-size: 16px !important;
  }
  @media (max-width: 350px) {
    font-size: 13px !important;
  }
  span {
    font-size: 14px !important;
  }
}

::v-deep .v-list-item.theme--dark {
  min-height: 55px !important;
}
::v-deep .v-icon.v-icon {
  @media (max-width: 610px) {
    font-size: 20px !important;
  }
}
::v-deep .v-chip .v-chip__content {
  @media (max-width: 610px) {
    // max-width: 33px;
  }
}

::v-deep .v-list-item__title {
  text-align: right;
  line-height: 1.5 !important;
  font-size: 14px !important;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
  font-size: 14px !important;
}
</style>
