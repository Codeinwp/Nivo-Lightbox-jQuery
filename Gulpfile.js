
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify');

gulp.task('styles', function(){
	return gulp.src(['nivo-lightbox.css'])
			   .pipe(rename({suffix: '.min'}))
			   .pipe(cleanCSS())
			   .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function(){
	return gulp.src('nivo-lightbox.js')
		       .pipe(rename({suffix: '.min'}))
		       .pipe(uglify({
			       preserveComments: 'license'
			   }))
		       .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['styles', 'scripts']);
