// Messi is a soccer player with goals in three leagues:
//
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
//
// Note: the input will always be valid.
//
// For example:
//
// 5, 10, 2  -->  17

// My solution:
const goals = (a,b,c) => a + b + c;

// Test cases:
console.log(goals(0,0,0)); // should return  0
console.log(goals(43, 10, 5)); // should return  58
