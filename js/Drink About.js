// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
//
// Rules:
//
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
//
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// My solution:
function peopleWithAgeDrink(old) {
  return old < 14 ? 'drink toddy' : (old < 18 ? 'drink coke' : (old < 21 ? 'drink beer' : 'drink whisky'));
};

// Test cases:
console.log(peopleWithAgeDrink(22)); //should return 'drink whisky'
console.log(peopleWithAgeDrink(21)); //should return 'drink whisky'
console.log(peopleWithAgeDrink(20)); //should return 'drink beer'
console.log(peopleWithAgeDrink(18)); //should return 'drink beer'
console.log(peopleWithAgeDrink(17)); //should return 'drink coke'
console.log(peopleWithAgeDrink(15)); //should return 'drink coke'
console.log(peopleWithAgeDrink(14)); //should return 'drink coke'
console.log(peopleWithAgeDrink(13)); //should return 'drink toddy'
console.log(peopleWithAgeDrink(0)); //should return 'drink toddy'
