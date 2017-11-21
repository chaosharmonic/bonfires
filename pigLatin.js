// Convert a string to Pig Latin.

function translatePigLatin(str) {

  var ending = "";
  str = str.split("");

  // remove first cluster of consonants and add them to ending string.
  for (var i in str){
   if (!"AEIOUaeiou".includes(str[0])){
     ending += str.shift();
   }
   else {
     break;
   }
  }

  // Add -ay to end; if string is empty, assign string as "way".
  if (ending === "") {
    ending = "way";
  }
  else {
    ending += "ay";
  }
  str = str.join("");
  str += ending;

  return str;
}
