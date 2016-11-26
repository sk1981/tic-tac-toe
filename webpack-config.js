var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.ts', './style/main.scss']
  },
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    filename: '[name]-[hash]-bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /jade?$/,
        loader: 'pug-loader',
        exclude: /node_modules/,
        query: {pretty: true}
      },
      { 
        test:/\.otf?$/,
        loader: 'url-loader?limit=100000'
      }

]
  },
  postcss: [
    autoprefixer({browsers: ['last 3 versions']})
  ],
  plugins: [
    new ExtractTextPlugin("[name]-[hash]-styles.css"),
    new HtmlWebpackPlugin({
      template: './index.jade',
      inject: 'body'
    })
  ]
};

