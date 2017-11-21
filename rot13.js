// Caesar cipher. Given a string, shift each letter 13 places. Ignore other characters.

function rot13(str) {
  str = str.toUpperCase();
  str = str.split("");
  var code = 0;
  for (var i = 0; i < str.length; i++){
    code = String.charCodeAt(str[i]);
    if (code >= 65 && code <= 77) {
      code += 13;
      }
    else if (code >= 78 && code <= 90){
      code -= 13;
    }
    str[i] = String.fromCharCode(code);
  }
  str = str.join("");
  return str;
}
