<template>
  <v-container
    height="100%"
    class="d-flex align-center justify-center"
    style="max-width: 450px"
  >
    <v-row style="margin-top: 150px">
      <v-col cols="12">
        <v-alert :value="isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat color="#e3e3e3">
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="id"
              label="아이디를 입력하세요"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            ></v-text-field>
            <v-btn
              large
              block
              depressed
              color="primary"
              @click="
                login({
                  id,
                  password,
                })
              "
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      id: null,
      password: null,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style></style>
