// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// My solution:
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}

// Test cases:
console.log(expressionMatter(2, 1, 2)); // should return 6
console.log(expressionMatter(2, 1, 1)); // should return 4
console.log(expressionMatter(1, 1, 1)); // should return 3
console.log(expressionMatter(1, 2, 3)); // should return 9
console.log(expressionMatter(1, 3, 1)); // should return 5
console.log(expressionMatter(2, 2, 2)); // should return 8
console.log(expressionMatter(5, 1, 3)); // should return 20
console.log(expressionMatter(3, 5, 7)); // should return 105
console.log(expressionMatter(5, 6, 1)); // should return 35
console.log(expressionMatter(1, 6, 1)); // should return 8
console.log(expressionMatter(2, 6, 1)); // should return 14
console.log(expressionMatter(6, 7, 1)); // should return 48
console.log(expressionMatter(2, 10, 3)); // should return 60
console.log(expressionMatter(1, 8, 3)); // should return 27
console.log(expressionMatter(9, 7, 2)); // should return 126
console.log(expressionMatter(1, 1, 10)); // should return 20
console.log(expressionMatter(9, 1, 1)); // should return 18
console.log(expressionMatter(10, 5, 6)); // should return 300
console.log(expressionMatter(1, 10, 1)); // should return 12
