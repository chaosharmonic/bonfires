// Convert-a-string-to-spinal-case

function spinalCase(str) {
// insert spaces between lowercase-uppercase pairs seenInCamelCase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // convert spaces (whether from standard text or inserted by the previous line) and underscores seen_in_snake_case to dashes
  str = str.replace(/_/g, "-").replace(/ /g, "-").toLowerCase();
  return str;
}
