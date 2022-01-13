module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['standard', 'prettier', 'plugin:vue/recommended'],
  rules: {
    'no-debugger': 'error',
    'no-console': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'warn',
    'comma-dangle': ['warn', 'never'],
    camelcase: 'warn',
    'no-useless-escape': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'warn'
  }
};
