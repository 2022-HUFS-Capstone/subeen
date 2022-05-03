module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, //not defined
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:vuetify/base",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": 0, //multi-word
    "vuetify/no-legacy-grid": "error",
    // indent: "off",
  },
};
