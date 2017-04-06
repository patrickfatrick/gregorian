module.exports = {
  build: {
    transform: ['babelify', {
      compact: false
    }],
    config: './config.js',
    src: './index.js',
    dest: './dist/',
    outputName: 'gregorian.js',
    standalone: 'gregorian',
    extensions: ['js']
  },
  min: {
    transform: ['babelify', {
      compact: true
    }],
    config: './config.js',
    src: './index.js',
    dest: './dist/',
    outputName: 'gregorian.min.js',
    standalone: 'gregorian',
    extensions: ['js', 'es6']
  }
}
