const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: !0,
          preserveWhitespace: !1,
          loaders: {}
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  devtool: false,
  plugins: [
    new VueLoaderPlugin()
  ]
};
