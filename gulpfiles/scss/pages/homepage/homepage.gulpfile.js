'use strict';

let gulp     = require('gulp'),
    scss     = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename   = require('gulp-rename');




/* To be placed inside <head> - critical CSS
*/
gulp.task('production-compile-local-homepage-head-scss', function(){
  return gulp.src(`./production/stylesheets/scss/local/homepage/local-homepage-head.scss`)
    .pipe(scss())
    .pipe( gulp.dest(`./production/stylesheets/css/local/homepage/`) )
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(`./production/stylesheets/css/local/homepage/`));
});


/* To be placed at <body> end
*/
gulp.task('production-compile-local-homepage-body-end-scss', function(){
  return gulp.src(`./production/stylesheets/scss/local/homepage/local-homepage-body-end.scss`)
    .pipe(scss())
    .pipe( gulp.dest(`./production/stylesheets/css/local/homepage/`) )
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(`./production/stylesheets/css/local/homepage/`));
});


// Keep track of tasks and make them available inside .gulpfile.js
let homepageGulpTasksScss = ['production-compile-local-homepage-head-scss','production-compile-local-homepage-body-end-scss'];
module.exports = function() {
  return homepageGulpTasksScss;
}
