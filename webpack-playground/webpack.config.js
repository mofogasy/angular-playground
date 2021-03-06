const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        main: './src/index.js',
        myPrint: './src/print.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src/loaders')
        ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.txt/,
                use: [
                    {
                        loader: "txt-loader"
                    }
                ]
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(png|gif|jpg)$/, loader: 'file-loader'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            path: path.resolve(__dirname, 'dist')
        })
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }
    return config;
};
