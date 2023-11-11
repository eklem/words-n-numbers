import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: './src/index.js',
    output: [
      { name: 'wnn', file: './dist/words-n-numbers.umd.js', format: 'umd' },
      { file: './dist/words-n-numbers.cjs.js', format: 'cjs', exports: 'auto' },
      { file: './dist/words-n-numbers.esm.mjs', format: 'esm', exports: 'auto' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  }
]
