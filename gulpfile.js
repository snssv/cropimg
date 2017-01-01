var current_dir="./html/";
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus');

gulp.task('ts_jade', function() {
    gulp.src('./build/jade/template/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(current_dir))
});
gulp.task('ts_stylus', function() {
    gulp.src(['./build/stylus/index.styl','./build/stylus/admin.styl','./build/stylus/cropimg.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));
});


gulp.task('ts_php', function() {
    //gulp.src('./build/jade/php/**/*.jade')
    //    .pipe(jade({pretty: true}))
    //    .pipe(rename({extname:'.php'}))
    //    .pipe(gulp.dest('./template/default/html/'))
});

gulp.task('default', function() {
    gulp.start('ts_jade','ts_php','ts_stylus','watch');
});

gulp.task('watch', function() {
    gulp.watch('build/jade/**/**/*', ['ts_jade','ts_php']);
    gulp.watch('build/stylus/**/*.styl', ['ts_stylus']);
});