var gulp = require('gulp');
var less = require('gulp-less');
 

gulp.task('styles', function() {
    gulp.src(['./src/less/main.less'])
        .pipe(less())
        // .pipe(minifyCSS())
        .pipe(gulp.dest('style.css'))
});

gulp.task('default', function() {
    // gulp.run('scripts', 'styles', 'html');
    gulp.run('styles');

    // gulp.watch('app/src/**', function(event) {
    //     gulp.run('scripts');
    // });

    gulp.watch('app/css/**', function(event) {
        gulp.run('styles');
    });

    // gulp.watch('app/**/*.html', function(event) {
    //     gulp.run('html');
    // });
});