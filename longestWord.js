// Return the length of a string's longest word

function findLongestWord(str) {
  var arr = str.split(" ");
  str = arr[0];
  for (i = 1; i < arr.length; i++){
    if(arr[i].length >= str.length){
      str = arr[i];
    }
  }
  return str.length;
}
