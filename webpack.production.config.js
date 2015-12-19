var path = require('path');
var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
      { test: /\.css?$/, loader: 'style!css' },
      {
        test: /\.scss$/,
        include: /src/,
        loader: "style!css!sass"
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
  }
};

module.exports = config;
