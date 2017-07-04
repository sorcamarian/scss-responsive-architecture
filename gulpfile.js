'use strict';

let gulp     = require('gulp'),
    scss     = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename   = require('gulp-rename');



    /*
    StyleSheets - Production codes
    StyleSheets - Production codes
    StyleSheets - Production codes
    --------------
    */



    // Path variables - GLOBAL styles
    // Path variables - GLOBAL styles
    let productionScss  = './production/stylesheets/scss/',
        productionCSS   = './production/stylesheets/css/';


         // compile task
         gulp.task('production-css', function(){
           return gulp.src(`${productionScss}style.scss`)
             .pipe(scss())
             .pipe( gulp.dest(productionCSS) )
             .pipe(cleanCSS())
             .pipe(rename({
                 suffix: '.min'
             }))
             .pipe(gulp.dest(`${productionCSS}`))
         });

         // watch for changes
         gulp.task("watch-scss-components", function() {
           gulp.watch(`./components/**/*.scss`, ['production-css'] );
         });

         /*
         // DEFAULT task for terminal command:  "gulp"
         */
         gulp.task('default', ['production-css', 'watch-scss-components']);
