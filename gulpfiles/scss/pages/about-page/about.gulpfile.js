'use strict';

let gulp     = require('gulp'),
    scss     = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename   = require('gulp-rename');




/* To be placed inside <head> - critical CSS
*/
gulp.task('production-compile-local-about-page-head-scss', function(){
  return gulp.src(`./production/stylesheets/scss/local/about/local-about-page-head.scss`)
    .pipe(scss())
    .pipe( gulp.dest(`./production/stylesheets/css/local/about/`) )
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(`./production/stylesheets/css/local/about/`));
});


/* To be placed at <body> end
*/
gulp.task('production-compile-local-about-page-body-end-scss', function(){
  return gulp.src(`./production/stylesheets/scss/local/about/local-about-page-body-end.scss`)
    .pipe(scss())
    .pipe( gulp.dest(`./production/stylesheets/css/local/about/`) )
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(`./production/stylesheets/css/local/about/`));
});


// Keep track of tasks and make them available inside .gulpfile.js
let aboutPageGulpTasksScss = ['production-compile-local-about-page-head-scss','production-compile-local-about-page-body-end-scss'];
module.exports = function() {
  return aboutPageGulpTasksScss;
}
