var gulp = require('gulp')
var gutil = require('gulp-util')
var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var config = require('../config').min

var bundler = browserify(config.src, {debug: true, standalone: config.standalone, extensions: config.extensions})
bundler.transform(config.transform)
gulp.task('min', bundle)

function bundle () {
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(config.dest))
}
