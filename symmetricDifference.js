// Given two arrays, return an array containing their symmetric difference (every element that appears in one of the two arrays, but not both).

function diffArray(arr1, arr2) {
  var newArr = [];
// concatenate the two arrays
  newArr = newArr.concat(arr1, arr2).filter(function(index){
    // filter down to elements that aren't included in both
    return !(arr1.includes(index) && arr2.includes(index));
  });
  return newArr;
}
