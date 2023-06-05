<template>
  <div class="Notification">
    <v-badge left bordered color="error" icon="mdi-lock" overlap>
      <v-btn
        large
        @click.stop="chat = true"
        class="white--text open-message rounded-b-0"
        color="error"
        depressed
      >
        الدردشه
        <v-icon right>mdi-forum-outline</v-icon>
      </v-btn>
    </v-badge>
    <v-dialog max-width="900" v-model="chat" inset persistent>
      <v-sheet>
        <v-toolbar flat dense color="grey lighten-4">
          <v-toolbar-title class="open-message"> الدردشة </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click.stop="chat = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-row no-gutters class="">
          <v-col cols="4" class="px-md-1 px-lg-1">
            <v-sheet
              v-scroll.self="onScroll"
              class="overflow-y-auto px-2 grey lighten-5 overflow-x-hidden"
              height="550"
            >
              <v-banner class="py-2" color="white" sticky>
                <v-text-field
                  placeholder="أبحث عن مستخدم"
                  hide-details
                  dense
                  solo
                  class="rounded-pill"
                  flat
                  background-color="grey lighten-3"
                >
                </v-text-field>
              </v-banner>
              <v-card tile flat class="my-1" v-for="n in 20" :key="n">
                <v-list class="pa-0">
                  <v-list-item class="pr-1">
                    <v-list-item-avatar size="30" class="ml-2">
                      <v-img
                        contain
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="py-1">
                      <v-list-item-title class="users-Name">
                        محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد
                        أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                        شمسان
                      </v-list-item-title>
                      <v-list-item-subtitle class="users-Message mt-1">
                        محمد أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد
                        أمين شمسان محمد أمين شمسان محمد أمين شمسان محمد أمين
                        شمسان
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar size="30" class="mr-2">
                      <span class="unred-message">5</span>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-sheet>
          </v-col>
          <v-col class="px-md-1 px-lg-1">
            <v-sheet
              v-scroll.self="onScroll"
              class="overflow-y-auto grey lighten-5 overflow-x-hidden"
              height="440"
            >
              <v-banner color="white" sticky>
                <v-menu rounded="0" left offset-y>
                  <template v-slot:activator="{ attrs, on }">
                    <v-sheet class="pa-2">
                      <!-- usr btn  -->
                      <v-card tile flat v-bind="attrs" v-on="on">
                        <v-avatar size="30" class="">
                          <v-img
                            contain
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                          ></v-img>
                        </v-avatar>
                        <span class="message mr-1"> اسم المستخدم </span>
                        <v-icon left size="18">mdi-chevron-down</v-icon>
                      </v-card>
                      <!-- active !active  -->
                      <v-row no-gutters class="pr-5 pt-1">
                        <v-toolbar-title class="user-active">
                          <v-avatar size="8" color="red accent-4"> </v-avatar>
                          <span class="mr-2"><span>4</span> دقائق</span>
                        </v-toolbar-title>
                        <v-toolbar-title class="user-active mr-3">
                          <v-avatar size="8" color="green accent-4"> </v-avatar>
                          <span class="mr-2">نشط </span>
                        </v-toolbar-title>
                      </v-row>
                    </v-sheet>
                  </template>
                  <!-- list option  -->
                  <v-list>
                    <v-list-item link>
                      <v-list-item-title class="user-option">
                        <v-icon size="17" right>mdi-account</v-icon>
                        عرض الصفحة الشخصية
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title class="user-option">
                        <v-icon size="17" right>mdi-block-helper</v-icon>
                        حظر المستخدم
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-banner>
              <span class="message-date pa-2">22 / 08 / 2023</span>
              <v-col class="pa-1" cols="12" v-for="n in 8" :key="n">
                <v-card
                  flat
                  dark
                  color="grey lighten-4"
                  style="width: fit-content; max-width: 250px"
                  class="pa-1 message rounded-lg rounded-br-0"
                >
                  رسالتيرسالتيرسالتيرسالتيرسالتي رسالتيرسالتيرسالتيرسالتيرسالتي
                </v-card>
              </v-col>
              <v-col class="pa-1" cols="12" v-for="n in 8" :key="n">
                <v-card
                  flat
                  style="
                    width: fit-content;
                    max-width: 250px;
                    margin-right: auto;
                  "
                  class="pa-1 message rounded-lg rounded-bl-0"
                >
                  رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر رسالة الآخر
                  رسالة
                </v-card>
              </v-col>
            </v-sheet>
            <!-- <v-btn fab small color="transparent" class="elevation-0">
                    <v-icon class="grey--text">mdi-emoticon-outline</v-icon>
                  </v-btn> -->
            <v-divider class="my-2"></v-divider>
            <v-textarea
              class="elevation-0 rounded-0"
              flat
              placeholder=" أكتب رسالتك هنا ..."
              dense
              hide-details
              solo
              no-resize
              rows="2"
            ></v-textarea>
            <v-row class="px-2" no-gutters>
              <v-icon class="blue--text">mdi-emoticon-outline</v-icon>
              <v-icon class="blue--text">mdi-image</v-icon>
            </v-row>
            <!-- <v-btn fab small color="transparent" class="elevation-0">
                    <v-icon class="grey--text">mdi-paperclip</v-icon>
                  </v-btn> -->
          </v-col>
        </v-row>
      </v-sheet>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  name: "Notification",
  data() {
    return {
      scrollInvoked: 0,
      chat: false,
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Notification {
  width: fit-content;
  // padding: $padding;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  right: 13px;
}
.users-card:hover {
  background-color: #eee;
}
.users-Name {
  font-size: 13.5px !important;
  font-family: $fontfamliy3;
  // width: 100px;
}
.users-Message {
  font-size: 12px !important;
  font-family: $fontfamliy3;
  display: block !important;
}
.unred-message {
  background-color: $color-2;
  color: $fontcolorsm;
  font-size: 15px;
  border-radius: 50%;
  padding: 2px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.message-date {
  font-size: 13px;
  // margin-top: 5px;
  font-weight: 400;
  display: block;
  text-align: center;
  font-family: sans-serif;
  color: $fontcolorlinks;
}
.message {
  // font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 13.5px;
  text-align: start;
  line-height: 1.5;
  color: $fontcolor !important;
  font-family: $fontfamliy3;
}
.open-message {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 20px !important;
  font-weight: 500;
}
::v-deep textarea::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 15px !important;
}
::v-deep input::placeholder {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 13px !important;
}
::v-deep .v-banner__wrapper {
  padding: 0px 0 !important;
  border: 0 !important;
}
.user-option {
  font-family: $fontfamliy3;
  letter-spacing: 0 !important;
  font-size: 13px !important;
}
.user-active {
  font-family: $fontfamliy3 !important;
  letter-spacing: 0 !important;
  color: $fontcolorlinks !important;
  font-size: 11px !important;
  font-weight: 500;
}
</style>
