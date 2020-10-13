const path = {
	build: {
		html: 'build/',
		style: 'build/style/',
		fonts: 'build/fonts/',
		script: 'build/js/',
	},
	src: {
		html: 'source/**/*.html',
		style: 'source/**/*.css',
		fonts: 'source/fonts/',
		script: 'source/**/*.js',
	}
};

const gulp = require('gulp');
const env = require('gulp-env');				//переменные окружения
const clean = require('gulp-clean');		//zero configuration tool
const babel = require('gulp-babel');		//для трансшпиляции
const concat = require('gulp-concat');	//для объединения файлов
const uglify = require('gulp-uglify');	//для минификации js-файлов
const gulpif = require('gulp-if');			//для минификации js-файлов
const cssnano = require('gulp-cssnano');	//для минификации css-файлов
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');	//работа с html "//= template/footer.html"
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

env ({
	file: '.env',
	type: 'ini',
});

/* сборка html */
gulp.task('build-html', () => {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

/* сборка стилей в один файл style-min.css */
gulp.task('build-styles', () => {
	gulp.src(path.src.style)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
			.pipe(concat('style-min.css'))
    	.pipe(gulpif(process.env.PRODUCTION === 'switch-on', cssnano()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
		.pipe(gulp.dest(path.build.style));
});

/* сборка шрифтов */
gulp.task('build-fonts', () => {
  gulp.src(path.src.fonts + '*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.src.fonts));
   	return gulp.src(path.src.fonts + '*.ttf')
   		.pipe(ttf2woff2())
    	.pipe(gulp.dest(path.src.fonts));
});

gulp.task('copy-fonts', () => {
  gulp.src(path.src.fonts + '*.*')
   	.pipe(gulp.dest(path.build.fonts));
});

/* сборка скриптов в один файл *-min.js */
gulp.task('build-scripts', () => {
	gulp.src(path.src.script)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
			.pipe(concat('scripts-min.js'))
    	.pipe(gulpif(process.env.BABEL === 'switch-on', babel({
	    	presets: ['@babel/env']
	    })))
    	.pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
		.pipe(gulp.dest(path.build.script));
});

/* zero configuration */
gulp.task('clean', () => {
	gulp.src('./build', {read: false})
  	.pipe(clean());
});

gulp.task('default', ['build-html', 'build-styles', 'build-fonts', 'copy-fonts', 'build-scripts', 'browser-sync']);
gulp.task('build', ['build-html', 'build-styles', 'build-fonts', 'build-scripts']);
gulp.task('prod', ['build']);	//build for prod
gulp.task('dev', ['build', 'browser-sync']);	//build for dev

gulp.task('browser-sync', () => {
	browserSync.init({
    server: {
    	baseDir: "./build/"
    }
  });
	gulp.watch(path.src.html, ['watch-html']);
	gulp.watch(path.src.style, ['watch-styles']);
	gulp.watch(path.src.fonts, ['watch-fonts']);
	gulp.watch(path.src.script, ['watch-scripts']);
});

gulp.task('watch-html', ['build-html'], () => browserSync.reload());
gulp.task('watch-styles', ['build-styles'], () => browserSync.reload());
gulp.task('watch-fonts', ['build-fonts', 'copy-fonts'], () => browserSync.reload());
gulp.task('watch-scripts', ['build-scripts'], () => browserSync.reload());
