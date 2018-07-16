// Repeat a string a specified number of times. (Return an empty string if that number is less than or equal to zero.)
// Write an algorithm to repeat the string, instead of using ES6 repeat() method.

function repeatStringNumTimes(str, num) {
  var result = "";
  if (num <= 0){
    return result;
  }
  for (var i = 0; i < num; i ++){
    result += str;
  }
  return result;
}
