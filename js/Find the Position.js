// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"

// My solution:
function position(letter){
 let a = 'abcdefghijklmnopqrstuvwxyz'

 return `Position of alphabet: ${a.indexOf(letter) +1}`
}

// Test cases:
console.log(position("a")); // should return "Position of alphabet: 1"
console.log(position("z")); // should return "Position of alphabet: 26"
console.log(position("e")); // should return "Position of alphabet: 5"
