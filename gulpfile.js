const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const soursemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const processhtml = require('gulp-processhtml');
const imagemin = require('gulp-imagemin-changba');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src('src/css/style.scss')
        .pipe(plumber())
        .pipe(soursemaps.init())
        .pipe(rename('main.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(soursemaps.write())
        .pipe(autoprefixer())
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(plumber())
        .pipe(processhtml())
        .pipe(htmlmin(
            {
                collapseWhitespace: true,
                removeComments: true
            }
        ))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
        .pipe(browserSync.stream());
});

gulp.task('imagemin', function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    gulp.src('src/icons/**/*')
    .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('video', function () {
    gulp.src('src/video/**/*')
    .pipe(gulp.dest("dist/video"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('imagemin'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/video/**/*").on('all', gulp.parallel('video'));
});

gulp.task('default', gulp.parallel('watch', 'styles', 'html', 'imagemin', 'icons', 'video'));
