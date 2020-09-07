//
// ls2.js - Transpile LiveScript to JavaScript
//
const { compile } = require('livescript');
const { Asset } = require('parcel-bundler');

class LiveScriptAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  async generate() {
    let lsOptions = {
      bare: true,
      filename: this.relativeName,
      map: this.options.sourceMaps
    };

    let transpiled = compile(this.contents, lsOptions);
    let sourceMap = undefined;
    if (transpiled.map) {
      this.contents = transpiled.code;
      sourceMap = transpiled.map.toJSON();
    } else {
      this.contents = transpiled;
    }

    let parts = [
      {
        type: 'js',
        value: this.contents,
        sourceMap: sourceMap,
      }
    ];

    return parts;
  }
}

module.exports = LiveScriptAsset;
