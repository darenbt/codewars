// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// My solution:
function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  }
  while (n % 10 === 0) {
    n /= 10;
  }
  return n;
}

// Test cases:
console.log(noBoringZeros(1450)); // should return 145
console.log(noBoringZeros(960000)); // should return 96
console.log(noBoringZeros(1050)); // should return 105
console.log(noBoringZeros(-1050)); // should return -105
console.log(noBoringZeros(-105)); // should return -105
console.log(noBoringZeros(0)); // should return 0
