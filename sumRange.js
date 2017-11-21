// Sum all numbers in a range

function sumAll(arr) {
  var num = 0;
  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++){
    num += i;
  }
  return num;
}
