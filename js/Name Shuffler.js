// Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output)
//
// "john McClane" --> "McClane john"

// My solution:
function nameShuffler(str){
  return str.split(' ').reverse().join(" ");
}

// Test cases:
console.log(nameShuffler('john McClane')); // should return'McClane john'
console.log(nameShuffler('Mary jeggins')); // should return'jeggins Mary'
console.log(nameShuffler('tom jerry')); // should return'jerry tom'
console.log(nameShuffler('Mary Jane')); // should return'Jane Mary'
console.log(nameShuffler('John Doe')); // should return'Doe John'
console.log(nameShuffler('William O\'Brien')); // should return'O\'Brien William'
console.log(nameShuffler('George Huffingquane-McGafferty')); // should return'Huffingquane-McGafferty George'
