// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution:
const simpleMultiplication = number => (number % 2 == 0) ? number * 8 : number * 9

// Best practice:
// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

console.log(simpleMultiplication(2)); // should return 16
console.log(simpleMultiplication(1)); // should return 9
console.log(simpleMultiplication(8)); // should return 64
console.log(simpleMultiplication(4)); // should return 32
console.log(simpleMultiplication(5)); // should return 45
