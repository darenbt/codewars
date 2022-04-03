// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// My solution:
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// Test cases:
console.log("hello world".toAlternatingCase()); // should return "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // should return "hello world"
console.log("hello WORLD".toAlternatingCase()); // should return "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // should return "hEllO wOrld"
console.log("12345".toAlternatingCase()); // should return "12345"
console.log("1a2b3c4d5e".toAlternatingCase()); // should return "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // should return "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
console.log("Hello World".toAlternatingCase().toAlternatingCase()); // should return "Hello World"
