// Given an array of objects and a key, check whether that key is truthy on all objects.

function truthCheck(collection, pre) {

  for (var i in collection){
    if (!Boolean(collection[i][pre])){
      return false;
    }
  }
  return true;
}
