module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      },
    ],
  ],
  env: {
    development: {
      sourceMaps: 'inline',
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3,
            modules: 'commonjs',
          },
        ],
      ],
    },
  },
};
