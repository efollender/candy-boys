var gulp = require('gulp');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function(){
	gulp.src('src/styles/*.styl')
		.pipe(stylus({
			compress: true
			}))
		.pipe(gulp.dest('public/styles'));
});
gulp.task('images', function(){
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/images'));
});

gulp.task('default', ['styles', 'images']);