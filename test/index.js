//
// Simple Parcel run
//
process.exit(0) // No tests yet

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
  if (liveScriptSevenUp(6) == 42) {
    console.log('Ok')
  }
  else {
    console.error('Fail')
    process.exit(1)
  }
})
