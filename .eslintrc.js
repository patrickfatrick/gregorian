module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier', 'plugin:import/warnings', 'plugin:import/errors'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
