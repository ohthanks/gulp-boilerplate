var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('compress:js', function(){
	return gulp.src(config.staticJS+'/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(config.staticJS))
});

gulp.task('compress:css', function(){
	return gulp.src(config.staticCSS+'/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.staticCSS))
});

gulp.task('compress', function(done){
	runSequence('compress:js', 'compress:css', done);
});


