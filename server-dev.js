const path = require("path");
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.dev");
const options = {
    contentBase: path.resolve(__dirname, "/dist"),
    inline: true,
    host: "0.0.0.0",
    historyApiFallback: {
        index: "./index.html"
    },
    overlay: {
        warnings: true,
        errors: true
    }
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen("5000", "localhost", () => {
    console.log("dev server listening on port 5000");
});
