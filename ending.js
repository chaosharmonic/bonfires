// Check if a string ends with a given substring. Don't use .endsWith()

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
