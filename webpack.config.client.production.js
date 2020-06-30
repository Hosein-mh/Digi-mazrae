const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 1
                    }
                }
                ]
            }
        ]
    }
}

module.exports = config
