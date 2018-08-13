var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: 'public/',
        filename: "bundle.js"       // название создаваемого файла
    },

    devServer: {
     historyApiFallback: true,
    },
    
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
                /*include: [
                path.resolve(__dirname, 'node_modules/react-scroll/lib')
                ]*/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    plugins: [
            new webpack.ProvidePlugin({
                $: "jquery/dist/jquery.min.js",
                jQuery: "jquery/dist/jquery.min.js",
                "window.jQuery": "jquery/dist/jquery.min.js"
            })
        ]
}