// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//
// Example:
// move(3, 6) should equal 15

// My solution:
function move (position, roll) {
  return position + (2 * roll)
}

// Test case:
console.log(move(0,4)); //should return 8
console.log(move(3, 6)); //should return 15
console.log(move(2, 5)); //should return 12
