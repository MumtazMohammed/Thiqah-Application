<template>
  <v-container class="pa-2 px-0">
    <v-card tile flat color="" class="pa-2 overflow-hidden">
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <v-img
            contain
            height="96"
            class="white"
            max-width="90"
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-col>
        <v-col cols="9" md="6" lg="6" sm="6" class="pr-1">
          <v-list-item two-line class="pr-1 pa-0">
            <v-list-item-content class="pa-0">
              <v-list-item-title class="store-name mb-2">
                محمد أمين الحريبي محمد أمين الحريبي
              </v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                <v-card
                  class="overflow-hidden grey lighten-4"
                  flat
                  max-width="160"
                >
                  <v-row align="center" class="fill-height" no-gutters>
                    <span class="store-with-thiah white--text red">
                      ثقة مول
                    </span>
                    <v-icon size="22" color="red" class="mr-1">
                      mdi-check-decagram
                    </v-icon>
                    <span class="store-with-thiah black--text">بائع مرخص</span>
                  </v-row>
                </v-card>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-row no-gutters align="center" class="mt-2 mr-1">
            <div class="d-flex align-center">
              <v-icon color="grey darken-1" class="ml-1" size="17">
                mdi-account
              </v-icon>
              39
            </div>
            <span class="rate"></span>
            <div class="d-flex align-center">
              <v-icon color="amber darken-1" class="ml-1" size="17">
                mdi-star
              </v-icon>
              3.5
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex align-center text-all">
              <span class="ml-2"> 251 </span>
              منتج
            </div>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="3" lg="3" sm="3">
          <v-row
            align="center"
            justify="center"
            no-gutters
            class="fill-height pa-2"
          >
            <v-btn
              min-width="100"
              rounded
              depressed
              small
              dark
              class="light-blue accent-4 btn"
            >
              <v-icon left>mdi-account</v-icon>
              متابعة
            </v-btn>
            <v-btn small min-width="100" rounded depressed class="btn mr-2">
              <v-icon color="green accent-4" left>mdi-chat-processing</v-icon>
              مراسلة
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ServicesPage",
  components: {},
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  // computed: {
  //   getCarInfo() {
  //     let GetShowroomfeatured = [];
  //     for (let i = 0; i < this.featuredshowrooms.length; i++) {
  //       if (this.featuredshowrooms[i].featured == true) {
  //         GetShowroomfeatured.push(this.featuredshowrooms[i]);
  //       }
  //     }
  //     return GetShowroomfeatured;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.store-name {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-size: 18px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
}
.btn {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  // font-weight: 600;
  font-size: 14px !important ;
}
.store-with-thiah {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  padding: 5px;
  font-size: 13px;
  @media (max-width: 400px) {
  }
}
::v-deep .v-avatar {
  @media (max-width: 600px) {
    height: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }
}
::v-deep .v-list-item.v-list-item--two-line {
  min-height: 40px !important;
}
.rate {
  display: inline-block;
  width: 1.5px;
  height: 14px;
  background-color: #bdbdbd;
  right: 0;
  margin: 0 7px;
}
.text-all {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  span {
    font-family: sans-serif;
    letter-spacing: 0.5px !important;
    color: #f4511e;
    font-weight: 500;
  }
}
</style>
