// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My solution:
const grow = x => x.reduce((n, i) => n * i, 1);

console.log(grow([1, 2, 3])); // should return 6
console.log(grow([4, 1, 1, 1, 4])); // should return 16
console.log(grow([2, 2, 2, 2, 2, 2])); // should return 64
