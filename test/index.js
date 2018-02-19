//
// Simple Parcel run
//
const path = require('path')
const Bundler = require('parcel-bundler')

const root = path.join(__dirname, 'bundle')

new Bundler(path.join(root, 'index.ls'), {
//  target: 'electron',
  watch: false, 
  cache: false,
  sourceMaps: false,
  outDir: root,
  outFile: 'bundle.js',
}).bundle().then(function() {
  require('./bundle/bundle')
})
