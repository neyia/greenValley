var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var headerfooter = require('gulp-headerfooter');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('html', function () {
    return gulp.src('./src/*.html').pipe(gulp.dest('./build'));
});

gulp.task('headerfooter', function () {
    gulp.src('./src/*.html')
        .pipe(headerfooter.header('./src/part/header.html'))
        .pipe(headerfooter.footer('./src/part/footer.html'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('less', function () {
    return gulp.src('./src/styles/style.less')
        .pipe(less({
            paths: [ path.join('./src/styles', 'less', 'includes') ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/style.less',['less']);
});