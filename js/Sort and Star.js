// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.

// My solution:
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

//Test cases:
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); // should return 'a***r***e'
console.log(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"])); // should return 'a***b***o***u***t'
console.log(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"])); // should return 'c***o***d***e'
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"])); // should return 'L***e***t***s'
