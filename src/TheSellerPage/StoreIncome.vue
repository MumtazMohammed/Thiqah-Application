<template>
  <div class="PasswordChange">
    <!-- small Screen Tabs  -->
    <div class="hidden-md-and-up">
      <v-app-bar flat fixed color="grey lighten-4">
        <v-btn dark fab x-small depressed color="green">
          <v-icon> mdi-arrow-down-bold </v-icon>
        </v-btn>
        <v-toolbar-title class="pr-3">
          <v-menu
            ref="menuSm"
            v-model="menuSm"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="fade-transition"
            offset-x
            left
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card-title v-bind="attrs" v-on="on" class="pa-0 title">
                <v-chip class="title" color="white" tile text-color="black">
                  شهر -
                  <span class="mx-1" v-text="date"></span>
                </v-chip>
              </v-card-title>
            </template>
            <v-date-picker
              color="primary"
              v-model="date"
              type="month"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuSm = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menuSm.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#fc624d" @click="goBack" icon>
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet height="56"></v-sheet>
    </div>
    <v-container class="pa-2">
      <v-toolbar elevation="0" color="" class="hidden-sm-and-down mb-2">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="fade-transition"
          offset-x
          left
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card-title v-bind="attrs" v-on="on" class="pa-0 title">
              <v-chip class="title" color="">
                شهر -
                <span class="mx-1" v-text="date"></span>
              </v-chip>
            </v-card-title>
          </template>
          <v-date-picker
            color="primary"
            v-model="date"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed color="green">
          <v-icon> mdi-arrow-down-bold </v-icon>
        </v-btn>
      </v-toolbar>
      <div class="">
        <v-simple-table fixed-header class="table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-right title">اليوم</th>
                <th class="text-right title">الدخل</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in 30" :key="i">
                <td>{{ date }}-{{ i + 1 }}</td>
                <td>0</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "PasswordChange",
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      menuSm: false,
      modal: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "رقم المنتج",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "الوقت", value: "date" },
        { text: "العدد", value: "quantity" },
        { text: "السعر الأجمالي", value: "TotalPrice" },
        { text: "نسبة الموقع", value: "ratio" },
        { text: "صافي ربح العميل", value: "CustomerNetProfit" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.PasswordChange {
  width: 100%;
  min-height: 100vh;
  // @include flexcenter;

  .title {
    font-family: $fontfamliy3 !important;
    letter-spacing: 0 !important;
    font-size: 17px !important;
  }
  .line-span {
    width: 100%;
    height: 0.5px;
    background-color: rgb(231, 231, 231);
    display: block;
  }
}
::v-deep th.text-start {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-size: 14px !important;
}
::v-deep td.text-start {
  font-family: $fontfamliy3 !important;
  // letter-spacing: 0 !important;
  font-size: 15px !important;
}
::v-deep span.v-chip.theme--dark.v-size--small {
  font-family: $fontfamliy3 !important;
  // letter-spacing: 0 !important;
  font-size: 15px !important;
  width: 60px;
  justify-content: center;
}
::v-deep .v-data-table__mobile-row__header {
  font-family: $fontfamliy3 !important;
  // letter-spacing: 0 !important;
  font-size: 13px !important;
  justify-content: center;
  color: $fontcolorlinks;
}
::v-deep td {
  font-family: sans-serif !important;
  // letter-spacing: 0 !important;
  font-size: 15px !important;
  justify-content: center;
  color: $fontcolor;
}

.titel {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0;
  font-size: 18px !important;
}
</style>
