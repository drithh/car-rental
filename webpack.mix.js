const mix = require("laravel-mix");
require("dotenv").config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const url = process.env.WEBSERVER_URL;

mix
  .js("resources/js/app.js", "public/js")
  .vue()
  .sass("resources/sass/app.scss", "public/css")
  .postCss("resources/css/app.css", "public/css", [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ])
  .browserSync(url)
  .disableNotifications()
  .webpackConfig(require("./webpack.config"));

//     mix
//   .js("resources/js/app.js", "public/js")
//   .vue()
//   .postCss("resources/css/app.css", "public/css", [
//     require("postcss-import"),
//     require("tailwindcss"),
//     require("autoprefixer"),
//   ])
//   .sass("resources/sass/app.scss", "public/css")

//   .browserSync("rental-mobil.test")
//   .disableNotifications();
