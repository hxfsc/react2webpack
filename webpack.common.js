const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const tsImportPluginFactory = require("ts-import-plugin");
module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/index.tsx")],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@src": path.resolve("src"),
      "@components": path.resolve("src/components"),
      "@pages": path.resolve("src/pages"),
      "@static": path.resolve("src/static"),
      "@net": path.resolve("src/net"),
      "@reducers": path.resolve("src/reducers"),
      "@utils": path.resolve("src/utils")
    },
    plugins: [new TsConfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      },

      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "antd",
                    libraryDirectory: "lib",
                    style: "css"
                  })
                ]
              })
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }]
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },

  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html")
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[hash].css"
    }),

    new FilterWarningsPlugin({
      exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
    })
  ],

  stats: {
    children: false
  }
};
