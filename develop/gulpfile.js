const { src, dest, watch, parallel } = require('gulp'),
  browsersync = require('browser-sync').create(),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  browserify = require('browserify'),
  through2 = require('through2'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  fibers = require('fibers'),
  autoprefixer = require('autoprefixer'),
  csslint = require('gulp-csslint'),
  eslint = require('gulp-eslint'),
  postCSS = require('gulp-postcss'),
  cleanCSS = require('gulp-clean-css'),
  pug = require('gulp-pug'),
  data = require('gulp-data'),
  ejs = require('gulp-ejs'),
  fs = require('fs'),
  prettify = require('gulp-prettify'),
  imagemin = require('gulp-imagemin'),
  mozjpeg  = require('imagemin-mozjpeg'),
  pngquant = require('imagemin-pngquant'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js'),
  webpack = require('webpack');

// Local server & Browser sync
const taskServer = (done) => {
  browsersync.init({
    server: {
      baseDir: 'dist/',
      index: 'index.html'
    },
    port: 2000
  })
  done();
};
const taskReload = (done) => {
  browsersync.reload();
  done();
};

// webpack & TypeScript
const taskTs = () => 
  webpackStream(webpackConfig, webpack).on('error', function(e) {
    this.emit('end');
  })
  .pipe(dest('dist/assets/js'));

// Browserify & Babel 
const taskEs = (done) => {
  const browserified = through2.obj((file, encode, callback) => {
    browserify(file.path)
      .bundle((error, response) => {
        if(error) {
          return callback(error);
        }
        file.contents = response;
        callback(null, file);
      });
  });
  src('src/es/**/*.js')
    .pipe(browserified)
    .pipe(plumber(
      { errorHandler: notify.onError('Error: <%= error.message %>') }
    ))
    .pipe(sourcemaps.init())
    .pipe(eslint(
      { useEslintrc: true }
    ))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel(
      { presets: ['@babel/preset-env'] }
    ))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename(
      { extname: '.min.js' }
    ))
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('dist/assets/js'));
    done();
}  

// Sass(SCSS)
sass.compiler = require('sass');
const taskScss = () => 
  src('src/scss/**/*.scss')
    .pipe(plumber(
      { errorHandler: notify.onError('Error: <%= error.message %>') }
    ))
    .pipe(sourcemaps.init())
    .pipe(sass(
      { fiber: fibers }
    ))
    .pipe(csslint('.csslintrc.json'))
    .pipe(csslint.formatter())
    .pipe(postCSS([
      autoprefixer(
        { cascade: false, grid: 'autoplace' }
      )
    ]))
    .pipe(cleanCSS())
    .pipe(rename(
      { extname: '.min.css' }
    ))
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('dist/assets/css'));

// Sass(SASS)
const taskSass = () => 
  src('src/sass/**/*.sass')
    .pipe(plumber(
      { errorHandler: notify.onError('Error: <%= error.message %>') }
    ))
    .pipe(sourcemaps.init())
    .pipe(sass(
      { fiber: fibers }
    ))
    .pipe(csslint('.csslintrc.json'))
    .pipe(csslint.formatter())
    .pipe(postCSS([
      autoprefixer(
        { cascade: false, grid: 'autoplace' }
      )
    ]))
    .pipe(cleanCSS())
    .pipe(rename(
      { extname: '.min.css' }
    ))
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('dist/assets/css'));

// Pug
const taskPug = (done) => {
  const jsonData = JSON.parse(fs.readFileSync('src/pug/data/global.json'));
  src([
    'src/pug/**/*.pug',
    '!' + 'src/pug/**/_*.pug'
  ])
    .pipe(plumber(
      { errorHandler: notify.onError('Error: <%= error.message %>') }
    ))
    .pipe(pug({
      locals: jsonData,
      pretty: true
    }))
    .pipe(dest('dist'));
    done();
};

// EJS
const taskEjs = (done) => {
  const jsonData = JSON.parse(fs.readFileSync('src/ejs/data/global.json'));
  src([
    'src/ejs/**/*.ejs',
    '!' + 'src/ejs/**/_*.ejs'
  ])
    .pipe(plumber(
      { errorHandler: notify.onError('Error: <%= error.message %>') }
    ))
    .pipe(ejs(jsonData))
    .pipe(prettify({
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: false
    }))
    .pipe(rename(
      { extname: '.html' }
    ))
    .pipe(dest('dist'));
    done();
}

// Image compress
const taskImagemin = () => 
  src('src/images/*')
    .pipe(plumber())
    .pipe(imagemin([
      pngquant({ 
        quality: [ 0.65, 0.8 ], speed: 1 
      }),
      mozjpeg({ 
        quality: 80
      }),
      imagemin.gifsicle({
        interlaced: false
      }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      }),
    ]))
    .pipe(rename(
      { suffix: '_min' }
    ))
    .pipe(dest('dist/assets/img/_min'));

// Wacth tasks
const taskWatch = (done) => {
  watch('dist/**/*', taskReload);
  watch('src/ts/**/*.ts', taskTs);
  watch('src/es/*.js', taskEs);
  watch('src/scss/**/*.scss', taskScss);
  watch('src/sass/**/*.sass', taskSass);
  watch('src/pug/**/*.pug', taskPug);
  watch('src/ejs/**/*.ejs', taskEjs);
  watch('src/images/*', taskImagemin);
  done();
}

// Task run （$ npx gulp *****）
exports.server = taskServer;
exports.ts = taskTs;
exports.es = taskEs;
exports.scss = taskScss;
exports.sass = taskSass;
exports.pug = taskPug;
exports.ejs = taskEjs;
exports.imagemin = taskImagemin;

// Task run （$ npm run dev）
exports.default = parallel(taskServer, taskWatch);