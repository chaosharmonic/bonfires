// Given an array and a truth test, find the first element in the array that passes the truth test

function findElement(arr, func) {
  var num = 0;
  var arrNew = arr.filter(func);
  num = arrNew[0];
  return num;
}
