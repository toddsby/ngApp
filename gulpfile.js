/**
 * Gulp configuration, require gulp and compass
 * setup default task compass sass compliation
 * setup watch task to run in background
 * define file locations, config file, and dest location
 */

var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
    gulp.src('scss/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'scss'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['compass']);
});

gulp.task('default', ['compass', 'watch']);