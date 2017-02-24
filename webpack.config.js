var path = require("path");
var webpack = require("webpack");
var HtmlPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var root = __dirname;
var src = path.join(root, "src");
var dist = path.join(root, "docs");

module.exports = {
    context: src,
    entry: {
        "app": path.join(src, "app.tsx")
    },
    output: {
        path: dist,
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.tsx?$/,  loader: "ts-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                loader: "css-loader!sass-loader" }) },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader' }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true
        }),
        new HtmlPlugin({
            title: "Luke Harris",
            template: path.join(src, "index.html"),
            inject: true,
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin()
    ]
};