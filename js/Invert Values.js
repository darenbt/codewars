// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = array => array.map(x => -x);

console.log(invert([1,2,3,4,5]) // should return [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5]) // should return [-1,2,-3,4,-5]
console.log(invert([]) // should return []
console.log(invert([0]) // should return [-0]
