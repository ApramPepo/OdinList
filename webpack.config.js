const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
        static: path.resolve(__dirname, "dist"),
        hot: true,
        open:true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    moduel: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
}