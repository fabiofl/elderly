var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function(){
	connect.server({
		root: './app',
		port: '8090',
		fallback: 'app/index.html'
	});
});

gulp.task('default', ['server']);