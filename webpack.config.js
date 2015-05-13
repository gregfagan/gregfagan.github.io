var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/main.js',
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx$|\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.join(__dirname, 'app')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Greg Fagan',
      template: 'app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}