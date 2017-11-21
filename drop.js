// Drop elements from an array until the second argument returns true

function dropElements(arr, func) {
  var size = arr.length;
  for (var i = 0; i < size; i++) {
    if (func(arr[0]) === true){
      break;
    }
    else {
      arr.shift();
    }
  }
  return arr;
}
