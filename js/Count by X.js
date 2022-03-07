// Create a function with two arguments that will return an array of the first (n) multiples of (x).
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array (or list in Python, Haskell or Elixir).
//
// Examples:
//
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// My solution:
function countBy(x, n) {
  let z = [];
  for (i=1; i<=n; i++) {
    z.push(i*x);
  }
  return z;
}

// Test cases:
console.log(countBy(1,10)); // should return [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)); // should return [2,4,6,8,10]
console.log(countBy(3,7)); // should return [3,6,9,12,15,18,21]
console.log(countBy(50,5)); // should return [50,100,150,200,250]
console.log(countBy(100,6)); // should return [100,200,300,400,500,600]
