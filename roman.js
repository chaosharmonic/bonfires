// Convert a number to a Roman Numeral. (assume the number is less than 5000.)

function convertToRoman(num) {

  var numeral = "";
  var i = 1;
  // Iterate over string until it contains num number of "I"'s
  while (i <= num) {
    numeral += "I";
    i++;
  }

// Filter that string down using String.replace and a global regex (as .replace defaults to only replacing the first instance otherwise). Groups of 4-10 I's will be replaced with their correct symbols, in order from largest to smallest group. After all extraneous I's have been replaced, do the same with X's, then C's.

    numeral = numeral.replace(/I{10}/g,"X");
    numeral = numeral.replace(/I{9}/g,"IX");
    numeral = numeral.replace(/I{5}/g,"V");
    numeral = numeral.replace(/I{4}/g,"IV");

    numeral = numeral.replace(/X{10}/g,"C");
    numeral = numeral.replace(/X{9}/g,"XC");
    numeral = numeral.replace(/X{5}/g,"L");
    numeral = numeral.replace(/X{4}/g,"XL");

    numeral = numeral.replace(/C{10}/g,"M");
    numeral = numeral.replace(/C{9}/g,"CM");
    numeral = numeral.replace(/C{5}/g,"D");
    numeral = numeral.replace(/C{4}/g,"CD");

    return numeral;

}
