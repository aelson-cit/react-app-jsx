var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './_client-side/app.js',
  output: { path: `${__dirname}/public`, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
