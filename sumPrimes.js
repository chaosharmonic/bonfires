// Sum all primes up to and including the given number.

function sumPrimes(num) {
  var total = 2;
  for (var i = 3; i <= num; i += 2){
    var j = true;
    for (var k = 2; k < i; k++)
      {
        if (i % k === 0){
          j = false;
          break;
        }
      }
    if (j === true) {
      total += i;
    }
  }
  return total;
}
