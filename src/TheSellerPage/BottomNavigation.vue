<template>
  <div class="BottomNavigation">
    <v-sheet height="50"></v-sheet>
    <v-bottom-navigation grow height="50" app v-model="value">
      <v-btn value="recent">
        <span class="link"> المتجر </span>
        <v-icon size="22">mdi-shield-crown</v-icon>
      </v-btn>
      <!-- menu  -->
      <v-btn value="favorites" @click.stop="drawer = !drawer">
        <span class="link"> القائمة </span>
        <v-icon size="22">mdi-filter-variant</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span class="link"> الطلبات </span>
        <v-icon size="22">mdi-clipboard-text</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-navigation-drawer
      overlay-opacity="0.8"
      style="z-index: 18"
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-sheet style="overflow-y: scroll">
        <v-row align="center" no-gutters class="fill-height">
          <v-col cols="2" class="">
            <v-img
              class="blue-grey lighten-5"
              contain
              height="67"
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-col>
          <v-col cols="10" md="10" sm="9" lg="10">
            <v-list-item class="px-2 pl-0" color="grey">
              <v-list-item-content class="py-0">
                <v-list-item-title class="store-name mb-0">
                  <v-row align="center" no-gutters>
                    محمد أمين
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon size="22" color="grey lighten-1">mdi-cog</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-card
                    class="overflow-hidden blue-grey lighten-5"
                    flat
                    tile
                    max-width="170"
                  >
                    <v-row align="center" class="fill-height" no-gutters>
                      <span class="store-with-thiah white--text red">
                        ثقة مول
                      </span>
                      <v-icon left size="18" color="red">
                        mdi-check-decagram
                      </v-icon>
                      <span class="store-with-thiah black--text">
                        بائع مرخص
                      </span>
                    </v-row>
                  </v-card>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="link-title" v-text="item.title">
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              dense
              class="pr-4"
              link
              v-for="child in item.items"
              :key="child.title"
            >
              <v-list-item-icon class="ml-2">
                <v-icon color="grey darken-1" size="18">
                  {{ child.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="link" v-text="child.title">
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item dense v-for="(item, i) in Others" :key="i">

              <v-list-item-content>
                <v-list-item-title
                  class="link"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "BottomNavigation",
  components: {},
  data() {
    return {
      sheet: false,
      drawer: null,
      items: [
        {
          title: "الوظائف الأساسية",
          items: [
            {
              title: "إضافة  ",
              icon: "mdi-basket-plus",
              class: "indigo accent-3",
              RouterName: "/AddNewProducts",
            },
            {
              title: "المنتجات",
              icon: "mdi-basket",
              class: "yellow darken-4",
              RouterName: "/StoreProducts",
            },
            {
              title: "الطلبات",
              icon: "mdi-clipboard-text",
              class: "yellow darken-3",
              RouterName: "/MyOrder",
            },
            {
              title: "التقييمات",
              icon: "mdi-comment-text",
              class: "light-blue accent-4",
              RouterName: "/MyOrder",
            },
            {
              title: "رصيدي",
              icon: "mdi-wallet",
              class: "green accent-4",
              RouterName: "/StoreIncome",
            },
          ],
        },
        {
          title: " عن متجرك ",
          items: [
            {
              title: "رؤى الأعمال",
              icon: "mdi-chart-line",
              class: "indigo accent-2",
              RouterName: "/BusinessInsights",
            },

            {
              title: "المتجر  ",
              icon: "mdi-store-edit-outline",
              class: "pink lighten-1",
              RouterName: "/StoreProfile",
            },
            {
              title: "إعدادات ",
              icon: "mdi-cog",
              class: "grey darken-2",
              RouterName: "/StoreProfile",
            },
          ],
        },
        {
          title: " أدوات التسويق  ",
          items: [
            {
              icon: "mdi-star-circle-outline",
              title: "متميز",
            },
            {
              icon: "mdi-ticket-confirmation",
              title: "القسائم",
            },
            {
              icon: "mdi-label-percent",
              title: "عروض الخصم",
            },
            {
              icon: "mdi-handshake-outline",
              title: "صفقة مع البيعة",
            },
            {
              icon: "mdi-basket-plus",
              title: "صفقة إضافية",
            },
            {
              icon: "mdi-home-lightning-bolt",
              title: "تخفيضات صادمة  لمتجرك ",
            },
            {
              icon: "mdi-truck-delivery",
              title: "تخفيض في رسوم الشحن",
            },
          ],
        },
      ],
      Others: [
        {
          title: " عضوية للمتجر",
          icon: "mdi-card-account-details-star-outline ",
        },

        {
          title: " تعبئة رصيد",
          icon: "mdi-cellphone-arrow-down mdi-rotate-180 ",
        },
        {
          title: "إعلن  لدينا ",
          icon: "mdi-flash",
        },

        {
          title: "أنضم الى ثقة مول",
          icon: "mdi-set-all ",
        },
        {
          title: "خدمة العملاء",
          icon: "mdi-face-agent ",
          flib: "  transform: scaleX(-1)",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.link-title {
  font-size: 15px !important;
  letter-spacing: 0 !important;
  // color: $fontcolor !important;
  font-family: $fontfamliy3;

  //   align-items: center;
  // height: 40px;
}
.link {
  font-size: 15px !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-family: $fontfamliy3;
  line-height: 1.6;
  //   align-items: center;
  // height: 40px;
}
.store-with-thiah {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  padding: 4px 3px;
}
</style>
