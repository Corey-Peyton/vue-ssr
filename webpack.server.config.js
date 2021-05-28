const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const {merge} = require('webpack-merge');
const baseWebpackConfig = require(resolve('./webpack.config'));

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  entry: './src/entry-server.js',
  output: {
    path: resolve('./dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  devtool: false,
  externals: Object.keys(require('./package.json').dependencies)
});
