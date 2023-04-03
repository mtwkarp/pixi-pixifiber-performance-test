const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: {directory: path.resolve(__dirname, './public')},
        hot: true,
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin({patterns: [{
                from: 'src/static',
                to: 'static'
            }]}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/static/index.html')
        })
    ]
}