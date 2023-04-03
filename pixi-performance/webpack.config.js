const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    // module: {
    //     rules: [{
    //         test: /\.(js)$/,
    //         exclude: /node_modules/,
    //         use: {
    //             loader: 'babel-loader'
    //         }
    //     }]
    // },
    plugins: [
        new CopyWebpackPlugin({patterns: [{
                from: 'src/static',
                to: 'static',
                globOptions: {
                    ignore: ['**/static/index.html']
                }
        }]}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/static/index.html')
        })
    ]
}