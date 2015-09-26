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
	jest: {
		src: '__tests__',
		options: {
			"scriptPreprocessor": "./node_modules/babel-jest",
			"testFileExtensions": [
				"es6",
				"js"
			],
			"moduleFileExtensions": [
				"js",
				"json",
				"es6"
			]
		}
	}
};