const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve("resources/js"),
      resources: path.resolve(__dirname, "resources"),
      components: path.resolve(__dirname, "resources/js/components"),
      pages: path.resolve(__dirname, "resources/js/pages"),
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
