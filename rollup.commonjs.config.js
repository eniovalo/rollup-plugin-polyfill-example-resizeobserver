const polyfill = require('rollup-plugin-polyfill');
const resolve = require('rollup-plugin-node-resolve')

const plugins = [
  resolve(),
  polyfill(['resize-observer-polyfill']),
]

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'commonjs',
    name: 'example',
    strict: false
  },
  plugins: plugins
}
