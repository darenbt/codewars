// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  return numbers.reduce((a, x) => a + x ** 2, 0)
}

console.log(squareSum([1,2]); // should equal 5
console.log(squareSum([0, 3, 4, 5]); // should equal 50
console.log(squareSum([]); // should equal 0
