// Write a function that takes an array of objects in the first argument and a single object in the second. Return only the elements that contain all of the key-value pairs that show up in the second object.

function whatIsInAName(collection, source) {
  var k = Object.keys(source);
  var arr = collection.filter(function(item){
    for (var i in k){
      if ( item[k[i]] !== source[k[i]] || !item.hasOwnProperty(k[i]) ){
        return false;
      }
    }
    return true;
  });
  return arr;
}
