// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, x) => a + x, 0)
}

console.log(positiveSum([1,2,3,4,5]); //should equal 15
console.log(positiveSum([1,-2,3,4,5]); //should equal 13
console.log(positiveSum([]); //should equal 0
console.log(positiveSum([-1,-2,-3,-4,-5]); //should equal 0
console.log(positiveSum([-1,2,3,4,-5]); //should equal 9
