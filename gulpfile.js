var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var colors = require('colors');
var connect = require('gulp-connect');

gulp.task('pug', function () {
  gulp.src('src/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./build'))
      .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('fun', function () {
  const sayings = [
    "May the Force be with you",
    "Set phasers to stun",
    "Live long and prosper",
    "In space no one can hear you scream",
    "No, I am your father",
    "Warp 9. Engage!",
    "Uncle Owen! Aunt Beru!",
    "Never tell me the odds"
  ];
  console.log(sayings[Math.floor(Math.random() * sayings.length)].rainbow + "... ".rainbow);
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.pug', ['fun', 'pug']);
  gulp.watch('src/**/*.scss', ['fun', 'sass']);
});