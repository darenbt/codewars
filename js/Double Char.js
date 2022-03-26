// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My solution:
function doubleChar(str) {
  return str.split('').map(x => x + x).join('');
}

// Test cases:
console.log(doubleChar("abcd")); // should return "aabbccdd"
console.log(doubleChar("Adidas")); // should return "AAddiiddaass"
console.log(doubleChar("1337")); // should return "11333377"
console.log(doubleChar("illuminati")); // should return "iilllluummiinnaattii"
console.log(doubleChar("123456")); // should return "112233445566"
console.log(doubleChar("%^&*(")); // should return "%%^^&&**(("
