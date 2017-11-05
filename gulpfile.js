/**
 * @author rramcha
 */
 
var gulp = require('gulp'),
gutil = require('gulp-util'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
jshint = require('gulp-jshint'),
rename = require('gulp-rename'),
minifycss = require('gulp-minify-css'),
logger = require('./logger.js'),
exec = require('child_process').exec,
nodemon = require('gulp-nodemon');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('public/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//concat and minify only js files
gulp.task('scripts', function(){
    return gulp.src('public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/js/*.js', ['lint', 'scripts']);
    gulp.watch('public/css/*.css', ['css']);
});

// start the server and listen for changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
        script: 'server.js',
        watch: ["server.js", 'public/*', 'public/*/**','app/*','app/*/**'],
        ext: 'js'
    }).on('restart', function() { 
    
    gulp.src('server.js')
      .pipe(notify('Running the start tasks and stuff'));
  });
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch','server']);