import { src, dest, series, parallel, watch } from "gulp";
import htmlMinify from "gulp-html-minifier-terser";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";
import terser from "gulp-terser";
import optimizeImages from "gulp-optimize-images";
import useref from "gulp-useref";
import replace from "gulp-replace";

//===> global files 
const globs = {
  html: "project/**/*.html",
  css: "project/css/**/*.css",
  js: "project/js/**/*.js",
  img: "project/pics/*",
};

// === HTML Task ===
export function htmlTask() {
  //===>  1 - access HTML files
  return (
    src("project/**/*.html")
      //==> 2 - build blocks
      .pipe(useref())
      //==> 3 - replace images paths
      .pipe(replace("pics/", "assets/images/"))
      //==> 4 - minify HTML
      .pipe(htmlMinify({ collapseWhitespace: true, removeComments: true }))
      //==> 5 - save in dest
      .pipe(dest("dist"))
  );
}

// === CSS Task ===
export function cssTask() {
  return (
    src(globs.css)
      // merge all CSS into one
      .pipe(concat("style.min.css"))
      .pipe(cleanCSS())
      .pipe(dest("dist/assets/css"))
  );
}

// === JS Task ===
export function jsTask() {
  return (
    src(globs.js, { sourcemaps: true })
      .pipe(concat("script.min.js"))
      // menify
      .pipe(terser())
      .pipe(dest("dist/assets/js", { sourcemaps: "." }))
  );
}

// === Image Task ===
export function imgTask() {
  return src(globs.img, { encoding: false })
    .pipe(
      optimizeImages({
        compressOptions: {
          jpeg: { quality: 60 },
        },
      })
    )
    .pipe(dest("dist/assets/images"));
}

// === Watch Task ===
export function watchTask() {
  watch(globs.html, htmlTask);
  watch(globs.css, cssTask);
  watch(globs.js, jsTask);
  watch(globs.img, imgTask);
}

// === Default Task ===
export default series(parallel(htmlTask, cssTask, jsTask, imgTask), watchTask);
