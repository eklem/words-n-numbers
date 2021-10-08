import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: './src/index.js',
    output: [
      { name: 'math', file: pkg.browser, format: 'umd', exports: 'named' },
      { name: 'math', file: pkg.main, format: 'cjs', exports: 'named' },
      { name: 'math', file: pkg.module, format: 'es', exports: 'named' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json() // for Rollup to be able to read content from package.json
    ]
  }
]
