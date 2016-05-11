import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Greg Fagan',
      template: 'node_modules/html-webpack-template/index.ejs',
      appMountId: 'app',
      mobile: true,
    }),
    new webpack.NoErrorsPlugin()
  ],
};

export default config;