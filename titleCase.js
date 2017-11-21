// Title Case A Sentence

function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  str = arr.join(" ");

  return str;
}
