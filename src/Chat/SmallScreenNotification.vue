<template>
  <div class="Notification grey">
    <v-card flat tile>
      <v-app-bar app height="55" color="#fc624d" flat>
        <v-text-field
          placeholder="بحث عن مستخدم ..."
          dense
          flat
          solo
          prepend-inner-icon="mdi-magnify"
          class="rounded-pill"
          hide-details
          background-color="white"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="goBack" icon>
          <v-icon color="white" size="30">mdi-arrow-left-thin</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet height="55"></v-sheet>
      <v-card
        flat
        tile
        class="grey lighten-4 overflow-y-auto py-1 tile overflow-x-hidden"
        v-scroll.self="onScroll"
      >
        <v-dialog v-model="dialog" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <v-card
              v-bind="attrs"
              v-on="on"
              flat
              tile
              class="users-card mb-1 overflow-hidden"
              v-for="n in 20"
              :key="n"
            >
              <v-list class="pa-0">
                <v-list-item>
                  <v-list-item-avatar class="ml-2">
                    <v-img
                      contain
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="py-2">
                    <v-list-item-title>
                      <v-row no-gutters align="center">
                        <v-col cols="10">
                          <v-card-title class="users-Name text-truncate pa-0">
                            محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد
                            أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                            شمسان
                          </v-card-title>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                          <v-avatar size="25" color="#fc624d">
                            <span class="unred-message">5</span>
                          </v-avatar>
                        </v-col>
                      </v-row>
                    </v-list-item-title>
                    <v-list-item-subtitle class="users-Message">
                      محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                      شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </template>
          <v-app-bar flat color="#EEEEEE" class="app-bar" app>
            <v-col cols="auto" class="pa-0">
              <v-row align="center" class="justify-space-around" no-gutters>
                <v-menu rounded="0" left offset-y>
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      color="grey"
                      v-bind="attrs"
                      v-on="on"
                      icon
                      tile
                      width="30"
                    >
                      <v-icon size="26" color="#fc624d">
                        mdi-dots-vertical
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item link>
                      <v-list-item-title class="user-option">
                        <v-icon size="17" right>mdi-account</v-icon>
                        عرض الصفحة الشخصية
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title class="user-option">
                        <v-icon size="17" right> mdi-block-helper </v-icon>
                        حظر المستخدم
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-avatar size="34" color="red">
                  <v-img
                    contain
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  ></v-img>
                </v-avatar>
              </v-row>
            </v-col>
            <v-col cols="8" class="pa-0 pr-3">
              <v-toolbar-title class="user-title">
                أسم المستقبل
              </v-toolbar-title>
              <!-- active !active  -->
              <v-row no-gutters class="mt-1">
                <v-toolbar-title class="user-active">
                  <v-avatar size="8" color="red accent-4"> </v-avatar>
                  <span class="mr-2"><span>4</span> دقائق</span>
                </v-toolbar-title>
                <v-toolbar-title class="user-active mr-3">
                  <v-avatar size="8" color="green accent-4"> </v-avatar>
                  <span class="mr-2">نشط </span>
                </v-toolbar-title>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false" icon>
              <v-icon color="#fc624d" size="30">mdi-arrow-left-thin</v-icon>
            </v-btn>
          </v-app-bar>
          <v-sheet height="56px"></v-sheet>
          <v-sheet
            v-scroll.self="onScroll"
            class="overflow-y-auto overflow-x-hidden"
            style="height: calc(100vh - 120px)"
            color="grey lighten-4"
          >
            <v-col class="pa-2 text-center" cols="12">
              <span class="message-date">05:20</span>
            </v-col>
            <v-col
              class="pa-2 pb-0 text-right"
              cols="12"
              v-for="n in 15"
              :key="n"
            >
              <v-card
                flat
                color="blue-grey lighten-5"
                style="width: fit-content; max-width: 250px"
                class="pa-2 rounded-lg rounded-br-0 message"
              >
                رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر
                رسالة الآخر
              </v-card>
              <span class="message-time">05:20</span>
            </v-col>
            <v-col
              class="pa-2 pb-0 text-left"
              cols="12"
              v-for="n in 20"
              :key="n"
            >
              <v-card
                flat
                color=""
                style="width: fit-content; margin-right: auto; max-width: 250px"
                class="pa-2 rounded-lg rounded-bl-0 message"
              >
                رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر
                رسالة الآخر
              </v-card>
              <span class="message-time">05:20</span>
            </v-col>
          </v-sheet>
          <v-sheet height="62px"></v-sheet>
          <v-bottom-navigation height="62" class="align-center" app horizontal>
            <!-- <v-btn color="transparent" class="elevation-0">
              <v-icon color="amber" class="ma-0">mdi-emoticon</v-icon>
            </v-btn> -->
            <v-btn
              :class="message.length >= 1 ? 'send-message' : 'write-message'"
              color=""
            >
              <v-icon size="22" color="blue" class="ma-0"> mdi-send </v-icon>
            </v-btn>

            <v-textarea
              class="elevation-0 rounded-0"
              flat
              v-model="message"
              placeholder=" أكتب رسالتك هنا ..."
              dense
              hide-details
              solo
              background-color="white"
              no-resize
              rows="2"
            ></v-textarea>
            <v-btn color="transparent" class="elevation-0">
              <v-icon color="green" class="ma-0">mdi-image</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-dialog>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  name: "Notification",
  data() {
    return {
      scrollInvoked: 0,
      dialog: false,
      message: "",
    };
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
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
.Notification {
  width: 100%;
  min-height: 100vh;
  .users-card:hover {
    background-color: #eee;
  }

  .unred-message {
    color: $fontcolorsm;
    font-size: 16px;
    border-radius: 50%;
    // padding: 2px 7px;

    // display: flex;
    // align-items: center;
    // justify-content: center;
  }
}
.users-Name {
  font-size: 15px !important;
  font-family: $fontfamliy3;
  // width: 100px;
  display: block !important;
}
.users-Message {
  font-size: 13px !important;
  font-family: $fontfamliy3;
  display: block !important;
}
.message {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 13px;
  text-align: justify;
  line-height: 1.5;
  color: $fontcolor !important;
}
.message-time {
  font-size: 10px;
  // margin-top: 5px;
}
.message-date {
  font-size: 14px;
  // margin-top: 5px;
  font-weight: 500;
}
::v-deep input#input-11::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
}
::v-deep .v-dialog__content.v-dialog__content--active {
  z-index: 1000;
}
::v-deep .v-input__slot {
  background-color: #eee !important;
}
::v-deep header.v-sheet.theme--light.rounded-0.v-toolbar.grey.lighten-3 {
  z-index: 1;
}
::v-deep .v-item-group.v-bottom-navigation .v-btn {
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  flex: 0 1 auto;
  font-size: 0.75rem;
  height: inherit;
  max-width: 40px;
  min-width: 33px;
  position: relative;
  text-transform: none;
}
::v-deep .v-toolbar__content .toolbar-title {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: #fff !important;
  font-size: 19px !important;
  font-weight: 600;
}
::v-deep .v-toolbar__content .user-title {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-size: 13px !important;
  font-weight: 600;
}
::v-deep .v-toolbar__content .user-active {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolorlinks !important;
  font-size: 11px !important;
  font-weight: 500;
}
.send-message {
  max-width: 40px !important;
  min-width: 33px !important;
  transition: all 0.1s 0s ease-out;
}
.write-message {
  max-width: 0 !important;
  min-width: 0px !important;
  padding: 0 !important;
  overflow: hidden;
  transition: all 0.1s 0s ease-in;
}
::v-deep .v-input__control {
  min-height: 36px !important;
}
::v-deep i.v-icon.notranslate.mdi.mdi-magnify.theme--light {
  font-size: 22px !important;
}
::v-deep .v-banner__wrapper {
  padding: 0px !important;
  border: 0 !important;
}
::v-deep input {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 14px !important;
  line-height: 1.6;
  color: $fontcolor;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 14px !important;
  line-height: 1.6;
  color: $fontcolor;
}
::v-deep textarea#input-184::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 10px !important;
  line-height: 1.6;
  color: $fontcolor;
}
::v-deep .v-banner__content {
  padding: 0px !important;
}
::v-deep .app-bar .v-toolbar__content {
  padding-right: 0px !important;
}
.user-option {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 13px !important;
}
</style>
