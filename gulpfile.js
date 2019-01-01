var gulp = require('gulp');
var url = require('url');
var path = require('path');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');
var html = require('gulp-htmlmin');

gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(html({
            collapseWhitespace: true,
            collapseWhitespace: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
})

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
})

gulp.task('clean', function() {
    return gulp.src('src/css/*')
        .pipe(clean())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('server', function() {
    return gulp.src('src/')
        .pipe(webserver({
            host: 'localhost',
            port: '8080',
            open: true,
            livereload: true,
            // middleware: function(req, res, next) {
            // console.log(111);
            // }
        }))
})

gulp.task('dist', gulp.parallel('clean', 'html'));

gulp.task('watch', function() {
    return gulp.watch('src/scss/*', gulp.series('sass', 'html'));
})
gulp.task('default', gulp.series('sass', 'server', 'watch'));