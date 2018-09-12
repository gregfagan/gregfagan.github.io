import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'

const config = {
  mode: 'production',
  entry: './src/static.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['index.html', 'resume.html'],
      globals: { window: {} },
    }),
    new CopyWebpackPlugin([{ from: 'CNAME' }]),
  ],
}

export default config
