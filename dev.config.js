
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devoEntryOnly = {
    test: /[\\/]src\/styles\/variables[\\/]/, 
    name: "devoEntryOnly",
    enforce: true
}

// const inlineCssRule = {
//   test: /\.css$/,
//   include: [
//     path.resolve(__dirname, 'src'),
//     path.resolve(__dirname, '_lib')
//   ],
//   use: [
//     {
//       loader: 'style-loader', options: {
//         insertAt: 'top'
//       }
//     },
//     {
//       loader: 'css-loader', options: { 
//           importLoaders: 1,
//           sourceMaps: true,
//           modules: true,
//           localIdentName: '[name]_[local]',
//           alias: {
//             'styles': path.resolve(__dirname, "src/styles"),
//             'lib': path.resolve(__dirname, "_lib")
//           }
//         }
//     },
//     'postcss-loader'
//   ]
// };

const styleLoader = {
    loader: 'style-loader', options: {
      insertAt: 'top', 
      singleton: true
    }
};



const cssLoader = {
      loader: 'css-loader', options: { 
          importLoaders: 1,
          sourceMaps: true,
          modules: true,
          localIdentName: '[name]_[local]',
          alias: {
            'styles': path.resolve(__dirname, "src/styles")
          }
        }
    };

const postcssLoader = 'postcss-loader';
const cssBase = {
  test: /\.css$/,
};


const Chunk1 = {
  ...cssBase, 
  use: [ MiniCssExtractPlugin.loader, cssLoader, postcssLoader ],
  include: [
      path.resolve(__dirname, 'src/styles'),
    ]
}; 

const Chunk2 = {
  ...cssBase, 
  use: [styleLoader, cssLoader, postcssLoader],
   include: [
      path.resolve(__dirname, 'src'),
    ],
    exclude: [
      path.resolve(__dirname, 'src/styles')
    ]
  
}



const devConfig = {
  devtool: 'cheap-source-map',
  mode: 'development',
  optimization: {
    splitChunks: { cacheGroups: {"devoEntryOnly": devoEntryOnly }},
    runtimeChunk: true
  },
  module: {
    rules: [
      // inlineCssRule
      Chunk1,
      Chunk2
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
      disable: false, 
      ignoreOrder: true
    }),
    new OptimizeCssAssetsPlugin({})
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

      
