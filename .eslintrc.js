/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'airbnb-base'],
  plugins: [],
  rules: {
    // This rule makes only sense when there is user input.
    // I'm only using it with i18n, so no need for this rule.
    'vue/no-v-html': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
  },
};
