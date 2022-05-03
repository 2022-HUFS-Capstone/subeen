import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import LoginPage from "../views/LoginPage.vue";
import LoadPage from "../views/LoadPage.vue";
import MyPage from "../views/MyPage.vue";

Vue.use(VueRouter);

//로그인시 인증받은 유저에게 로그인 페이지 안보여주기 -> 가드 생성
const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //이미 로그인 된 유저니까
    alert("이미 로그인 하였습니다.");
    next("/mypage");
  } else {
    next();
  }
};

//로그인 못한 사람은 마이페이지에 접속 못하게 해야함 -> 가드 생성
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    //아직 로그인 안 된 유저니까
    alert("로그인이 필요합니다.");
    next("/");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "LoginPage",
    beforeEnter: rejectAuthUser,
    component: LoginPage,
  },
  {
    path: "/load",
    name: "LoadPage",
    component: LoadPage,
  },
  {
    path: "/mypage",
    name: "MyPage",
    beforeEnter: onlyAuthUser,
    component: MyPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
