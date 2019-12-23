import base from './rollup.config.base';

export default [
  {
    ...base[0],
    output: {
      file: 'dist/gregorian.umd.js',
      format: 'umd',
      name: 'gregorian',
    },
  },
  {
    ...base[1],
    output: {
      file: 'dist/locale.umd.js',
      format: 'umd',
      name: 'gregorianLocales',
    },
  },
];
