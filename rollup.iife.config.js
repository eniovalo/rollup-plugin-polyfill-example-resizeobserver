const polyfill = require('rollup-plugin-polyfill');
const resolve = require('rollup-plugin-node-resolve');

const plugins = [
  resolve(),
  polyfill(['./wrapper-resizeobserver.js']),
]

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'example'
  },
  plugins: plugins
}
