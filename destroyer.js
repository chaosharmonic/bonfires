// Given an array and one or more additional arguments, remove all elements from the array that are equal to those arguments.

function destroyer(arr) {
// build an array out of the function's arguments (excluding the array)
  var args = Array.from(arguments).slice(1);
// iterate over the arguments array and apply a filter for each element to the original array
  for (var i = 0; i < args.length; i++){
    arr = arr.filter(function(index){
      return !args.includes(index);
    });
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
