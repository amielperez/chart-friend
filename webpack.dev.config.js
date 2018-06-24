const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');
const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const SRC_DIR = 'src';
const DEMO_DIR = 'demo';

const devConfig = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9999,
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'lib', 'demo'],
            chunksSortMode: 'manual',
            template: `./${DEMO_DIR}/index.html`,
        }),
    ]
};
baseConfig.entry.demo = `./${DEMO_DIR}/index.js`;

module.exports = Object.assign(baseConfig, devConfig);
