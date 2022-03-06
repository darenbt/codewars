// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.

// My solution:
function sumMix(x){
  return x.reduce((sum, value) => sum += Number(value), 0);
}

// Test cases:
console.log(sumMix([9, 3, '7', '3'])); // should return 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // should return 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // should return 41
console.log(sumMix(['1', '5', '8', 8, 9, 9, 2, '3'])); // should return 45
console.log(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])); // should return 61
