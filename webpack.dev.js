const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const webpackDevConfig = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        environment: JSON.stringify("dev")
      }
    })
  ],

  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 5001,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
});

module.exports = webpackDevConfig;
