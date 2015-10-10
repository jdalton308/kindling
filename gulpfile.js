
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

var styleFiles = [
        'css/less/main.less'
    ];



gulp.task('styles', function() {
    gulp.src(styleFiles)
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch(['css/less/*.less'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);