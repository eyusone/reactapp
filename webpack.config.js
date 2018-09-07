var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.jsx",
    output:{
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },



    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["env", "react"]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
                  { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' }
        ]
    },

    devServer: {
    historyApiFallback: true
    },

    plugins: [
            new webpack.ProvidePlugin({
                $: "jquery/dist/jquery.min.js",
                jQuery: "jquery/dist/jquery.min.js",
                "window.jQuery": "jquery/dist/jquery.min.js"
            })
        ]
};
