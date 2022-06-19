// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
//
// All inputs will be integers. Please return an integer. Round down.

// My solution:
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/( normPrice *( discount * .01)))
}

// Test cases:
console.log(dutyFree(12, 50, 1000)); // should return 166
console.log(dutyFree(17, 10, 500)); // should return 294
console.log(dutyFree(24, 35, 3000)); // should return 357
console.log(dutyFree(1400, 35, 10000)); // should return 20
console.log(dutyFree(700, 26, 7000)); // should return 38
