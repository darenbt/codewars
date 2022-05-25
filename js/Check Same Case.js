// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
//
// FUNDAMENTALS

// My solution:
function sameCase(a, b){
  if(!a.match(/[a-z]/i) || !b.match(/[a-z]/i)){
    return -1
  } else if((a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() === a && b.toLowerCase() === b)){
    return 1
  } else {
    return 0
  }
}

// Test cases:

// Same Case returns 1
console.log(sameCase('C', 'B')); // should return 1
console.log(sameCase('Z', 'D')); // should return 1
console.log(sameCase('A', 'G')); // should return 1
console.log(sameCase('M', 'M')); // should return 1
console.log(sameCase('I', 'Q')); // should return 1
console.log(sameCase('P', 'G')); // should return 1
console.log(sameCase('T', 'S')); // should return 1
console.log(sameCase('F', 'P')); // should return 1
console.log(sameCase('C', 'V')); // should return 1
console.log(sameCase('M', 'T')); // should return 1
console.log(sameCase('E', 'Z')); // should return 1
console.log(sameCase('N', 'Y')); // should return 1
console.log(sameCase('S', 'H')); // should return 1
console.log(sameCase('V', 'W')); // should return 1
console.log(sameCase('s', 'o')); // should return 1
console.log(sameCase('l', 'n')); // should return 1
console.log(sameCase('a', 'v')); // should return 1
console.log(sameCase('u', 'k')); // should return 1
console.log(sameCase('c', 'r')); // should return 1
console.log(sameCase('p', 's')); // should return 1
console.log(sameCase('g', 'a')); // should return 1
console.log(sameCase('b', 'm')); // should return 1
console.log(sameCase('m', 'u')); // should return 1
console.log(sameCase('i', 'y')); // should return 1
console.log(sameCase('b', 's')); // should return 1
console.log(sameCase('c', 'z')); // should return 1
console.log(sameCase('b', 'a')); // should return 1
console.log(sameCase('d', 'd')); // should return 1
// Different Cases return 0
console.log(sameCase('A', 's')); // should return 0
console.log(sameCase('c', 'B')); // should return 0
console.log(sameCase('b', 'Z')); // should return 0
console.log(sameCase('H', 'd')); // should return 0
console.log(sameCase('d', 'N')); // should return 0
console.log(sameCase('D', 'u')); // should return 0
console.log(sameCase('y', 'L')); // should return 0
console.log(sameCase('U', 'b')); // should return 0
console.log(sameCase('Z', 'q')); // should return 0
console.log(sameCase('O', 'g')); // should return 0
console.log(sameCase('g', 'B')); // should return 0
console.log(sameCase('R', 'z')); // should return 0
console.log(sameCase('I', 'o')); // should return 0
console.log(sameCase('I', 'e')); // should return 0
// Non-letters return -1
console.log(sameCase('A', '?')); // should return -1
console.log(sameCase('\0', 'B')); // should return -1
console.log(sameCase('\t', 'Z')); // should return -1
console.log(sameCase('H', ':')); // should return -1
console.log(sameCase('!', '@')); // should return -1
console.log(sameCase('@', 'H')); // should return -1
console.log(sameCase('#', '4')); // should return -1
console.log(sameCase('$', '-')); // should return -1
console.log(sameCase('%', '0')); // should return -1
console.log(sameCase('^', 'B')); // should return -1
console.log(sameCase('&', '&')); // should return -1
console.log(sameCase('*', '*')); // should return -1
console.log(sameCase('(', '7')); // should return -1
console.log(sameCase(')', '6')); // should return -1
console.log(sameCase('_', '8')); // should return -1
console.log(sameCase('{', '9')); // should return -1
console.log(sameCase('+', '8')); // should return -1
console.log(sameCase('}', '(')); // should return -1
console.log(sameCase(':', ')')); // should return -1
console.log(sameCase('1', '_')); // should return -1
console.log(sameCase('2', '{')); // should return -1
console.log(sameCase('3', '+')); // should return -1
console.log(sameCase('4', '}')); // should return -1
console.log(sameCase('5', 'A')); // should return -1
console.log(sameCase('7', 's')); // should return -1
console.log(sameCase('6', ':')); // should return -1
console.log(sameCase('8', '1')); // should return -1
console.log(sameCase('9', '#')); // should return -1
console.log(sameCase('8', '$')); // should return -1
console.log(sameCase('9', '!')); // should return -1
console.log(sameCase('-', 'G')); // should return -1
console.log(sameCase('0', '2')); // should return -1
