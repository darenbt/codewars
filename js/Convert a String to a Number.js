// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//My solution:

var stringToNumber = function(str){

  return Number(str);
}

// Refactor using parseInt:

var stringToNumber = function(str){
  return parseInt(str);
}

console.log(stringToNumber("1234"); // should return 1234
console.log(stringToNumber("605"); // should return  605
console.log(stringToNumber("1405"); // should return 1405
console.log(stringToNumber("-7"); // should return   -7
