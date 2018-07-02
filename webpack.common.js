const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },

    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "./dist")
    },

    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: { javascriptEnabled: true }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(["./dist"]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ]
};
