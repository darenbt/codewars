// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// My solution:
function divisibleBy(numbers, divisor) {
  return numbers.filter(x => x % divisor == 0);
}

// Test cases:
console.log(divisibleBy([1,2,3,4,5,6], 2)); // should return [2,4,6]
console.log(divisibleBy([1,2,3,4,5,6], 3)); // should return [3,6]
console.log(divisibleBy([0,1,2,3,4,5,6], 4)); // should return [0,4]
