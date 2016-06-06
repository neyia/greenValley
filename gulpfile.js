var gulp = require('gulp');
var headerfooter = require('gulp-headerfooter');


gulp.task('html', function () {
    return gulp.src('./src/*.html').pipe(gulp.dest('./build'));
});

gulp.task('headerfooter', function () {
    gulp.src('./src/*.html')
        .pipe(headerfooter.header('./src/part/header.html'))
        .pipe(headerfooter.footer('./src/part/footer.html'))
        .pipe(gulp.dest('./build/'));
});