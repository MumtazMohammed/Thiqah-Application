<template>
  <div class="SpicalShowRoom pa-1">
    <v-container class="pa-0">
      <div class="pa-2 tital">
        الشركات
        <strong class="mx-1">التجارية</strong>
      </div>
      <v-row no-gutters class="">
        <v-col
          md="2"
          sm="4"
          lg="2"
          cols="6"
          class="pa-1"
          v-for="(Companie, i) in Companies"
          :key="i"
        >
          <v-card
            rounded="lg"
            outlined
            to="/SellerStorePage"
            class="mx-auto pa-2"
          >
            <v-img
              height="120"
              contain
              :src="getimageUrl(Companie.folder, Companie.logo)"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <!-- small screen view -->
    </v-container>
  </div>
</template>

<script>
import featuredshowrooms from "../data-json/showroom.json";
export default {
  name: "SpicalShowRoom",
  components: {},

  data() {
    return {
      Tital: "المعارض المتميزة",
      featuredshowrooms,
      Companies: [
        {
          logo: "adidas-logo.png",
          folder: "CompaniesLogo",
        },
        {
          logo: "nikePNG.png",
          folder: "CompaniesLogo",
        },
        {
          logo: "Nestle_logo_PNG2.png",
          folder: "CompaniesLogo",
        },
        {
          logo: "Sony_logo_PNG1.png",
          folder: "CompaniesLogo",
        },
      ],
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    getCarInfo() {
      let GetShowroomfeatured = [];
      for (let i = 0; i < this.featuredshowrooms.length; i++) {
        if (this.featuredshowrooms[i].featured == true) {
          GetShowroomfeatured.push(this.featuredshowrooms[i]);
        }
      }
      return GetShowroomfeatured;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.SpicalShowRoom {
  width: 100%;
  background-color: #fff;
  .tital {
    position: relative;
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
}

.brand {
  font-size: 18px;
  text-align: center !important;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-weight: 600 !important;
  color: $color-2;
  @media (max-width: 600px) {
    font-size: 16px;
  }
}
::v-deep .v-image.v-responsive.theme--light {
  @media (max-width: 600px) {
    height: 100px !important;
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
