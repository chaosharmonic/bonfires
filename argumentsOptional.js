// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) and addTogether(2)(3) would both equal 5. If either argument isn't a valid number, return undefined.

function addTogether(num1) {
  // iterate over arguments to make sure that each one is a number
  for (var i = 0; i < arguments.length; i++){
    if (typeof arguments[i] !== "number"){
      return undefined;
    }
  }

// Inner function returned if only one argument exists for the outer function. Uses num1 from the outer function and adds it to the second item in the arguments object. (This isn't an array, but is indexed like one. See destroyer.js for an example of it being converted and used as an array.)
  if (arguments.length === 1){
    return function(num2){
      if (typeof num2 !== "number"){
        return undefined;
      }
      return num1 + num2;
    };
  }
  else {
    return num1 + arguments[1];
  }

}
