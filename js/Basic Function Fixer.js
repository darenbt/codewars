// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
//
// Can you help me fix the function?

// Supplied code:
// function addFive(num) {
//   var total = num + 5
//   return num
// }

// My solution:
function addFive(num) {
  var total = num + 5;
  return total;
}

//Test cases:
console.log(addFive(5)); // should return 10
console.log(addFive(0)); // should return 5
console.log(addFive(-5)); // should return 0
