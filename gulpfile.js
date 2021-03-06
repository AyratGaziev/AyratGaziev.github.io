let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

function look() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
}

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series(look));
});