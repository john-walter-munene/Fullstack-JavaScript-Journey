const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // Use 'source-map' in production as opposed to 'inline-source-map' for development.
  devtool: 'source-map',
});