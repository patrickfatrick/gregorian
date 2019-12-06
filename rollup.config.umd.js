import base from './rollup.config.base'

export default Object.assign(base, {
  output: {
    file: 'dist/gregorian.umd.js',
    format: 'umd',
    name: 'gregorian',
  },
});
