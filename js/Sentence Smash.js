// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// My solution:
const smash = w => w.join(' ');

// Test cases:
//Should return empty string for empty array
console.log(smash([])); // should return ""
//One word example should return the word.
console.log(smash(["hello"])); // should return "hello"
//Multiple words should be separated by spaces.
console.log(smash(["hello", "world"])); // should return "hello world"
console.log(smash(["hello", "amazing", "world"])); // should return "hello amazing world"
console.log(smash(["this", "is", "a", "really", "long", "sentence"])); // should return "this is a really long sentence"
