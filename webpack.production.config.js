var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve:{
    modulesDirectories: ['node_modules'],
    alias:{
      "eventEmitter/EventEmitter": "wolfy87-eventemitter"
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /.js$/,
        loader: 'imports?define=>false',
        include: /(fizzy\-ui\-utils|outlayer|get\-size|packery)[\\\/]/
      },
      { test: /\.css?$/, loader: ExtractTextPlugin.extract("style-loader", "style!css") },
      {
        test: /\.scss$/,
        include: /src/,
        loader: ExtractTextPlugin.extract("style-loader", "style!css!sass")
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url-loader?limit=8192',
            'img'
        ]
      },
    ]
  },
  plugins: [
        new ExtractTextPlugin("main.css")
    ]
};

module.exports = config;
