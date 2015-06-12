var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('watch', ['set:watch','sync'], function(){
	gulp.watch(config.assetsSCSS+'/*.scss', function(done){
		runSequence('clean:css', 'build:scss', 'concat:css', 'compress:css', function(done) {});
	});

	});
});


