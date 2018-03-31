const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const extractedCssRule = {
  test: /\.css$/,
  exclude: [/node_modules/],
  use: [
    MiniCssExtractPlugin.loader,
    {
    loader: 'css-loader',
    query: {
      importLoaders: 1, 
      sourceMaps: true, 
      modules: true,
      localIdentName: '[name]_[local]',
      alias: {
        'styles': path.resolve(__dirname, "src/styles")
      }
    },
  },
  {
    loader: 'postcss-loader'
  }]
}

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      extractedCssRule
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new UglifyJsPlugin({
      sourceMap: true
     }),
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
      disable: false, 
      ignoreOrder: true,
      // allChunks: true, 
    }),
    new OptimizeCssAssetsPlugin({

    })
  ]
}

module.exports = prodConfig; 