<template>
  <!-- search for showroom -->
  <div class="search-wrapping">
    <v-container class="search-containers pb-2 hidden-sm-and-down">
      <v-row no-gutters class="justify-space-between" align="start">
        <!-- customiza search for big screen -->
        <v-col cols="auto">
          <v-sheet class="transparent" height="48">
            <v-row no-gutters class="fill-height" align="center">
              <router-link router to="/">
                <h3 class="logo-text d-inline">ثــــقـــة لتجارة الأكترونية</h3>
                <v-icon
                  style="
                    background-color: #fc624d;
                    padding: 3px;
                    border-radius: 50%;
                    color: white;
                  "
                  left
                  size="22"
                >
                  mdi-shopping
                </v-icon>
              </router-link>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="7">
          <v-card flat max-width="700px" class="search">
            <!-- customiza search -->
            <v-card-actions class="pa-0 overflow-hidden">
              <v-text-field
                class="rounded-b-0 rounded-tl-0"
                v-model="search"
                solo
                flat
                label="على ماذا تبحث... "
                hide-details="true"
                background-color="#eee"
                @focus="ShowSerachCardvisble = true"
              ></v-text-field>
              <!-- delete text  -->
              <v-btn
                v-if="search.length > 0 && ShowSerachCardvisble"
                text
                tile
                class="close"
                @click="reset()"
              >
                <v-icon class="">mdi-close</v-icon>
              </v-btn>
              <v-icon v-else class="close">mdi-magnify</v-icon>
            </v-card-actions>
            <!-- search stroe names  -->
            <v-expand-transition>
              <v-card
                v-if="search.length > 0 && ShowSerachCardvisble"
                max-width="100%"
                color="white"
                flat
                class="mx-auto white Featured-card overflow-hidden"
              >
                <v-list-item
                  router
                  @click="ShowSerachCardvisble = false"
                  :to="{
                    name: 'ShowTheProduct',
                    params: {
                      carName: CarData.name,
                      carShape: CarData.Shape,
                      carId: CarData.id,
                      Company: CarData.folder,
                    },
                  }"
                  v-for="CarData in filteredStore"
                  :key="CarData.id"
                >
                  <!-- <v-list-item-avatar>
                  <v-avatar size="50" color="#424342">
                    <v-img
                      contain
                      :src="getimageUrl(CarData.folder, CarData.image)"
                      :lazy-src="getimageUrl(CarData.folder, CarData.image)"
                    >
                    </v-img>
                  </v-avatar>
                </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title> {{ CarData.name }}</v-list-item-title>
                    <!-- <v-spacer></v-spacer>
                  <v-list-item-subtitle>
                    {{ CarData.id }}
                  </v-list-item-subtitle> -->
                  </v-list-item-content>
                </v-list-item>
                <v-card-title class="not-found" v-if="filteredStore.length < 1">
                  نتأسف لا يوجد اي منتج بهذا الاسم
                  <span class="mx-2 red--text"> {{ search }} </span>
                </v-card-title>
              </v-card>
            </v-expand-transition>
          </v-card>
          <v-row no-gutters class="py-2">
            <a class="link">أعلن لدينا</a>
            <a class="link"> ابدأ البيع </a>
            <a class="link"> بيع عقارك </a>
            <a class="link"> بيع سيارتك </a>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <v-sheet class="transparent" height="48">
            <v-row no-gutters class="fill-height" align="center">
              <!-- cart shopping  -->
              <v-badge bordered left overlap content="425" class="mx-3">
                <v-btn
                  :to="{
                    name: 'TheClientCartPage',
                    params: { Cart: 'سلة التسوق ' },
                  }"
                  depressed
                  class="btn-noti-cart"
                  small
                  text
                >
                  <v-icon size="28" class="btn-noti-cart-icon">mdi-cart</v-icon>
                </v-btn>
              </v-badge>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <!-- small screen nave  -->
    <v-card class="hidden-md-and-up supporter" flat></v-card>
    <v-app-bar class="hidden-md-and-up" app color="#FAFAFA" fixed flat>
      <v-row no-gutters align="center">
        <v-col cols="8">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="fade-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card
                v-bind="attrs"
                v-on="on"
                flat
                width="100%"
                height="40px"
                rounded="lg"
                outlined
                class="search-small-screen pr-3 mr-1 ml-3"
              >
                <v-row
                  align="center"
                  justify="space-between"
                  style="height: 100%"
                  no-gutters
                  class="pa-0"
                >
                  <span class="pa-1 icon-small-screen-text">
                    على ماذا تبحث...
                  </span>
                  <v-icon color="grey " size="22" class="ml-1">
                    mdi-magnify mdi-rotate-90
                  </v-icon>
                </v-row>
              </v-card>
            </template>
            <v-card>
              <v-toolbar flat tile color="blue-grey lighten-5">
                <v-card
                  rounded="lg"
                  width="90%"
                  flat
                  color="#fff"
                  class="px-2 py-0"
                >
                  <v-card-actions class="pa-0">
                    <v-text-field
                      placeholder="على ماذا تبحث..."
                      solo
                      @focus="SearchClick"
                      v-model="search"
                      flat
                      prepend-icon="mdi-magnify"
                      hide-details
                      dense
                      class="px-0"
                    ></v-text-field>
                    <!-- delete text  -->
                    <v-btn v-if="search.length > 0" small icon @click="reset()">
                      <v-icon size="20" class="red--text">mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-btn icon dark @click="dialog = false">
                  <v-icon color="#fc624d" size="23"> mdi-arrow-left </v-icon>
                </v-btn>
              </v-toolbar>
              <v-expand-transition>
                <div v-if="search.length > 0">
                  <v-list-item
                    class="search-list-dig"
                    outlined
                    router
                    @click="dialog = false"
                    :to="{
                      name: 'ShowTheProduct',
                      params: {
                        carName: CarData.name,
                        carShape: CarData.Shape,
                        carId: CarData.id,
                        Company: CarData.folder,
                      },
                    }"
                    v-for="CarData in filteredStore"
                    :key="CarData.id"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ CarData.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-card-title
                    class="not-found"
                    v-if="filteredStore.length < 1"
                  >
                    لا يوجد (<span class="mx-2 red--text">
                      {{ search }}
                    </span>
                    )
                  </v-card-title>
                </div>
              </v-expand-transition>
            </v-card>
          </v-dialog>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-row justify="end" align="center" no-gutters class="">
            <!-- cart shopping  -->
            <v-badge
              offset-y="15"
              bordered
              left
              overlap
              content="525"
              class="ml-3"
            >
              <v-btn
                :to="{
                  name: 'SmallScreenClientCartPage',
                  params: { Cart: 'سلة التسوق ' },
                }"
                depressed
                class="btn-noti-cart"
                icon
              >
                <v-icon size="25">mdi-cart</v-icon>
              </v-btn>
            </v-badge>
            <!-- notification btn -->
            <v-badge
              offset-y="15"
              bordered
              left
              overlap
              content="425"
              class="mr-3"
            >
              <v-btn
                :to="{
                  name: 'SmallScreenNotification',
                  params: { Notfication: 'الأشعارات' },
                }"
                exact-path
                depressed
                class="btn-noti-cart"
                icon
              >
                <v-icon size="25"> mdi-bell </v-icon>
              </v-btn>
            </v-badge>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- <div class="TheCategories">
      <TheCategories />
    </div> -->
  </div>
  <!--end search  -->
