const env = process.env.NODE_ENV
const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const envConfig = env === 'production' ? require('./prod.config.js') : require('./dev.config.js');

const envType = env === 'production' ? 'production' : 'development';

const envPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  }
});

var vendors = [
  'react',
  'react-dom',
  'classnames',
  'prop-types',
  'redux', 
  'react-redux', 
  'redux-thunk',
  'react-router-redux',
  'history',
  'react-router-dom',
  'react-css-modules',
  'reflexbox'
];


const chunkB = {
  cacheGroups: {
    commons: {
      name: 'commons',
      chunks: 'all',
      minChunks: 2,
      enforce: true
    }
  }
}

const chunkTest = {
  splitChunks: {
    chunks: "async",
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true,
    cacheGroups: {
      "app": {
        minChunks: 2, 
        reuseExistingChunk: true,
        priority: -20
      },
      "vendor": {
        test: /[\\/]node_modules[\\/]/, 
        name: "vendor",
        priority: -10
      },
    }, 
  }
}

const baseConfig = {
  optimization: chunkTest,
  resolve: {
    modules: [path.resolve(__dirname, "src"), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.md'],
    alias: {
      'assets': path.resolve(__dirname, "src/assets"),
      'components': path.resolve(__dirname, "src/components"), 
      'containers': path.resolve(__dirname, "src/containers"),
      'modules': path.resolve(__dirname, "src/modules"),
      'routes': path.resolve(__dirname, "src/routes"),
      'styles': path.resolve(__dirname, "src/styles"),
    }
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: "./index.js",

    // vendor: vendors, 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'src/styles')
        ], 
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.json?$/,
        use: ['json-loader']
      },
      {
        test: /\.svg$/, 
        exclude: /node_modules/,
        oneOf: [
          { 
            resourceQuery: /jsx/, 
            use: 'react-svg-loader' 
          },
          {
            use: 'url-loader'
          }
        ]
      },
      {
        test: /\.gif$|\.jpe?g$|\.woff|\.eot|\.ttf|\.png$/i,
        use: { 
          loader: 'url-loader', 
          options: {
            limit: 10000, 
            emitFile: false,
            name: '[path][name].[ext]'
          }
        },
      },
    ],
  },
  plugins: [
    envPlugin,
    new HtmlWebpackPlugin({template: 'index.html'}),
    new CopyWebpackPlugin([{from: 'assets', to: 'assets'}]),
    new webpack.ProvidePlugin({
      'React': 'react',
      'Component': ['react', 'Component'],
      'Fragment': ['react', 'Fragment'],
      'PropTypes': 'prop-types',
      'cx': 'classnames/bind',
      'CSSModules': 'react-css-modules',
      '_Flex': ['reflexbox', 'Flex'],
      '_Box': ['reflexbox', 'Box']
    }),
  ]
};

module.exports = merge(baseConfig, envConfig); 

      
