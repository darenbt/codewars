// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
//
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// Provided code:
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}

// My solution:
function capitalizeWord(word) {
  return word.replace(word[0], word[0].toUpperCase());
}

// Test cases:
console.log(capitalizeWord('word')); // should return 'Word'
console.log(capitalizeWord('i')); // should return 'I'
console.log(capitalizeWord('glasswear')); // should return 'Glasswear'
