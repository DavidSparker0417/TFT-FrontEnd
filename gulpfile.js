const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add FTFTeam licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* TFT Team - Fans Together Website - v0.1.0
=========================================================

* Product Page: https://www.tftteam-fanstogether.com/
* Copyright 2022 TFTTeam (http://www.tftteam.com)

* Coded by Telecrypto@OKI

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add TFTTeam licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* TFT Team - Fans Together Website - v0.1.0
=========================================================

* Product Page: https://www.tftteam-fanstogether.com/
* Copyright 2022 TFTTeam (http://www.tftteam.com)

* Coded by Telecrypto@OKI

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add TFTTeam licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* TFT Team - Fans Together Website - v0.1.0
=========================================================

* Product Page: https://www.tftteam-fanstogether.com/
* Copyright 2022 TFTTeam (http://www.tftteam.com)

* Coded by Telecrypto@OKI

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
