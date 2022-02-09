// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

// My solution:
function find_average(array) {
  return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}

console.log(find_average([1,1,1])); // should return 1
console.log(find_average([1,2,3])); // should return 2
console.log(find_average([1,2,3,4])); // should return 2.5
