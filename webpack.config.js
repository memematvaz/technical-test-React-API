const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'
  ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader'
              }
            ]
          },
          {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
              ],
          },
          {
            test: /\.(png|git|jpg|svg)$/,
            use: [
                {
                  'loader' : 'file-loader',
                  options: {
                    name: 'assets/[hash].[ex]'
                  }
                }
              ],
          },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}