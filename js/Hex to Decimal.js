// Complete the function which converts hex number (given as a string) to a decimal number.

// My solution:
function hexToDec(hexString){
 return  parseInt(hexString, 16);
}

// Test cases:
console.log(hexToDec("1")); // should return 1
console.log(hexToDec("a")); // should return 10
console.log(hexToDec("10")); // should return 16
console.log(hexToDec("FF")); // should return 255
console.log(hexToDec("-C")); // should return -12
