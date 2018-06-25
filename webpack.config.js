const path = require('path');

const DIST_DIR = 'dist';
const SRC_DIR = 'src';

const config = {
    context: path.resolve(__dirname, SRC_DIR),
    entry: {
        vendor: './lib/vendor.js',
        lib: './lib/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, DIST_DIR),
        library: '',
        library: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader!awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|sass|scss)$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            "lib": path.resolve(__dirname, SRC_DIR, 'lib'),
        }
    },
}

module.exports = config;
