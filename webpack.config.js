const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve("resources/js"),
    },
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.(postcss)$/,
        use: [
          "vue-style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
};
