const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const prodConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.global\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              query: {
                importLoaders: 1, sourceMaps: true, modules: true,
                alias: {
                  'styles': path.resolve(__dirname, "src/styles")
                }
              },
            },
            {
              loader: 'postcss-loader'
            }],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "[name].css", disable: false, allChunks: true}),
    new CompressionPlugin(),
    new UglifyJsPlugin({
      sourceMap: true
     })
  ]
}

module.exports = prodConfig; 