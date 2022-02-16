// Implement a function which convert the given boolean value into its string representation.
//
// Note: Only valid inputs will be given.

// My solution:
const booleanToString = b => String(b);

// Best practice using toString method:
// function booleanToString(b){
//   return b.toString();
// }

console.log(booleanToString(true)); // should return "true"
console.log(booleanToString(false)); // should return "false"
