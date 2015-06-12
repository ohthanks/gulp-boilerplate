var sync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');

gulp.task('sync', function(){
	sync.init(config.watching, {
		proxy: config.proxy,
		open: false
	});
});

