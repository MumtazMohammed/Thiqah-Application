<template>
  <div class="TheShowRoomPage">
    <v-container class="hidden-sm-and-down px-2">
      <!-- Store  -->
      <v-card rounded="lg" flat class="mx-auto pa-2" width="100%" height="100%">
        <v-list-item two-line class="px-0">
          <v-avatar size="40" color="blue-grey"> </v-avatar>
          <v-list-item-content class="px-2">
            <v-list-item-title class="Marketing-text">
              أسم المتجر
            </v-list-item-title>
            <v-list-item-subtitle
              class="Marketing-text"
              style="line-height: 1.5"
            >
              قم ببيع الطلب الأول أحصل على مستويات أعلى.
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-avatar size="40" color="grey"> </v-avatar>
        </v-list-item>
      </v-card>
      <!-- Notification  -->
      <v-card max-height="400" flat class="my-2 pt-0 pa-2 overflow-y-auto">
        <v-card-title class="text py-1 grey--text text--darken-2">
          <!-- <v-icon color="green lighten-2" right>mdi-bullhorn</v-icon> -->
          تنبيهات
        </v-card-title>
        <v-card flat color="grey lighten-4" class="overflow-hidden">
          <v-card-title class="Adv-titel pr-4 py-1 pa-0">
            هل أستطيع التعديل على التنسيقات؟
          </v-card-title>
          <v-card-text
            :class="redMore ? `redMore` : `Noti-text`"
            class="py-0 grey--text text--darken-1"
          >
            بلا شك، يمكنك تغيير النصوص والصور، اختيار ألوانك الخاصة، ترتيب
            مكونات الصفحة بطريقتك، تغيير تقسيم الأعمدة… وأكثر، كل ذلك بالسحب
            والإدراج وملء الخانات. ويمكنك أيضاً استخدام التنسيق الواحد في أكثر
            من صفحة والتعديل عليها حسب ذوقك. بلا شك، يمكنك تغيير النصوص والصور،
            اختيار ألوانك الخاصة، ترتيب مكونات الصفحة بطريقتك، تغيير تقسيم
            الأعمدة… وأكثر، كل ذلك بالسحب والإدراج وملء الخانات. ويمكنك أيضاً
            استخدام التنسيق الواحد في أكثر من صفحة والتعديل عليها حسب ذوقك. بلا
            شك، يمكنك تغيير النصوص والصور، اختيار ألوانك الخاصة، ترتيب مكونات
            الصفحة بطريقتك، تغيير تقسيم الأعمدة… وأكثر، كل ذلك بالسحب والإدراج
            وملء الخانات. ويمكنك أيضاً استخدام التنسيق الواحد في أكثر من صفحة
            والتعديل عليها حسب ذوقك. بلا شك، يمكنك تغيير النصوص والصور، اختيار
            ألوانك الخاصة، ترتيب مكونات الصفحة بطريقتك، تغيير تقسيم الأعمدة…
            وأكثر، كل ذلك بالسحب والإدراج وملء الخانات. ويمكنك أيضاً استخدام
            التنسيق الواحد في أكثر من صفحة والتعديل عليها حسب ذوقك.
          </v-card-text>
          <v-row class="py-1" no-gutters justify="center">
            <v-btn
              @click="redMore = !redMore"
              text
              tile
              depressed
              class="Marketing-text"
              v-text="redMore ? ` اقرأ  أقل ` : ` اقرأ المزيد `"
            >
            </v-btn>
          </v-row>
        </v-card>
      </v-card>
      <!-- products  -->
      <v-card
        style="height: calc(100vh - 299px); overflow-y: auto"
        flat
        class="example"
        rounded="lg"
      >
        <v-card-title class="Marketing-text justify-center py-2">
          المنتجات
        </v-card-title>
      </v-card>
    </v-container>
    <div class="hidden-md-and-up">
      <TheSellerPageSmallScreen />
    </div>
  </div>
</template>
<script>
import ShowRoomUserCars from "../data-json/All-Car.json";
import TheSellerPageSmallScreen from "./TheSellerPageSmallScreen.vue";
export default {
  name: "MainStorePage",
  components: { TheSellerPageSmallScreen },
  data() {
    return {
      redMore: false,
      ToDolist: false,
      BusinessInsights: false,
      search: "",
      dialog: false,
      ShowRoomUserCars,
      carId: this.$route.params.carId,
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      ToDoList: [
        {
          ToDoName: "الطلبات",
          ToDoNumber: 0,
        },
        {
          ToDoName: "الربح ",
          ToDoNumber: 0,
        },
        {
          ToDoName: "الزائرين",
          ToDoNumber: 0,
        },
        {
          ToDoName: "الطلبات الملغية",
          ToDoNumber: 0,
        },
      ],
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
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.TheShowRoomPage {
  width: 100%;
  min-height: 100vh;
  .text-offer {
    letter-spacing: 0 !important;
    font-family: $fontfamliy3;
    text-align: justify;
    line-height: 1.7;
    font-size: 14px;
    color: $fontcolorlinks;
  }
  .Noti-text {
    font-family: $fontfamliy3;
    letter-spacing: 0 !important;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .redMore {
    font-family: $fontfamliy3;
    letter-spacing: 0 !important;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: auto !important;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .Marketing-text {
    font-family: $fontfamliy3;
    // letter-spacing: 0 !important;
    color: $fontcolor;
  }
}

.Adv-titel {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-weight: 600;
  font-size: 14px;
  color: $fontcolor !important;
}
.Adv-text {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.8;
  text-align: justify;
}
.text {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-weight: 500;
  font-size: 20px;
  .v-icon {
    @media (max-width: 600px) {
      font-size: 22px !important;
    }
  }
}

.example::-webkit-scrollbar {
  width: 0.4em;
}

.example::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #eceff100;
}

.example::-webkit-scrollbar-thumb {
  background-color: #eceff1;
  border-radius: 10px;
}
.btn {
  position: fixed;
  left: 3px;
  bottom: 51px;
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  font-weight: 600;
  z-index: 5;
  // opacity: 0.7;
}
</style>
