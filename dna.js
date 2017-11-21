// Base pairs in DNA are pairs of AT and CG. Given a string containing a combination of the letters A, T, C, and G, return a two-dimensional array containing pairs of the elements given and the elements that they correspond to.

function pairElement(str) {
  var arr = [];
  for (var i in str){
    switch (str[i]){
      case "A":
        arr.push(["A","T"]);
        break;
      case "T":
        arr.push(["T","A"]);
        break;
      case "C":
        arr.push(["C","G"]);
        break;
      case "G":
        arr.push(["G","C"]);
        break;
    }
  }

  return arr;
}

pairElement("GCG");
