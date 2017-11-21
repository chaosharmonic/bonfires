// In a given string, convert &, <, >, " and ' to their corresponding HTML entities.

function convertHTML(str) {
  str = str.replace(/&/, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");

  return str;
}
