var gulp = require('gulp')
var gutil = require('gulp-util')
var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var config = require('../config').build

var bundler = browserify(config.src, {debug: true, standalone: config.standalone, extensions: config.extensions})
bundler.transform(config.transform)
gulp.task('build', bundle)

function bundle () {
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(buffer())
  .pipe(gulp.dest(config.dest))
}
