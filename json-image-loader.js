module.exports = function(source) {
  this.cacheable && this.cacheable();
  let images = /"[^"]*.(?:jpg|png|svg)"/g;
  return source.replace(images, (image) => `require(${image})`);
}