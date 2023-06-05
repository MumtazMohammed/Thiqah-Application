import Vue from "vue";
import VueRouter from "vue-router";
// the navigation pages
import Home from "../views/TheHome.vue";
// Fillter Pages
import ShowTheProduct from "../FilterPage/ShowTheProductsInfo.vue";
import ServicesPage from "../FilterPage/ServicesPage.vue";
import Products from "../FilterPage/Products.vue";
// The Seller Store Page
import SellerStorePage from "../SellerStore/SellerStorePage.vue";
// Thiqah Services
import ThiqahMallPage from "../Special-For-Thiqah/Thiqah-Mall/ThiqahMallPage.vue";
import ThiqahSuperMarketPage from "../Special-For-Thiqah/Thiqah-SuperMarket/ThiqahSuperMarketPage.vue";
import ShowroomCarPage from "../Special-For-Thiqah/Thiqah-ShowroomCar/ShowroomCarPage.vue";
import ShowroomCarItemDetail from "../Special-For-Thiqah/Thiqah-ShowroomCar/ShowroomCarItemDetail.vue";
import RealEstateItemDetail from "../Special-For-Thiqah/Thiqah-RealEstate/RealEstateItemDetail.vue";
import RealEstateSearchResult from "../Special-For-Thiqah/Thiqah-RealEstate/RealEstateSearchResult.vue";
import ShowroomCarSearchResult from "../Special-For-Thiqah/Thiqah-ShowroomCar/ShowroomCarSearchResult.vue";
import RealEstateMainPage from "../Special-For-Thiqah/Thiqah-RealEstate/RealEstateMainPage.vue";
// import ThiqahMallAdd from "../Thiqah-Mall/ThiqahMallAdd.vue";
// SignUp
import SignUp from "../Login/SignUp.vue";
import Login from "../Login/Login.vue";
import LoginSeller from "../Login/LoginSeller.vue";
// The Client Page Pig Screen
import TheUserPageView from "../TheClientPage/TheUserPageView.vue";
import UserProfileEdit from "../TheClientPage/BigScreen/UserProfileEdit.vue";
import TheClientOrderPage from "../TheClientPage/BigScreen/TheClientOrderPage.vue";
import TheClientPointsPage from "../TheClientPage/BigScreen/TheClientPointsPage.vue";
import TheClientCartPage from "../TheClientPage/BigScreen/TheClientCartPage.vue";
import TheClientCouponsPage from "../TheClientPage/BigScreen/TheClientCouponsPage.vue";
import Lastviewed from "../TheClientPage/BigScreen/Lastviewed.vue";
import TheRating from "../TheClientPage/BigScreen/TheRating.vue";
import Favorite from "../TheClientPage/BigScreen/Favorite.vue";
// The Client Page Small Screen
// import SmallScreenClientNotification from "../TheClientPage/SmallScreen/SmallScreenClientNotification.vue";
import SmallScreenClientCartPage from "../TheClientPage/SmallScreen/SmallScreenClientCartPage.vue";
import SmallScreenClientOrderPage from "../TheClientPage/SmallScreen/SmallScreenClientOrderPage.vue";
import SmallScreenClientPointsPage from "../TheClientPage/SmallScreen/SmallScreenClientPointsPage.vue";
import SmallScreenClientCouponsPage from "../TheClientPage/SmallScreen/SmallScreenClientCouponsPage.vue";
import SmallScreenUserProfileEdit from "../TheClientPage/SmallScreen/SmallScreenUserProfileEdit.vue";
import SmallScreenClientRating from "../TheClientPage/SmallScreen/SmallScreenClientRating.vue";
import LastviewedSmallScreen from "../TheClientPage/SmallScreen/LastviewedSmallScreen.vue";
// import SmallScreenShare from "../TheClientPage/SmallScreen/SmallScreenShare.vue";
import SmallScreenFavorite from "../TheClientPage/SmallScreen/SmallScreenFavorite.vue";

