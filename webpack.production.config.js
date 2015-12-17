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
        exclude: "node_modules",
        loader: 'babel'
      },
      {
        test: /.js$/,
        loader: 'imports?define=>false',
        include: /(fizzy\-ui\-utils|outlayer|get\-size|packery)[\\\/]/
      }
    ]
  }
};

module.exports = config;
