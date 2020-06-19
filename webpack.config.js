const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = function (env, argv) {
    const isEnvDevelopment = argv.mode === "development" || !argv.mode;
    const isEnvProduction = argv.mode === "production";
    return {
        mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
        devtool: isEnvProduction
            ? "source-map"
            : isEnvDevelopment && "cheap-module-source-map",

        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: './dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader?modules'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ["file-loader"]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: "pre",
                    use: "eslint-loader"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html"
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],

        resolve: {
            alias: {
                "@": path.resolve('src')
            }
        }
    };
};