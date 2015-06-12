var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean:css', function(done){
	del(config.staticCSS+'/*', done);
});

gulp.task('clean:js', function(done){
	del(config.staticJS+'/*', done);
});

