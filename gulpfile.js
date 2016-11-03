var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

var buildDir = 'dist/';

var depsJs = ['bower_components/angular/angular.min.js', 
              'bower_components/angular-route/angular-route.min.js'];
var appJs = ['src/app.js', 'src/modules.js', 'src/configs.js',
             'src/daily-plan/*.js'];

/** tasks */ 
gulp.task('devDeps', function(){
    var depsjs = gulp.src(depsJs);
    return depsjs.pipe(concat('itp_deps.js'))
     .pipe(gulp.dest('dist'));

});

gulp.task('devJs', function(){
    var js = gulp.src(appJs);
    return js.pipe(concat('itp.js'))
     .pipe(gulp.dest('dist'));
});

/** initialize */

gulp.task('default', function(callback){
    runSequence('devDeps', 'devJs', callback);
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.js', ['devJs']);
});


