import gulp from "gulp";
import htmlmin from "gulp-htmlmin";

gulp.task("html-min", () => {
    return gulp
    .src("./dev/src/views/*.html")
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest("./public"))
})



