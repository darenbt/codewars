// Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(n => n * 2);
}

console.log(maps([1, 2, 3]) // should return [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4]) // should return [8, 2, 2, 2, 8])
console.log(maps([2, 2, 2, 2, 2, 2]) // should return [4, 4, 4, 4, 4, 4])
