const env = process.env.NODE_ENV
const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const envConfig = env === 'production' ? require('./prod.config.js') : require('./dev.config.js');


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
  'axios',
  'redux-thunk',
  'react-router-redux',
  'history',
  'react-router-dom',
  'react-css-modules'
];

const baseConfig = {
  resolve: {
    modules: [path.resolve(__dirname, "src"), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.md'],
    alias: {
      'assets': path.resolve(__dirname, "src/assets"),
      'components': path.resolve(__dirname, "src/components"), 
      'containers': path.resolve(__dirname, "src/containers"),
      'modules': path.resolve(__dirname, "src/modules"),
      'pages': path.resolve(__dirname, "src/pages"),
      'styles': path.resolve(__dirname, "src/styles"),
    }
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: "./index.js",
    vendor: vendors
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
            emitFile: false
            // name: '[path][name].[ext]'
          }
        },
      },
    ],
  },
  plugins: [
    envPlugin,
    new HtmlWebpackPlugin({template: 'index.html'}),
    new CopyWebpackPlugin([{from: 'assets', to: 'assets'}]),
    new webpack.optimize.CommonsChunkPlugin({ names: ["app", "vendor"] }),
    new webpack.ProvidePlugin({
      'React': 'react',
      'Component': ['react', 'Component'],
      'PropTypes': 'prop-types',
      'cx': 'classnames/bind',
      'CSSModules': 'react-css-modules'
    })
  ]
};

module.exports = merge(baseConfig, envConfig); 

      
