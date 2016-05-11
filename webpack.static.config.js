/* eslint-disable */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var WebpackEnvPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify('ghpages'),
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'index_bundle.js',
    publicPath: './'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', '!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    WebpackEnvPlugin,
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};
