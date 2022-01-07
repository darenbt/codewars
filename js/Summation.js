//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

//there is a mathematic equation for this apparently: const summation = n => n * (n + 1) / 2;

console.log(summation(1) //should equal 1
console.log(summation(8) //should equal 36
