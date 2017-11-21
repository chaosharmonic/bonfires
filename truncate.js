// Truncate a string to a given length with "..." as the new string's ending. "..." counts against the new specified length, unless that length is less than or equal to three.

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    str = str.slice(0,num-3) + "...";
  }
  else if (str.length > num && num <= 3) {
    str = str.slice(0,num) + "...";
  }
  return str;
}
