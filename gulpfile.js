'use strict'

const gulp = require('gulp')
,     less = require('gulp-less')
,     path = require('path')

const dist = path.join(__dirname, 'dist')
,     lessFiles = ['./src/**/*.less', '!./src/vendor/**/*']
,     htmlFiles = ['./src/**/*.html', '!./src/vendor/**/*']
,     vendorFiles = ['./src/vendor/**/*.*']

gulp.task('compile-less', function () {
  return gulp.src(lessFiles)
    .pipe(less({}))
    .pipe(gulp.dest(dist))
})

gulp.task('copy-html', function () {
  return gulp.src(htmlFiles)
    .pipe(gulp.dest(dist))
})

gulp.task('copy-vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(gulp.dest(dist + '/vendor'))
})

gulp.task('build', ['compile-less', 'copy-html', 'copy-vendor'])

gulp.task('watch', ['build'], function () {
  gulp.watch(lessFiles, ['compile-less'])
  gulp.watch(htmlFiles, ['copy-html'])
  gulp.watch(vendorFiles, ['copy-vendor'])
})
