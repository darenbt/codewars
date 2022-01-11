//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = n.toString().split('')
  return arr.map(Number).reverse();
}

console.log(digitize(35231); // should equal [1,3,2,5,3]
console.log(digitize(0); // should equal [0]
