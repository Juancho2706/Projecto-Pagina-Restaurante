const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mainModule } = require('process');

module.exports = {
    mode: 'development',    //solo desarrollo, quitar a produccion
    entry: {
       principal: './src/principal.js',
       esqueleto: './src/esqueleto.js',
    },
    devtool: 'inline-source-map', //para ver bien los codigos en dev tools chrome
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Projecto Restaurant DEV',
        }),
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}