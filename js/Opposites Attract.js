// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// My solution:
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

console.log(lovefunc(1,4)); // should return true
console.log(lovefunc(2,2)); // should return false
console.log(lovefunc(0,1)); // should return true
console.log(lovefunc(0,0)); // should return false
