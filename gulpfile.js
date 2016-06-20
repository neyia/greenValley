var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var headerfooter = require('gulp-headerfooter');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('html', function () {
    return gulp.src('./src/*.html').pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
    return gulp.src('./src/scripts/*.js').pipe(gulp.dest('./build/scripts'));
});

gulp.task('fonts', function () {
    return gulp.src('./src/fonts/*/*').pipe(gulp.dest('./build/fonts'));
});

gulp.task('images', function () {
    return gulp.src('./src/img/*/*').pipe(gulp.dest('./build/img'));
});

gulp.task('owl', function () {
    return gulp.src('./src/styles/libs/*.css').pipe(gulp.dest('./build/styles/libs'));
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
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('styles', function() {
    return gulp.src([
        './src/styles/libs/font-awesome.css', 
        './src/styles/libs/jquery.fancybox.css', 
        './src/styles/libs/owl.carousel.css', 
        './src/styles/style.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('scripts', function() {
    return gulp.src([
        
        './src/scripts/map.js', 
        './src/scripts/owl.carousel.js', 
        './src/scripts/owl.carousel.min.js', 
        './src/scripts/owl.green.valley.js', 
        './src/scripts/owl.green.valley.js', 
        './src/scripts/promo-slider.js',
            './src/scripts/jquery.fancybox-1.3.4.js',
            './src/scripts/scripts.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/scripts'));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/style.less',['less']);
    gulp.watch('./src/*.html',['html']);
    gulp.watch('./src/img/*/*',['images']);
    gulp.watch('./src/scripts/*.js',['js']);
    gulp.watch('./src/*.html',['headerfooter']);
});
