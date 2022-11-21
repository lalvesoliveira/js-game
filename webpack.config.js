const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'script.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};