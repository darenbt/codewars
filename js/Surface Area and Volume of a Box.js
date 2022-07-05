// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution:
const getSize = (w, h, d) => [2 * w * h + 2 * h * d + 2 * w * d, w * h * d]

// Test cases:
console.log(getSize(4, 2, 6)); // should return [88, 48]
console.log(getSize(1, 1, 1)); // should return [6, 1]
console.log(getSize(1, 2, 1)); // should return [10,2]
console.log(getSize(1, 2, 2)); // should return [16, 4]
console.log(getSize(10, 10, 10)); // should return [600, 1000]