// Chat
// import SellerNotification from "../Chat/SellerNotification.vue";
// import ClientNotification from "../Chat/ClientNotification.vue";
import SmallScreenNotification from "../Chat/SmallScreenNotification.vue";
// The Seller Page
import TheSellerPage from "../TheSellerPage/TheSellerPage.vue";
import MainStorePage from "../TheSellerPage/MainStorePage.vue";
import StoreProducts from "../TheSellerPage/StoreProducts.vue";
import StoreProfile from "../TheSellerPage/StoreProfile.vue";
import MyOrder from "../TheSellerPage/MyOrder.vue";
import ProductsOnClickShowDetail from "../TheSellerPage/ProductsOnClickShowDetail.vue";
import AddNewProducts from "../TheSellerPage/AddNewProducts.vue";
import StoreIncome from "../TheSellerPage/StoreIncome.vue";
import BusinessInsights from "../TheSellerPage/BusinessInsights.vue";
import Marketing from "../TheSellerPage/Marketing.vue";
// import Notification from "../TheSellerPage/Notification.vue";
// Privacy-And-Terms
import ThePrivacy from "../Privacy-And-Terms/ThePrivacy.vue";
import TheTerms from "../Privacy-And-Terms/TheTerms.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // show Products detail
  {
    path: "/ShowTheProduct/car/:carName/:carShape/:carId/:Company",
    name: "ShowTheProduct",
    component: ShowTheProduct,
  },
  // show Services Page
  {
    path: "/ServicesPage",
    name: "ServicesPage",
    component: ServicesPage,
  },
  // show Products
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  // The Seller Store Page
  {
    path: "/SellerStorePage",
    name: "SellerStorePage",
    component: SellerStorePage,
  },

  // SignUp or Login
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/LoginSeller",
    name: "LoginSeller",
    component: LoginSeller,
  },
  // Privacy-And-Terms
  {
    path: "/ThePrivacy/:Privacy",
    name: "ThePrivacy",
    component: ThePrivacy,
  },
  {
    path: "/TheTerms/:Terms",
    name: "TheTerms",
    component: TheTerms,
  },
  // The Seller Page
  {
    path: "/TheSellerPage",
    component: TheSellerPage,
    children: [
      {
        path: "",
        name: "MainStorePage",
        component: MainStorePage,
      },
      {
        path: "/ProductsOnClickShowDetail",
        name: "ProductsOnClickShowDetail",
        component: ProductsOnClickShowDetail,
      },
      {
        path: "/StoreProducts",
        name: "StoreProducts",
        component: StoreProducts,
      },
      {
        path: "/MyOrder",
        name: "MyOrder",
        component: MyOrder,
      },
      {
        path: "/AddNewProducts",
        name: "AddNewProducts",
        component: AddNewProducts,
      },
      {
        path: "/StoreProfile",
        name: "StoreProfile",
        component: StoreProfile,
      },
      {
        path: "/StoreIncome",
        name: "StoreIncome",
        component: StoreIncome,
      },
      {
        path: "/BusinessInsights",
        name: "BusinessInsights",
        component: BusinessInsights,
      },
      {
        path: "/Marketing",
        name: "Marketing",
        component: Marketing,
      },
    ],
  },
  // User Page Pig Screen
  {
    path: "/TheUserPageView",
    component: TheUserPageView,
    children: [
      {
        path: "/:Ordered",
        name: "TheClientOrderPage",
        component: TheClientOrderPage,
      },

      {
        path: "/UserProfileEdit/:Acount",
        name: "UserProfileEdit",
        component: UserProfileEdit,
      },
      {
        path: "/TheClientPointsPage/:Points",
        name: "TheClientPointsPage",
        component: TheClientPointsPage,
      },
      {
        path: "/TheClientCouponsPage/:Coupons",
        name: "TheClientCouponsPage",
        component: TheClientCouponsPage,
      },
      {
        path: "/TheClientCartPage/:Cart",
        name: "TheClientCartPage",
        component: TheClientCartPage,
      },
      {
        path: "/Lastviewed/:Lastviewed",
        name: "Lastviewed",
        component: Lastviewed,
      },
      {
        path: "/TheRating/:TheRating",
        name: "TheRating",
        component: TheRating,
      },
      {
        path: "/Favorite/:Favorite",
        name: "Favorite",
        component: Favorite,
      },
    ],
  },
  // User Page Small Screen
  {
    path: "/SmallScreenNotification/:Notfication",
    name: "SmallScreenNotification",
    component: SmallScreenNotification,
  },
  {
    path: "/SmallScreenClientCartPage/:Cart",
    name: "SmallScreenClientCartPage",
    component: SmallScreenClientCartPage,
  },
  {
    path: "/SmallScreenClientOrderPage/:Order",
    name: "SmallScreenClientOrderPage",
    component: SmallScreenClientOrderPage,
  },
  {
    path: "/SmallScreenClientPointsPage/:Points",
    name: "SmallScreenClientPointsPage",
    component: SmallScreenClientPointsPage,
  },
  {
    path: "/SmallScreenClientCouponsPage/:coupons",
    name: "SmallScreenClientCouponsPage",
    component: SmallScreenClientCouponsPage,
  },
  {
    path: "/SmallScreenUserProfileEdit/:Profile",
    name: "SmallScreenUserProfileEdit",
    component: SmallScreenUserProfileEdit,
  },
  {
    path: "/SmallScreenClientRating/:Rating",
    name: "SmallScreenClientRating",
    component: SmallScreenClientRating,
  },
  {
    path: "/LastviewedSmallScreen/:History",
    name: "LastviewedSmallScreen",
    component: LastviewedSmallScreen,
  },
  {
    path: "/SmallScreenFavorite/:Favorite",
    name: "SmallScreenFavorite",
    component: SmallScreenFavorite,
  },
  // Thiqah Mall
  {
    path: "/ThiqahMallPage/:MallPage",
    name: "ThiqahMallPage",
    component: ThiqahMallPage,
  },
  {
    path: "/ThiqahSuperMarketPage/:MallPage",
    name: "ThiqahSuperMarketPage",
    component: ThiqahSuperMarketPage,
  },
  // ShowroomCar
  {
    path: "/ShowroomCarPage/:ShowroomCar",
    name: "ShowroomCarPage",
    component: ShowroomCarPage,
  },
  {
    path: "/ShowroomCarItemDetail/:carName/:carShape/:carId/:Company",
    name: "ShowroomCarItemDetail",
    component: ShowroomCarItemDetail,
  },
  {
    path: "/ShowroomCarSearchResult/:Search",
    name: "ShowroomCarSearchResult",
    component: ShowroomCarSearchResult,
  },
  // RealEstate
  {
    path: "/RealEstateMainPage/:RealEstate",
    name: "RealEstateMainPage",
    component: RealEstateMainPage,
  },
  {
    path: "/RealEstateItemDetail/:carName/:carShape/:carId/:Company",
    name: "RealEstateItemDetail",
    component: RealEstateItemDetail,
  },
  {
    path: "/RealEstateSearchResult/:Search",
    name: "RealEstateSearchResult",
    component: RealEstateSearchResult,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
