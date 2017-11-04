/**
 * @author rramcha
 */
 
var gulp = require('gulp'),
gutil = require('gulp-util'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

//concat and minify only js files
gulp.task('js', function(){
    return gulp.src('public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});