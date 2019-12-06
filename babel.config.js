module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { browsers: ['defaults'] },
        useBuiltIns: 'entry',
        corejs: '3.3',
        modules: false,
      }
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
  ],
  env: {
    development: {
      sourceMaps: 'inline',
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
      ],
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: 'entry',
            corejs: '3.3',
            modules: 'commonjs',
          }
        ],
      ],
    },
  },
};
