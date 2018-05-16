const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry: {
        app: path.resolve(__dirname,  "./src/index.js")
    },

    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "./dist")
	},

    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },

    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(["./dist"]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
	]


}
