const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { OptimizationStages } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // print: './src/print.js',
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/index.html',],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        title: 'Development',
        inject: 'body',
      })
    ]
};