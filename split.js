// Split a one-dimensional array into a two-dimensional array. Each sub-array should be the size specified in the second arguemnt (presuming the array divides evenly).


function chunkArrayInGroups(arr, size) {
  var arrNew = [];
  var child = [];
  for (var i = 0; i < arr.length; i += size){
    child = arr.slice(i, i+size);
    arrNew.push(child);
  }
  return arrNew;
}
