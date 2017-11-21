// Sum all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var sum = 0;
  var fibs = [1];
  for (var i = 1; i <= num;){
    fibs.push(i);
    i = fibs[fibs.length - 1] + fibs[fibs.length - 2];
  }

  for (i = 0; i < fibs.length; i++){
    if (fibs[i] % 2 === 1) {
      sum += fibs[i];
    }
  }
  return sum;
}
