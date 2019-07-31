const path = require('path')
const package = require('./package.json')
const glob = require('glob')

module.exports =  [
  // Generating browser version of wordsAndNumbers
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'wordsAndNumbers.' + package.version+ '.js',
      library: 'wan'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  },

  // Generating a latest browser version of wordsAndNumbers (same as latest version number)
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'wordsAndNumbers.latest.js',
      library: 'wan'
    },
    devtool: "none", // prevent webpack from using eval() on my module
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