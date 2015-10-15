var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var url = require('url-loader');

/* Using resolve rather than join() is the same as navigating to a file with cd,
    And seen as though webpack likes absolute paths, this is good.
*/
var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/App.js'),
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(ROOT_PATH, 'app')
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', 'css', 'scss']
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Smoothie Roulette'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    devServer: {
      port: 4000,
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
