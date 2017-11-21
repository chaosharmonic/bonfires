// Check for palindromes, ignoring non-alphanumeric characters

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for (var x = 0, y = str.length - 1; x <= str.length / 2; x++){
    if (str[x] !== str[y - x]) {
      return false;
    }
  }

  return true;
}
