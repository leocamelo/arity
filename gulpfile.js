const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const src = 'arity.js';

gulp.task('uglify', () => {
  gulp.src(src)
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['uglify'], () => {
  gulp.watch(src, ['uglify']);
});
