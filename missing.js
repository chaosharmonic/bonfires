// Find and return the missing entry in a string of otherwise consecutive letters. If there are none, return undefined.

function fearNotLetter(str) {
  var letter;
  var char = str[1].charCodeAt();
  for (var i = 1; i < str.length; i++){
    if (char !== str[i].charCodeAt()){
      letter = String.fromCharCode(char);
      break;
    }
    char++;
  }
  return letter;
}
