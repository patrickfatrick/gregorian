module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      }
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { corejs: 3 }],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
  ],
  env: {
    development: {
      sourceMaps: 'inline',
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: 'entry',
            corejs: 3,
            modules: 'commonjs',
          }
        ],
      ],
    },
  },
};
