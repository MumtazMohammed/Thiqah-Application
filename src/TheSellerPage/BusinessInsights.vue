<template>
  <div class="BusinessInsights">
    <!-- small Screen Tabs  -->
    <div class="hidden-md-and-up">
      <v-app-bar flat fixed color="#eee">
        <v-toolbar-title>
          <v-menu
            ref="menu"
            v-model="menuSm"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                placeholder="أدخل التاريخ"
                readonly
                solo
                dense
                flat
                hide-details
                v-bind="attrs"
                v-on="on"
                background-color=""
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              type="month"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="goBack" icon color="#fc624d">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet height="56"></v-sheet>
    </div>
    <!-- small Screen Tabs  -->
    <v-container class="pa-2">
      <v-row no-gutters class="pa-0" style="flex-wrap: wrap">
        <v-col cols="12" class="hidden-sm-and-down pa-2 py-0">
          <v-toolbar flat>
            <v-col cols="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    placeholder="أدخل التاريخ"
                    readonly
                    solo
                    dense
                    flat
                    hide-details
                    v-bind="attrs"
                    v-on="on"
                    background-color="grey lighten-3"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  type="month"
                  :active-picker.sync="activePicker"
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="6" lg="6" class="">
              <v-btn-toggle
                borderless
                background-color="grey lighten-2"
                v-model="toggle_exclusive"
              >
                <v-btn> اسبوعي </v-btn>
                <v-btn> شهري </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-toolbar>
        </v-col>

        <v-col cols="12" lg="12" md="6" sm="12" class="pa-2">
          <v-card flat class="pb-2">
            <v-card-text class="card-text"> المبيعات </v-card-text>
            <v-sparkline
              :labels="labels"
              :value="value"
              :smooth="1"
              :padding="12"
              :line-width="13"
              :gradient="['#fc624d', '#FF7043', '#FFCCBC']"
              type="bars"
              auto-draw
              stroke-linecap="round"
              color="grey"
            >
            </v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="pa-2">
          <v-card flat class="pb-2">
            <v-card-text class="card-text"> الطلبات </v-card-text>
            <v-sparkline
              :labels="labels"
              :value="value"
              :smooth="1"
              :padding="12"
              :line-width="13"
              :gradient="['#fc624d', '#FF7043', '#FFCCBC']"
              type="bars"
              auto-draw
              stroke-linecap="round"
              color="grey"
            >
            </v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="pa-2">
          <v-card height="100%" flat>
            <v-card-text class="card-text"> الزائرين </v-card-text>
            <v-sparkline
              :value="value"
              :labels="labels"
              :smooth="7"
              :padding="13"
              :line-width="6"
              stroke-linecap="round"
              :gradient="['#fc624d', '#FF7043', '#FFCCBC']"
              type="trend"
              auto-line-width="true"
              auto-draw
              color="grey"
            >
            </v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6" lg="6" class="pa-2">
          <v-card flat>
            <v-card-title class="justify-center">
              <div class="text">
                <span class="span success"></span>
                التقييمات الايجابية
              </div>
            </v-card-title>
            <v-sheet
              class="d-flex align-center justify-center overflow-hidden"
              width="100%"
            >
              <VueApexCharts
                height="180"
                width="155"
                :options="NegativeRatingOptions"
                VueApexCharts
                :series="NegativeSeriesRating"
              ></VueApexCharts>
            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6" lg="6" class="pa-2">
          <v-card flat>
            <v-card-title class="justify-center">
              <div class="text">
                <span class="span error"></span>
                التقييمات السلبية
              </div>
            </v-card-title>
            <v-sheet
              class="d-flex align-center justify-center overflow-hidden"
              width="100%"
            >
              <VueApexCharts
                height="180"
                width="155"
                :options="PositiveRatingOptions"
                VueApexCharts
                :series="PositiveSeriesRating"
              ></VueApexCharts>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Products from "../data-json/All-Car.json";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "BusinessInsightsn",
  components: { VueApexCharts },
  data() {
    return {
      toggle_exclusive: [],
      activePicker: null,
      date: null,
      menuSm: false,
      menu: false,
      value: [0, 2, 5, 9, 5, 10, 3],
      labels: [
        "السبت",
        "الأحد",
        "الأثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
      ],
      Products,
      model: null,
      //Negative Rating
      NegativeSeriesRating: [40],
      NegativeRatingOptions: {
        labels: ["Cricket"],
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "55%",
            },
            track: {
              background: "#EEEEEE",
            },
            dataLabels: {
              name: {
                show: false,
                fontSize: "14px",
              },
              value: {
                show: true,
                fontSize: "16px",
                color: "#000",
              },
            },
          },
        },
        fill: {
          colors: ["#4caf50"],
        },
      },
      //Positive Rating
      PositiveSeriesRating: [70],
      PositiveRatingOptions: {
        series: [70],
        labels: ["Cricket"],

        chart: {
          type: "radialBar",
        },

        plotOptions: {
          radialBar: {
            hollow: {
              size: "55%",
            },
            track: {
              background: "#EEEEEE",
            },
            dataLabels: {
              name: {
                show: false,
                fontSize: "14px",
              },
              value: {
                show: true,
                fontSize: "16px",
                color: "#000",
              },
            },
          },
        },
        fill: {
          colors: ["#ff5252"],
        },
      },
    };
  },

  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    goBack() {
      return this.$router.go(-1);
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.BusinessInsights {
  width: 100%;
  min-height: 100vh;
  .card-text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    color: $fontcolorlinks;
    font-size: 15px !important;
  }
  .text {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    // color: $fontcolorlinks;
    font-size: 14px !important;
    display: flex;
    justify-content: center !important;
    align-items: center;
    .span {
      display: block;
      width: 10px;
      height: 10px;
      background-color: aqua;
      border-radius: 50%;
      margin: 0 5px;
    }
  }
}
::v-deep .v-toolbar__content {
  justify-content: flex-end;
}
::v-deep span.apexcharts-legend-text {
  margin-right: 8px;
}
::v-deep .apexcharts-toolbar {
  top: -30px !important;
}
::v-deep .apexcharts-menu-icon {
  width: 30px;
  height: 30px !important;
}
::v-deep .apexcharts-toolbar svg {
  width: 30px;
  height: 30px;
}
::v-deep span.apexcharts-legend-text {
  font-size: 15px !important;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolorlinks !important;
}
::v-deep .product-toolbar .v-toolbar__content {
  justify-content: flex-start;
}
::v-deep .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
  height: 38px;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
}
::v-deep .theme--dark.v-btn--active:before {
  opacity: 0;
}
::v-deep g {
  font-size: 13px !important;
  transform: translateY(-2px);
  font-family: $fontfamliy3 !important;
  color: $fontcolor !important;
  line-height: 1.6;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3 !important;
  // color: $fontcolor !important;
  line-height: 1.6;
  font-size: 14px !important;
}

.titel {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 18px !important;
}
</style>
