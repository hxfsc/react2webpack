const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  target: "node",
  entry: path.resolve(__dirname, "src/index-ssr.js"),
  output: {
    filename: "index-ssr.js",
    libraryTarget: "commonjs2"
  }
});
