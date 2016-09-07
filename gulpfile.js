var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('minify', function() {
    pump([
            gulp.src('js/main.js').pipe(rename('main.min.js')),
            uglify(),
            gulp.dest('js'),
            gulp.src('css/main.css')
                .pipe(cleanCSS())
                .pipe(rename('main.min.css'))
                .pipe(gulp.dest('css'))
        ]
    );
});