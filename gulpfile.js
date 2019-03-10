var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); // For live reloading

gulp.task('sass', function() {
 return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());

});

//gulp.task('watch', function() {
  //gulp.watch('./sass/*.scss', ['sass']); /*For watching changes in sass and auto update in css file*/
//});

/*gulp.task('default', ['sass', 'watch']);*/
  
gulp.task('serve', ['sass'], function() {
	
	browserSync.init({
		server: './'
	});

	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);

});

gulp.task('default', ['serve']);