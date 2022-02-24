// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.
//
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// My solution:
function sumArray(array) {
  if (!array) {
    return 0
  } else if (array.length < 2) {
    return 0
  } else {
    return array.sort((a, b) => a - b).slice(1, -1).reduce((a,b) => a + b,0);
  }
}

console.log(sumArray(null)); // should return 0
console.log(sumArray([ ])); // should return 0
console.log(sumArray([ 3 ])); // should return 0
console.log(sumArray([ 3, 5 ])); // should return 0
console.log(sumArray([ 6, 2, 1, 8, 10 ])); // should return 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])); // should return 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // should return -28
console.log(sumArray([ -6, 20, -1, 10, -12 ])); // should return 3
