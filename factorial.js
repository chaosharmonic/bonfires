// Write a function to calculate the factorial of a given number.

function factorialize(num) {
  if (num == 0){
    return 1;
  }
  for (i = num - 1; i > 0; i--){
    num *= i;
    }
  return num;
}
