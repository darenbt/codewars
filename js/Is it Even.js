// In this Kata we are passing a number (n) into a function.
//
// Your code will determine if the number passed is even (or not).
//
// The function needs to return either a true or false.
//
// Numbers may be positive or negative, integers or floats.
//
// Floats with decimal part non equal to zero are considered UNeven for this kata.

// My solution:
function testEven(n) {
    return (n % 2) == 0;
}

// Test Cases:
console.log(testEven(0)); // should return true
console.log(testEven(0.5)); // should return false
console.log(testEven(1)); // should return false
console.log(testEven(2)); // should return true
console.log(testEven(-4)); // should return true
console.log(testEven(15)); // should return false
console.log(testEven(20)); // should return true
console.log(testEven(220)); // should return true
console.log(testEven(222222221)); // should return false
console.log(testEven(500000000000)); // should return true