</template>
<script>
import CarData from "../data-json/All-Car.json";
// import TheCategories from "../Search/TheCategories.vue";
export default {
  name: "SearchBar",
  components: {},
  data() {
    return {
      CarData,
      SearchClick: false,
      dialog: false,
      showrooms: this.$attrs.showrooms,
      ShowRoomName: this.$route.params.ShowRoomName,
      // showroom search
      search: "",
      select: null,
      benched: 0,
      ShowSerachCard: "",
      ShowSerachCardvisble: false,
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
    reset() {
      return (this.search = "");
    },
  },
  computed: {
    filteredStore: function () {
      return this.CarData.filter((CarData) => {
        return CarData.name.match(this.search);
      });
    },
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
a {
  text-decoration: none;
}
.logo-text {
  font-family: $fontfamliy3;
  color: $color-2 !important;
  font-weight: 600 !important;
  font-size: 17px !important;
}
.search-wrapping {
  background-color: #fafafa;

  @media (max-width: 600px) {
    background-color: #fff;
  }
}
.search-containers {
  @media (max-width: 1264px) {
    max-width: 100% !important;
  }
}
::v-deep label.v-label.theme--light {
  font-family: $fontfamliy;
  letter-spacing: 0px;
}
::v-deep .v-btn--icon.v-size--default {
  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
}
.search {
  height: auto;
  width: 100%;
  font-family: $fontfamliy;
  letter-spacing: 0px;
  padding: 0px;
  @media (max-width: 600px) {
    display: none;
  }
}
.v-text-field::v-deep .v-label.theme--light {
  font-family: $fontfamliy3 !important;
  font-weight: 500;
  font-size: 14px;
  color: grey;
}
.v-text-field::v-deep input#input-66 {
  font-family: $fontfamliy3 !important;
  font-weight: 500;
}
.search-container {
  @media (max-width: 600px) {
    padding-right: 5px;
    padding-left: 5px;
  }
}
.Featured-card {
  position: absolute;
  top: calc(0px + 50px);
  width: 100%;
  height: auto;
  right: 0;
  z-index: 5555;
  .Featured-text {
    font-family: $fontfamliy !important;
    font-size: 15px;
    font-weight: 500;
  }
}
.close {
  height: 48px !important;
  min-width: 45px !important;
  background-color: transparent !important;
  color: $color-2 !important;
  // color: $fontcolorsm !important;
}
.v-select {
  font-family: $fontfamliy !important;
  height: 50px;
}
.v-select::v-deep .v-select__selection--comma {
  font-family: $fontfamliy !important;
  height: 22px;
}
.not-found {
  font-size: 14px !important;
  font-family: $fontfamliy3 !important;
}
::v-deep .v-image__image.v-image__image--cover {
  background-position: top !important;
}
.btn-noti-cart {
  color: $color-2 !important;
  // background-color: #eee;
}
::v-deep .theme--light.v-badge .v-badge__badge:after {
  border-width: 0;
}
::v-deep span.v-badge__badge {
  font-weight: 700;
  color: #fff !important;
  background-color: $color-2 !important;
  // min-width: 15px;
  height: 18px;
  letter-spacing: 0.5px !important;
  // padding: 5px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  border: none;
  // font-size: 13px !important;
  @media (max-width: 600px) {
    font-size: 11px !important;
  }
}

::v-deep .v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  width: 37px !important;
  height: 37px !important;
}

.icon-small-screen-text {
  font-size: 13px !important;
  color: $fontcolorlinks;
  font-family: $fontfamliy3;
}
.TheCategories {
  @media (max-width: 600px) {
    display: none;
  }
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input::placeholder {
  font-size: 15px !important;
  color: $fontcolor;
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__control input {
  font-size: 16px;
  color: $fontcolor;
  font-family: $fontfamliy3;
  letter-spacing: 0px !important;
}
::v-deep .v-input__slot {
  background-color: transparent !important;
}
::v-deep .v-list-item .v-list-item__title {
  line-height: 1.6;
  font-size: 15px !important;
  color: $fontcolor !important;
  letter-spacing: 0px !important;
  font-family: $fontfamliy3;
  font-weight: 400;
}
::v-deep .v-toolbar__content {
  padding: 4px !important;
}
.search-list-dig {
  color: #fff !important;
  border-bottom: 1px solid #eee;
}
.supporter {
  height: 16px;
  @media (max-width: 600px) {
    height: 56px;
  }
}
.link {
  color: $fontcolor !important;
  letter-spacing: 0px !important;
  font-family: $fontfamliy3;
  font-size: 13px !important;
  padding: 0px 0px 0 10px;
}
</style>
