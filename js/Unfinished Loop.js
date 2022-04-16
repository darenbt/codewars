// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Supplied code:
// function createArray(number){
//   var newArray = [];
//
//   for(var counter = 1; counter <= number;){
//     newArray.push(counter);
//   }
//
//   return newArray;
// }
// My solution:
function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }

  return newArray;
}

// Test Cases:
console.log(createArray(1)); //should return [1]
console.log(createArray(2)); //should return [1,2]
console.log(createArray(3)); //should return [1,2,3]
console.log(createArray(4)); //should return [1,2,3,4]
console.log(createArray(5)); //should return [1,2,3,4,5]
console.log(createArray(6)); //should return [1,2,3,4,5,6]
console.log(createArray(7)); //should return [1,2,3,4,5,6,7]
console.log(createArray(8)); //should return [1,2,3,4,5,6,7,8]
console.log(createArray(9)); //should return [1,2,3,4,5,6,7,8,9]
console.log(createArray(10)); //should return [1,2,3,4,5,6,7,8,9,10]
