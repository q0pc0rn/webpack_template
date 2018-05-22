let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    devServer:{
        port: 4200
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader"}
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
        ]
        },
        plugins: [
          new ExtractTextPlugin("styles.css"),
          new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: 'index.html',
          }),
        ]
};
module.exports = (env, options) => {
    let production = options.mode === 'production';
    
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
}
