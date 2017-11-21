// Given a two-dimensional array containing only numbers, return a single array containing the largest number of each sub-array.

function largestOfFour(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].sort(function (a, b) {  return b - a;});
    arr[i] = arr[i][0];
  }

  return arr;
}
