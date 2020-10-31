const path = require('path')
const package = require('./package.json')
const glob = require('glob')

module.exports =  [
  // Generating browser version of words'n'Numbers
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'words-n-numbers.' + package.version+ '.js',
      library: 'wnn'
    },
    devtool: 'none', // prevent webpack from using eval() on my module
  },

  // Generating a latest browser version of words'n'Numbers (same as latest version number)
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'words-n-numbers.latest.js',
      library: 'wnn'
    },
    devtool: 'none', // prevent webpack from using eval() on my module
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    }
  }
]