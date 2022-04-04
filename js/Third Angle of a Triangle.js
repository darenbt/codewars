// You are given two interior angles (in degrees) of a triangle.
//
// Write a function to return the 3rd.
//
// Note: only positive integers will be tested.

// My solution:
function otherAngle(a, b) {
  return 180-(a+b);
}

// Test cases:
console.log(otherAngle(30, 60)); // should return 90
console.log(otherAngle(60, 60)); // should return 60
console.log(otherAngle(43, 78)); // should return 59
console.log(otherAngle(10, 20)); // should return 150
