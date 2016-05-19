import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from './webpack.base.config.js';

const { output:baseOutput, plugins: basePlugins, ...otherBaseConfig } = baseConfig;
const { publicPath, ...otherOutput } = baseOutput;

const config = {
  ...otherBaseConfig,
  output: {
    ...otherOutput,
    publicPath: '/',
  },
  plugins: [
    ...basePlugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
       'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([{from: 'CNAME'}]),
  ]
}

export default config;