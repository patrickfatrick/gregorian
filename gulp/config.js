var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
	build: {
		transform: ['babelify', {
			compact: false
		}],
		config: './config.js',
		src: src + '/gregorian.js',
		dest: dest + '/',
		outputName: 'gregorian.js'
	},
	min: {
		transform: ['babelify', {
			compact: true
		}],
		config: './config.js',
		src: src + '/gregorian.js',
		dest: dest + '/',
		outputName: 'gregorian.min.js'
	},
	lint: {
		src: src + '/**/*.js'
	}
};