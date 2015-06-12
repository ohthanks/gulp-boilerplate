// local http server address
var proxy = 'http://localhost/~joe/_projects/gulp-boilerplate';

var assetsJS = 'assets/js';
var assetsSCSS = 'assets/scss';
var assetsCSS = 'assets/css';
var static = 'static';
var staticJS = 'static/js';
var staticCSS = 'static/css';
var partials = 'partials';

var watching = [
	static+'/**',
	'*.php',
	partials+'/*.php'
]

module.exports = {
	proxy: proxy,
	assetsJS : assetsJS,
	assetsSCSS : assetsSCSS,
	assetsCSS : assetsCSS,
	static: static,
	staticJS : staticJS,
	staticCSS: staticCSS,
	watching: watching
};

