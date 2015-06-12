var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('concat:css', function(){
	return gulp.src(config.assetsCSS+'/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest(config.staticCSS))
});

gulp.task('concat:js', function(){
	return gulp.src(config.assetsJS+'/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest(config.staticJS))
});
