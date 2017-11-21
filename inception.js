// Flatten a nested array

function steamrollArray(arr) {
  var arrNew = [];
  var deeper = function(index){
    if (!Array.isArray(index)){
      arrNew.push(index);
    }
    else {
      for (var a in index){
        deeper(index[a]);
      }
    }
  };
  arr.forEach(deeper);
  return arrNew;
}
