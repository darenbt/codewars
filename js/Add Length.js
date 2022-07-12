// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
// Example(Input --> Output)
//
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// My solution:
function addLength(str){
  return str.split(" ").map(x => `${x} ${x.length}`)
}

// Test cases:
console.log(addLength('apple ban')); // should return ["apple 5", "ban 3"]
console.log(addLength('you will win')); // should return ["you 3", "will 4", "win 3"]
console.log(addLength('you')); // should return ["you 3"]
console.log(addLength('y')); // should return ["y 1"]
console.log(addLength('x y z')); // should return ["x 1", "y 1", "z 1"]
console.log(addLength('xyz')); // should return ["xyz 3"]
console.log(addLength('xyz x y z xyz')); // should return ["xyz 3", "x 1", "y 1", "z 1", "xyz 3"]
console.log(addLength('a bc cde')); // should return ["a 1", "bc 2", "cde 3"]
console.log(addLength('a ab abc')); // should return ["a 1", "ab 2", "abc 3"]
console.log(addLength('a ab abc ab a')); // should return ["a 1", "ab 2", "abc 3", "ab 2", "a 1"]
