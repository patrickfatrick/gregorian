var dest = './dist';
var src = '.';
var gutil = require('gulp-util');

module.exports = {
	build: {
		transform: ['babelify', {
			compact: false
		}],
		config: './config.js',
		src: src + '/index.js',
		dest: dest + '/',
		outputName: 'gregorian.js',
		standalone: 'gregorian',
		extensions: ['js']
	},
	min: {
		transform: ['babelify', {
			compact: true
		}],
		config: './config.js',
		src: src + '/index.js',
		dest: dest + '/',
		outputName: 'gregorian.min.js',
		standalone: 'gregorian',
		extensions: ['js', 'es6']
	},
	lint: {
		src: src + '/src/**/*.js'
	}
};
