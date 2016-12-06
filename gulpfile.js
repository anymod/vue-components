'use strict'

let gulp = require('gulp')
,   less = require('gulp-less')
,   path = require('path')

gulp.task('less', function () {
  return gulp.src('./pages/**/*.less')
    .pipe(less({}))
    .pipe(gulp.dest('./dependencies/css'))
})
