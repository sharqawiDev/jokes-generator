const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    entry: {
        //the name of the property here will be the name of the file
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    // source mapping helps in debugging by show you where is the error in dev code not in prod code
    devtool: 'source-map',
    // dev server configs
    devServer: {
        // where to serve
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        // open browser once served
        open: true,
        // enable hot reload
        hot: true,
        // jz compression
        compress: true,
        // have no idea what is this
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html'
        })
    ]
}