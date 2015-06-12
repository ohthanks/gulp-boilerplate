var notify = require('gulp-notify');

module.exports = function(){
	var args = Arry.prototype.slice.call(arguments);

	// send error to notification center with gulp-notify
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);


	this.emeit('end');
};
