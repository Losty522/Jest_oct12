function sortObjectsByProperty(objects, property) {
    return objects.slice().sort((a, b) => a[property] - b[property]);
  }
  
  module.exports = { sortObjectsByProperty };
  