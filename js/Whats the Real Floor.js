// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//
// Write a function that given a floor in the american system returns the floor in the european system.
//
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//
// Basements (negatives) stay the same as the universal level.
//
// More information here
//
// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// My solution:
function getRealFloor(n) {
  if(n>13){return n-2} else if(n>0){return n-1} else {return n};
}

// Test cases:
//should return a correct value for floors lower than 13
console.log(getRealFloor(1)); // should return 0
console.log(getRealFloor(0)); // should return 0
console.log(getRealFloor(5)); // should return 4
console.log(getRealFloor(10)); // should return 9
console.log(getRealFloor(12)); // should return 11
//should return a correct value for floors greater than 13
console.log(getRealFloor(14)); // should return 12
console.log(getRealFloor(15)); // should return 13
console.log(getRealFloor(37)); // should return 35
console.log(getRealFloor(200)); // should return 198
should return a correct value for basement floors
console.log(getRealFloor(-2)); // should return -2
console.log(getRealFloor(-5)); // should return -5
