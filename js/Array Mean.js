// Find Mean
// Find the mean (average) of a list of numbers in an array.
//
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
//
// For an example list of 1, 3, 5, 7
//
// 1. Add all of the numbers
//
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
//
// 16/4 = 4
// 3. The mean (or average) of this list is 4

// My solution:
var findAverage = function (nums) {
  return nums.reduce((s, i) => s + i, 0) / nums.length;
}

// Test cases:
console.log(findAverage([1])); // should return  1
console.log(findAverage([1, 3, 5, 7])); // should return  4
console.log(findAverage([-10, -5, -5, 0])); // should return  -5
console.log(findAverage([0])); // should return  0
