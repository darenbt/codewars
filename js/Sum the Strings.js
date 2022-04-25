// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//
// If either input is an empty string, consider it as zero.
//
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// My solution:
function sumStr(a,b) {
  return String(Number(a) + Number(b));
}

// Test cases:
console.log(sumStr("4","5")); // should return "9"
console.log(sumStr("34","5")); // should return "39"
// empty string cases
console.log(sumStr("","8")); // should return "8"
console.log(sumStr("9","")); // should return "9"
console.log(sumStr("","")); // should return "0"
