
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var styleFiles = [
        'css/scss/main.scss'
    ];
var jsFiles = [
		'node_modules/jquery/dist/jquery.min.js',
		'js/src/main.js'
	];



gulp.task('styles', function() {
    gulp.src(styleFiles)
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function(){
	gulp.src(jsFiles)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/'))
		.on('error', gutil.log);
});

gulp.task('watch', function(){
    gulp.watch(['css/scss/*.scss'], ['styles']);
    gulp.watch(['js/src/*.js'], ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);