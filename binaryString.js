// convert a binary string to corresponding numbers.

function binaryAgent(str) {
  str = str.split(" ");
  for (var i in str){
    // convert from base 10 to base 2
    var decimal = parseInt(str[i], 2);
    // convert from decimal character code to letter
    str[i] = String.fromCharCode(decimal);
  }
  str = str.join("");
  return str;
}
