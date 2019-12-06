module.exports = {
  parser: 'babel-eslint',
  extends: [
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    node: true
  }
}
