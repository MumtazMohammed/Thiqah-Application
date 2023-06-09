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
      <v-sheet height="100vh" style="overflow-y: scroll">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        </v-list>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>
<script>
import ShowRoomUserCars from "../data-json/All-Car.json";
export default {
  name: "StoreProducts",
  components: {},
  data() {
    return {
      search: "",
      tab: null,
      sheet: false,
      drawer: null,
      items: [
        {
          title: "الوظائف الأساسية",
          items: [
            {
              title: "طلبات جديدة",
              icon: "mdi-basket",
              // flib: "  transform: scaleX(-1)",
            },
            {
              title: "بإنتظار شحن المنتج",
              icon: "mdi-truck-delivery ",
              flib: "  transform: scaleX(-1)",
            },
            {
              title: "طلبات ألغيت",
              icon: "mdi-basket-remove",
              flib: "  transform: scaleX(-1)",
            },
            {
              title: "تقييمات العملاء",
              icon: "mdi-comment-multiple",
              flib: "  transform: scaleX(-1)",
            },
          ],
        },
        {
          title: "  ",
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
          action: "mdi-human-male-female-child",
          items: [{ title: "List Item" }],
          title: "Family",
        },
        {
          action: "mdi-bottle-tonic-plus",
          items: [{ title: "List Item" }],
          title: "Health",
        },
        {
          action: "mdi-briefcase",
          items: [{ title: "List Item" }],
          title: "Office",
        },
        {
          action: "mdi-tag",
          items: [{ title: "List Item" }],
          title: "Promotions",
        },
      ],
      MyStore: [
        {
          link: "إضافة  ",
          icon: "mdi-basket-plus",
          class: "indigo accent-3",
          RouterName: "/AddNewProducts",
        },
        {
          link: "المنتجات",
          icon: "mdi-basket",
          class: "yellow darken-4",
          RouterName: "/StoreProducts",
        },
        {
          link: "الطلبات",
          icon: "mdi-clipboard-text",
          class: "yellow darken-3",
          RouterName: "/MyOrder",
        },
        {
          link: "التقييمات",
          icon: "mdi-comment-text",
          class: "light-blue accent-4",
          RouterName: "/MyOrder",
        },
        {
          link: "رصيدي",
          icon: "mdi-wallet",
          class: "green accent-4",
          RouterName: "/StoreIncome",
        },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ShowRoomUserCars,
      carId: this.$route.params.carId,
      selectedItem: 0,
    };
  },
  computed: {
    filteredStore: function () {
      return this.ShowRoomUserCars.filter((ShowRoomUserCars) => {
        return ShowRoomUserCars.name.match(this.search);
      });
    },
  },

  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
    reset() {
      return (this.search = "");
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

  //   align-items: center;
  // height: 40px;
}
</style>
