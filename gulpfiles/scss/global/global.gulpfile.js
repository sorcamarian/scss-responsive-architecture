'use strict';

let gulp     = require('gulp'),
    scss     = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename   = require('gulp-rename');



// compile task
gulp.task('production-compile-global-head-scss', function(){
 return gulp.src(`./production/stylesheets/scss/global/global-styles-head.scss`)
   .pipe(scss())
   .pipe( gulp.dest("./production/stylesheets/css/global/") )
   .pipe(cleanCSS())
   .pipe(rename({
       suffix: '.min'
   }))
   .pipe(gulp.dest(`./production/stylesheets/css/global/`));
});

// compile task
gulp.task('production-compile-global-body-end-scss', function(){
 return gulp.src(`./production/stylesheets/scss/global/global-styles-body-end.scss`)
   .pipe(scss())
   .pipe( gulp.dest("./production/stylesheets/css/global/") )
   .pipe(cleanCSS())
   .pipe(rename({
       suffix: '.min'
   }))
   .pipe(gulp.dest(`./production/stylesheets/css/global/`));
});




 // Keep track of tasks and make them available inside .gulpfile.js
 let gulpTasksGlobalScss = ['production-compile-global-head-scss', 'production-compile-global-body-end-scss'];
 module.exports = function() {
   return gulpTasksGlobalScss;
 }
