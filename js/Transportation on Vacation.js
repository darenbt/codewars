// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).

// My solution:
function rentalCarCost(d) {
  if (d >= 7){
    return d * 40 - 50;
  } else if (d > 2){
    return d * 40 - 20;
  } else return d * 40;
}

// Test cases:
//Should work for under 3 days:
console.log(rentalCarCost(1)); // should return 40
console.log(rentalCarCost(2)); // should return 80
//Should work for under 7 days:
console.log(rentalCarCost(3)); // should return 100
console.log(rentalCarCost(4)); // should return 140
console.log(rentalCarCost(5)); // should return 180
console.log(rentalCarCost(6)); // should return 220
//Should work for 7 or more days:
console.log(rentalCarCost(7)); // should return 230
console.log(rentalCarCost(8)); // should return 270
console.log(rentalCarCost(9)); // should return 310
console.log(rentalCarCost(10)); // should return 350
