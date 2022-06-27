// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// My solution:
function toBinary(n){
  return Number(n.toString(2))
}

// Test cases:
console.log(toBinary(1)); // should return 1
console.log(toBinary(2)); // should return 10
console.log(toBinary(3)); // should return 11
console.log(toBinary(5)); // should return 101
