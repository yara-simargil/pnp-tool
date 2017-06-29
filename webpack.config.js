const path = require('path');
const webpack = require('webpack');

module.exports = {
  // context: path.resolve(__dirname, 'src'),

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8090,
  }
};
