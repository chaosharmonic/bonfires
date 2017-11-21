// Replace a word in a string with another word in a string, making sure that the new word matches the case of the original.

function myReplace(str, before, after) {
  after = after.split("");
  if (before[0] === before[0].toLowerCase()){
    after[0] = after[0].toLowerCase();
  }
  else {
    after[0] = after[0].toUpperCase();
  }
  after = after.join("");
  str = str.replace(before, after);
  return str;
}
