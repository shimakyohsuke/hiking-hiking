import config from './config.js'
import path from 'path'

const DEST = config.baseConfig.publishDir

export default {
  devtool: '',
  entry: [
    path.resolve('') + '/src/js/entry.js'
  ],
  output: {
    path: path.resolve('') + DEST,
    filename: config.tasks.webpack.filename
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
