var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create(); // For live reloading
var reload = browserSync.reload;

gulp.task('sass', function() {
 return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());

});

gulp.task('concat', function(){
   return gulp.src('./js/*.js')
          .pipe(concat('common.js')) // common.js will going to create in js folder
          .pipe(gulp.dest('js'));
});

//gulp.task('watch', function() {
  //gulp.watch('./sass/*.scss', ['sass']); /*For watching changes in sass and auto update in css file*/
//});

/*gulp.task('default', ['sass', 'watch']);*/
  
 
 gulp.task('serve', ['sass', 'concat'], function() {
	
 	browserSync.init({
 		server: './'
 	});

 	gulp.watch('./sass/*.scss', ['sass']);
 	gulp.watch('./*.html').on('change', browserSync.reload);

 });

gulp.task('default', ['serve']);

/*gulp.task('browserSync', function(){
  browserSync.init({
		server: './'
	});
});

gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.watch('./sass/*.scss', ['sass']);
gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync', 'sass', 'watch']);*/