import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [{ num: 1, name: "tester", id: "test", password: "123" }],
    isLogin: false,
    isloginError: false,
  },
  getters: {},
  mutations: {
    //로그인 성공
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    //로그인 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logOut(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    //로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.id === loginObj.id) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError");
      else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "MyPage" });
      }
      // console.log(loginObj.id, loginObj.password);
    },
    logout({ commit }) {
      commit("logOut");
      router.push({ name: "LoginPage" });
    },
  },
  modules: {},
});
