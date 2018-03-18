var gulp = require("gulp"),
    less = require("gulp-less"),
    path = require('path'),
    shell = require('gulp-shell'),
    removeEmptyLines = require('gulp-remove-empty-lines'),
    purify = require('gulp-purifycss'),
    runSequence = require('run-sequence'),
    cleanCSS = require('gulp-clean-css'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    htmlBeautify = require('gulp-html-beautify'),
    minify = require('gulp-minify'),
    autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] })

// Compile LESS files to CSS
gulp.task("less", function () {
    gulp.src("./src/less/theme.less")
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest("./static/css"))
})

gulp.task("html-clean", function () {
    gulp.src('./public/**/*.html')
        .pipe(removeEmptyLines({
            removeComments: false
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task("clear-generated", shell.task(['rm -rf ./public']));

gulp.task("build-hugo", shell.task(['hugo']));

gulp.task('purge-css', () => {
    return gulp.src('./public/css/*.css')
        .pipe(purify(['./public/**/*.html']))
        .pipe(gulp.dest('./public/purged-css'));
})

gulp.task('minify-css', () => {
    return gulp.src('./public/purged-css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/minified-css/'));
});

gulp.task('minify-js', function() {
    gulp.src('./public/js/*.js')
      .pipe(minify({
        ext:{
            min:'.js'
        },
        noSource: true
      }))
      .pipe(gulp.dest('./public/minified-js/'))
  });

gulp.task('move-rename-optimized-css', shell.task(['rm -rf ./public/css', 'rm -rf ./public/purged-css', 'mv ./public/minified-css ./public/css']));

gulp.task('move-rename-optimized-js', shell.task(['rm -rf ./public/js', 'mv ./public/minified-js ./public/js']));

gulp.task('htmlBeautify', function() {
    var options = { indentSize: 2 };
    gulp.src('./public/**/*.html')
      .pipe(htmlBeautify(options))
      .pipe(gulp.dest('./public/'))
  });

// Watch asset folder for changes
gulp.task("watch", ["less"], function () {
    gulp.watch("src/less/**/*", ["less"])
})

gulp.task('firebase', shell.task([
    'firebase deploy --token ***REMOVED***'
]))

gulp.task('s3-clear', shell.task([
    'aws s3 rm s3://ghetu.net --recursive'
]))

gulp.task('s3-upload', shell.task([
    'aws s3 cp "/Users/sebastian/Documents/Personal\ development/sebastian.ghetu.net-blog-stack/hugo/public/" s3://ghetu.net --recursive'
]))

// Set watch as default task
gulp.task("default", ["watch"])

gulp.task('deploy-firebase', function (callback) {
    runSequence('less',
        'clear-generated',
        'build-hugo',
        'html-clean',
        'purge-css',
        'minify-css',
        'minify-js',
        'move-rename-optimized-css',
        'move-rename-optimized-js',        
        'htmlBeautify',
        'firebase',
        callback);
});

gulp.task('deploy-aws', function (callback) {
    runSequence('less',
        'clear-generated',
        'build-hugo',
        'html-clean',
        'purge-css',
        'minify-css',
        'minify-js',
        'move-rename-optimized-css',
        'move-rename-optimized-js',        
        'htmlBeautify',
        's3-clear',
        's3-upload',
        callback);
});