<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- 메뉴바 -->
      <!-- 로그인이 안되어 있다면 메뉴바 안보이게 함 -->
      <v-menu v-if="isLogin" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn text icon dark v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon @click="drawer = !drawer" />
          </v-btn>
        </template>
      </v-menu>

      <!-- 로그인 안하면 , IOT Data An...로 보임  -->
      <v-toolbar-title v-if="!isLogin" class="ml-5"
        >IOT Data Anlaysis Web Page</v-toolbar-title
      >
      <!-- 로그인시, Load Model로 보임 -->
      <v-toolbar-title v-else class="ml-5">Load Model</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <!-- 파일로드와 파일히스토리 버튼은 로그인 안하면 안보임 -->
        <v-menu v-if="isLogin" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn text icon dark v-bind="attrs" v-on="on">
              <v-icon>mdi-file-upload</v-icon>
            </v-btn>
            <v-btn class="ml-3" text icon dark v-bind="attrs" v-on="on">
              <v-icon>mdi-history</v-icon>
            </v-btn>
          </template>
        </v-menu>

        <!-- 로그아웃 -->
        <!-- 구현 방법 1. router > action에 접근 -->
        <v-btn
          v-if="isLogin"
          text
          class="ml-7"
          @click="$store.dispatch('logout')"
          >로그아웃</v-btn
        >
        <!-- 구현 방법 2. router > mutation에 접근 -->
        <!-- <v-btn text @click="$store.commit('logout')">로그아웃</v-btn>  -->

        <v-btn v-else text router :to="{ name: 'LoginPage' }">로그인</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-if="isLogin" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            IOT Data Anlaysis<br />
            Web Page
          </v-list-item-title>
          <!-- <v-list-item-subtitle class="pt-1">
            로그인이 필요합니다
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {},

  data: () => ({
    drawer: false,
    items: [
      { title: "마이페이지", icon: "mdi-image", to: "/mypage" },
      { title: "파일 로드", icon: "mdi-image", to: "/load" },
    ],
    right: null,
  }),
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>
