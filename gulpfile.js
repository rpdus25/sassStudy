var gulp = require("gulp");
var path = require("path");

var sass = require("gulp-sass");

gulp.task('default', function () {
  gulp.watch([path.join("./", '**/*')], ['sass']);
});

gulp.task("sass", function () {
    var options = {
        sass : {
            outputStyle: 'expaended',
            indentType: 'tab',
            indentwidth: 1
        }
    }
})