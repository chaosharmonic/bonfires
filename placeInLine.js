// Return the index that a number will have in an array, once its been added and the array sorted.

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a - b;});
  return arr.indexOf(num);
}
