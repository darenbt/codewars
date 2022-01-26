// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// My solution:

function squareDigits(num){
  return Number(num.toString().split('').map(x => Number(x)**2).join(''));
}

console.log(squareDigits(3212); //should return 9414
console.log(squareDigits(2112); //should return 4114
console.log(squareDigits(0); //should return 0
