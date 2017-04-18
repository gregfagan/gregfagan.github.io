import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'

const config = {
  entry: './static.js',
  output: {
    filename: 'bundle.js',
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
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin({
      paths: ['index.html', 'resume.html']
    }),
    new CopyWebpackPlugin([{from: 'CNAME'}]),
    new webpack.NoEmitOnErrorsPlugin()
  ],
}

export default config
