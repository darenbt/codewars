// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// solution:
function isIsogram(str){
  str=str.toLowerCase();
  return [...str].every((x,i)=>str.indexOf(x)==i);
}

// best practice:
// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

console.log( isIsogram("Dermatoglyphics"); // should return true
console.log( isIsogram("isogram"); // should return true
console.log( isIsogram("aba"); // should return false
console.log( isIsogram("moOse"); // should return false
console.log( isIsogram("isIsogram"); // should return false
console.log( isIsogram(""); // should return true
