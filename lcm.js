// Return the least common multiple of all numbers in a range; the numbers in the range won't necessarily be in numerical order.

function smallestCommons(arr) {

  // Define variables for the upper and lower numbers in the range, as well as an additional number that will serve as a counter
  var upper = Math.max(arr[0],arr[1]);
  var lower = Math.min(arr[0],arr[1]);
  var multiple = upper;

  // If the numbers are consecutive, return their product
  if (upper === lower - 1){
    return upper * lower;
  }

    // Iterate through a while loop until you reach a number that's divisible by all numbers in the range. Increment by upper to skip unnecessary runs through the loop.
  while(true){
    // Iterate over the range between lower and upper (inclusive). Break if the counter doesn't evenly divide by any number in the range. Return the counter if the loop reaches the end.
    for (var i = lower; i <= upper; i++){
      if (multiple % i !== 0){
        break;
      }
      if (i === upper){
        return multiple;
      }
    }
    multiple += upper;
  }
