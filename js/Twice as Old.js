// Your function takes two arguments:
//
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// My solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld-(sonYearsOld*2)>0? dadYearsOld-(sonYearsOld*2) : -(dadYearsOld-(sonYearsOld*2));
}

// Test cases:
console.log(twiceAsOld(36,7)); // should return 22
console.log(twiceAsOld(55,30)); // should return 5
console.log(twiceAsOld(42,21)); // should return 0
console.log(twiceAsOld(22,1)); // should return 20
console.log(twiceAsOld(29,0)); // should return 29
