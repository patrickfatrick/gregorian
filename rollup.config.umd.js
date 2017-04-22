import base from './rollup.config.base'

export default Object.assign(base, {
  format: 'umd',
  moduleName: 'gregorian',
  dest: 'dist/gregorian.umd.js'
})
