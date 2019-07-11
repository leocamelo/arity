const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const src = 'arity.js';

function js() {
  return gulp
    .src(src)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./'));
}

exports.js = js;
exports.default = js;
