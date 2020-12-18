const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

module.exports = [
  // Generating browser version of words'n'Numbers
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'words-n-numbers.js',
      library: 'wnn'
    },
    devtool: 'hidden-source-map' // prevent webpack from using eval() on my module
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
      }
    },
    node: {
      global: true,
      __filename: false,
      __dirname: false
    },
    plugins: [
      // fix "process is not defined" error:
      new webpack.ProvidePlugin({
        process: 'process/browser'
      })
    ]
  }
]
