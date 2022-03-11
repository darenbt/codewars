// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solution (using RegEx):
const removeExclamationMarks = s => s.replace(/!/g,"") ;

// solution using split/join method:
// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }

// Test cases:
console.log(removeExclamationMarks("Hello World!")); // should return "Hello World"
console.log(removeExclamationMarks("Hello World!!!")); // should return "Hello World"
console.log(removeExclamationMarks("Hi! Hello!")); // should return "Hi Hello"
