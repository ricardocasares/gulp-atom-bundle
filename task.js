module.exports = (gulp, cfg) => {
  const watchify = require('gulp-watchify')

  return watchify(watchify => gulp
    .src(cfg.src)
    .pipe(watchify(cfg.watchify))
    .pipe(gulp.dest(cfg.dest)))
}
