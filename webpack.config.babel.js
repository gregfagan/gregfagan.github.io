import webpack from 'webpack';
import os from 'os';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';

const config = {
  entry: {
    bundle: './index.js',
    static: './static.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "build"),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['env', { 'modules': false }],
            'react',
          ],
          plugins: [
            'transform-object-rest-spread',
          ],
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin({
      entry: 'static',
      paths: [
        'index.html',
        'resume.html',
      ]
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};

// import _ from 'lodash';
// const netInterfaces = os.networkInterfaces();
// const addresses = _(netInterfaces)
//   .map(value => value)
//   .flatten()
//   .filter(netInterface => (netInterface.family === 'IPv4' && !netInterface.internal))
//   .map(netInterface => netInterface.address)
//   .value();
//
// const devServerConfig = {
//   hostname: _.first(addresses),
//   port: 8080,
// };

// const config = {
//   ...devServerConfig,
//   ...otherBaseConfig,
//   devtool: 'eval',
//   entry: [
//     `webpack-dev-server/client?http://${devServerConfig.hostname}:${devServerConfig.port}`,
//     'webpack/hot/dev-server',
//     ...baseEntry,
//   ],
//   plugins: [
//     ...basePlugins,
//     new webpack.HotModuleReplacementPlugin(),
//   ],
// };

export default config;
