// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// My solution:
function descendingOrder(n){
  return Number(n.toString().split('').sort((a,b) => b - a).join(''));
}

// Best practice (using parseInt):
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

console.log(descendingOrder(0); //should return 0
console.log(descendingOrder(1); //should return 1
console.log(descendingOrder(111); //should return 111
console.log(descendingOrder(15); //should return 51
console.log(descendingOrder(1021); //should return 2110
console.log(descendingOrder(123456789); //should return 987654321
