// 
// LiveScript support for Parcel bundler
// 
module.exports = function(bundler) {
  bundler.addAssetType('ls', require.resolve('./ls2'));
}
