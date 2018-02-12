
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const inlineCssRule = {
  test: /\.css$/,
  include: [
    path.resolve(__dirname, 'src')
  ],
  use: [
    {
      loader: 'style-loader', options: {
        singleton: true,
        insertAt: 'top'
      }
    },
    {
      loader: 'css-loader', options: { 
          importLoaders: 1,
          sourceMaps: true,
          modules: true,
          localIdentName: '[name]_[local]',
          alias: {
            'styles': path.resolve(__dirname, "src/styles")
          }
        }
    },
    'postcss-loader'
  ]
};

const extractedCssRule = {
  test: /\.css$/,
  exclude: [/node_modules/],
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
        loader: 'css-loader',
        query: {
          importLoaders: 1, sourceMaps: true, modules: true,
          localIdentName: '[name]_[local]',
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

const devConfig = {
  devtool: 'cheap-source-map',
  module: {
    rules: [
      extractedCssRule
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({ filename: "[name].css", disable: false, allChunks: true}),
    // new BundleAnalyzerPlugin({openAnalyzer: false})
  ]
};

  devConfig.devServer = {
    hot: true,
    port: 3000,
    inline: true,
    historyApiFallback: true,
    noInfo: true, 
    clientLogLevel: "none",
    watchContentBase: true
  };

module.exports = devConfig; 

      
