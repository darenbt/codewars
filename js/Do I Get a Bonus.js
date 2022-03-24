// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
// Return the total figure the individual will receive as a string prefixed with "£"

// My solution:
function bonusTime(salary, bonus) {
  bonus == true ? salary *= 10 : salary;
  return `£${salary}`
}

// Slight refactor:
// function bonusTime(salary, bonus) {
//   return bonus ? `£${10 * salary}` : `£${salary}`;
// }
// Test cases:
console.log(bonusTime(10000, true)); // should return '£100000'
console.log(bonusTime(25000, true)); // should return '£250000'
console.log(bonusTime(10000, false)); // should return '£10000'
console.log(bonusTime(60000, false)); // should return '£60000'
console.log(bonusTime(2, true)); // should return '£20'
console.log(bonusTime(78, false)); // should return '£78'
console.log(bonusTime(67890, true)); // should return '£678900'
