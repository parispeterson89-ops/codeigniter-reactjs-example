const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development'

console.info('webpack', `${NODE_ENV.toUpperCase()} mode`)

// const plugins = [
//   new webpack.DefinePlugin({
//     'process.env.NODE_ENV': JSON.stringify('development')
//   }),
//   new webpack.optimize.OccurenceOrderPlugin()
// ]
const plugins = []

let babelQuery = {}

// if (NODE_ENV === 'development') {
//   babelQuery = { cacheDirectory: true, presets: ['react-hmre'] }
// }

// console.log('babelQuery:', babelQuery, NODE_ENV)

module.exports = {
  devtool: 'eval',
  entry: [ './src/table.js' ],
  debug: !(NODE_ENV === 'production'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'table.js',
    publicPath: '/build/'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: babelQuery
      }
    ]
  }
}