const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const mincss = require("gulp-clean-css");
const terser = require("gulp-terser");
const webp = require("gulp-webp");

/*
// minImg and webpconverter

import gulp from "gulp";
import imagemin from "imagemin";
gulp.task("minifyImg", () => {
  gulp.src("src/img/*.{jpg,png}").pipe(imagemin()).pipe(gulp.dest("dir/img"));
});

*/

// Css functions
function minifyCss() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(mincss())
    .pipe(gulp.dest("dir/css"));
}

//Js functions
function minifyJs() {
  return gulp.src("src/js/*.js").pipe(terser()).pipe(gulp.dest("dir/js"));
}

//Webp conversor
function webpConverter() {
  return gulp
    .src("src/img/**/*.{png,jpg}")
    .pipe(webp())
    .pipe(gulp.dest("dir/img"));
}

// Watch task
function watch() {
  gulp.watch("src/sass/**/*.scss", minifyCss);
  gulp.watch("src/js/*.js", minifyJs);
}

// Tasks
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.webpConverter = webpConverter;
exports.watch = watch;

exports.default = gulp.series(minifyCss, minifyJs, watch);
