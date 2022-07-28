// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//
// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

// My solution:
function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

// Test cases:
console.log(twoDecimalPlaces(4.659725356)); // should return 4.66
console.log(twoDecimalPlaces(173735326.3783732637948948)); // should return 173735326.38
console.log(twoDecimalPlaces(4.653725356)); // should return 4.65
