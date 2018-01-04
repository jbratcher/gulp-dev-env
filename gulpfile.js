// Require dependencies
// Gulp, BrowserSync, SASS, useref with gulpif to bundle and minify CSS adn JS, CSS autoprefixer, Imagemin to optimize images, cache to reduce reload, del to remove(clean) the dist directory

const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const useref        = require('gulp-useref');
const uglify        = require('gulp-uglify');
const gulpIf        = require('gulp-if');
const cssnano       = require('gulp-cssnano');
const imagemin      = require('gulp-imagemin');
const cache         = require('gulp-cache');
const del           = require('del');
const autoprefixer = require('gulp-autoprefixer');

// Move vendor files from node modules to src folders

// Move Fonts (font awesome) to src/fonts

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

// Move Font Awesome Icons CSS to src/css/vendor

gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css/vendor'));
});

// Compile Sass & Inject Into Browser (Watched)

gulp.task('sass', function() {
  return gulp.src(['src/scss/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

// Add vendor prefixes to src CSS and move to dist

gulp.task('autoprefix', function() {
    return gulp.src(['src/css/*.css'])
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

// Optimize Images and cache (Watched)

gulp.task('img', function(){
  return gulp.src('src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
          interlaced: true
        })))
  .pipe(gulp.dest('dist/images'));
});

// Live Reload function

// Serve and Watch src files

gulp.task('browserSync', ['sass'], function() {
  browserSync.init({
      server: "./src",
      port: 8082     // Change port as needed, 8082 is for Cloud 9 workspace
  });
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
  gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

// Bundle JS and CSS and minify then move to dist

gulp.task('useref', function() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Move src files to dist

gulp.task('build:dist', function() {
    return gulp.src(["src/**"])
        .pipe(gulp.dest("dist"));
});

// Clean Dist folder

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// Gulp default tasks

gulp.task('default', ['browserSync', 'sass', 'fonts', 'fa', 'img', 'autoprefix']);

gulp.task('build', ['clean:dist', 'build:dist', 'useref', 'sass', 'fonts', 'fa', 'img', 'autoprefix']);

