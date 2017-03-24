'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import please from 'gulp-pleeease'
import config from '../config.js'

const DEST = config.baseConfig.publishDir
const log = console['log']

gulp.task('stylus', () => {
  return gulp.src(config.tasks.stylus.src)
    .pipe(plumber({
      handleError: function (err) {
        log(err)
        this.emit('end')
      }
    }))
    .pipe(stylus({
      'include css': true
    }))
    .pipe(please({
      'browsers': ['last 2 versions'],
      minifier: false
    }))
    .pipe(gulp.dest(DEST))
})

gulp.task('stylus:watch', () => {
  return watch(config.tasks.stylus.watch, () => {
    return gulp.start(['stylus'])
  })
})
