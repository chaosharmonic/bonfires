// Check if a value is classified as a boolean primitive. (Boolean primitives are true and false only, not anything else that might evaluate to them.)

function booWho(bool) {

  return typeof bool === "boolean";
}
