var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('build:scss', function(done){
	return gulp.src(config.assetsSCSS+'/*.scss')
		.pipe(sass({sourcemap:true}))
			.on('error', gutil.log)
			.on('error', function(){ gutil.beep() })
		.pipe(gulp.dest(config.assetsCSS));
});

