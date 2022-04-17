// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
// If you can, try writing it in one line of code.

// My solution:
const findDifference = (a, b) => Math.abs(a.reduce((a, x) => a *= x, 1) - b.reduce((a, x) => a *= x, 1));

// Test cases:
console.log(funcToBeTested([3, 2, 5], [1, 4, 4])); // should return 14
console.log(funcToBeTested([9, 7, 2], [5, 2, 2])); // should return 106
console.log(funcToBeTested([11, 2, 5], [1, 10, 8])); // should return 30
console.log(funcToBeTested([4, 4, 7], [3, 9, 3])); // should return 31
console.log(funcToBeTested([15, 20, 25], [10, 30, 25])); // should return 0
