// Given an unspecified number of arrays, return a single array of unique values, in the order in which they appear.

function uniteUnique(arr) {
// Create a nested array from the first argument
  var test = arguments[0];
  var arrNew = [test];

// Iterate over additional arguments; filter their arrays to items not included in the first argument, and add each iteration's results to the outer array
  for (var i = 1; i < arguments.length; i++){
    arrNew[i] = arguments[i].filter(function(index){
      return !test.includes(index);
    });
  }

// reduce the outer array to a concatenation of the inner arrays
  arrNew = arrNew.reduce(function (a, b){
    return a.concat(b);
  });

  return arrNew;
}
