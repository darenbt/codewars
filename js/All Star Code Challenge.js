// All Star Code Challenge #18
//
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
//
// The first argument can be an empty string
// The second string argument will always be of length 1

// My solution:
function strCount(str, letter){
  return str.split('').filter(x => x == letter).length;
}

// Test cases:
//should correctly return the correct count
console.log(strCount('Hello', 'o')); // should return 1
console.log(strCount('Hello', 'l')); // should return 2
console.log(strCount('abcedfghijklmnopqrstuvwxyz', 'z')); // should return 1
//should return 0 when no occurance found
console.log(strCount('ww234n', 'z')); // should return 0
//should be able to handle an empty string
console.log(strCount('', 'k')); // should return 0
