import gulp from 'gulp'
import gulpSass from "gulp-sass"
import nodeSass from "sass";
const sass = gulpSass(nodeSass);
import htmlminify from 'gulp-html-minify'
import BS from 'browser-sync'
const browserSync = BS.create();
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename'
import clean from 'gulp-clean'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
const { src, dest, task, watch, series } = gulp;

const cleanFunc = () => src('dist/*', {read: false})
    .pipe(clean())

const buildCss = () => src('src/style/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
        env: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/style'));

const buildHtml = () => src('src/index.html')
    .pipe(htmlminify())
    .pipe(dest('dist'))

const imgMin = () => src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))

const buildJs = () => src('src/js/**/*')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/'))

const startWatching = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    watch('src/**/*').on('all', series(buildCss, buildJs, buildHtml, browserSync.reload));
}

task('dev', startWatching)
task('build', series(cleanFunc, buildHtml, buildCss, buildJs, imgMin))
