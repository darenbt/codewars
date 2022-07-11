// Remove all exclamation marks from the end of sentence.
//
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// My solution:
function remove (string) {
  for(i = string.length - 1; string.charAt(i) == '!'; i--) {
    string = string.slice(0, string.length - 1)
  }
  return string
}
