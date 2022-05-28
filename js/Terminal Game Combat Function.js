// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// My solution:
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

// Test cases:
console.log(combat(100, 5)); // should return 95
console.log(combat(92, 8)); // should return 84
console.log(combat(20, 30)); // should return 0
console.log(combat(50, 49)); // should return 1
console.log(combat(90, 87)); // should return 3
console.log(combat(33, 33)); // should return 0
console.log(combat(100, 81)); // should return 19
console.log(combat(23, 27)); // should return 0
