//
// ls2.js - Transpile LiveScript to JavaScript
//
const livescript = require('livescript')
const JSAsset = require('parcel-bundler/src/assets/JSAsset')

module.exports = class LiveScriptAsset extends JSAsset {
  parse(code) {
    let transpiled = livescript.compile(code, {
      bare: true,
      filename: this.relativeName,
      map: this.options.sourceMaps && 'debug'
    })
    if (transpiled.map) {
      this.contents = transpiled.code
      this.sourceMap = transpiled.map.toJSON()
    } else {
      this.contents = transpiled
    }
    return super.parse(this.contents)
  }
}
