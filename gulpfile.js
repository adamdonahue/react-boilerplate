var del = require('del');
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var path = require('path');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var _ = require('lodash');
var gutil = require('gulp-util');

var paths = {
  src: {
    js: './src/js',
    sass: '/src/sass'
  },
  build: './public'
};

var browserifyOpts = {
  entries: [path.join(paths.src.js, 'index.js')],
  debug: true
};
var opts = _.assign({}, watchify.args, browserifyOpts);
var b = watchify(browserify(opts).transform(babelify));

b.on('update', bundle);
b.on('log', gutil.log);

/**
 * Convert a Browserify object into its associated bundle.js.
 */
function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.join(paths.build, 'js')));
}

gulp.task('js', bundle);
gulp.task('css', function () {
  gutil.log('Would generate CSS from Sass files.');
});

gulp.task('clean', function () {
  del([paths.build]);
});

gulp.task('watch', ['js', 'css']);
gulp.task('default', ['watch']);
