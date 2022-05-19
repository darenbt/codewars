// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// For example:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My solution:
function between(a, b) {
  let arr = []
  for(i = a; i <= b; i ++){
  arr.push(i)
  }
  return arr
}

// Test Cases:
console.log(between(1, 4)); // should return [1, 2, 3, 4]
console.log(between(-2, 2)); // should return [-2, -1, 0, 1, 2]
