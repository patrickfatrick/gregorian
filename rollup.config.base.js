import babel from 'rollup-plugin-babel';
import bundleSize from 'rollup-plugin-bundle-size';
import sizes from 'rollup-plugin-sizes';

export const plugins = [
  babel({
    exclude: 'node_modules/**/*',
  }),
  bundleSize(),
  sizes({ details: true }),
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/gregorian.js',
      format: 'es',
    },
    plugins,
  },
  {
    input: 'locale/index.js',
    output: {
      file: 'dist/locale.js',
      format: 'es',
    },
    plugins,
  },
];
