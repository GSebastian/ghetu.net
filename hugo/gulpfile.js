var gulp = require("gulp"),
    less = require("gulp-less"),
    path = require('path'),    
    shell = require('gulp-shell'),    
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] })
    
// Compile LESS files to CSS
gulp.task("less", function () {
    gulp.src("./src/less/theme.less")
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest("./static/css"))
})

// Watch asset folder for changes
gulp.task("watch", ["less"], function () {
    gulp.watch("src/less/**/*", ["less"])
})

gulp.task('firebase', ["less"], shell.task([
    'rm -rf ./public && hugo && firebase deploy --token ***REMOVED***'
]))

// Set watch as default task
gulp.task("default", ["watch"])