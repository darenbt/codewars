// Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

// My solution:
function distinct(a) {
  let arr = [];
  a.forEach(x => {
    if (arr.indexOf(x) < 0){
      arr.push(x)
    }})
  return arr
}

// Test cases:
console.log(distinct([1])); // should return  [1]
console.log(distinct([1,2])); // should return  [1,2]
console.log(distinct([1,1,2])); // should return  [1,2]
console.log(distinct([1,1,1,2,3,4,5])); // should return  [1,2,3,4,5]
console.log(distinct([1,2,2,3,3,4,4,5,6,7,7,7])); // should return  [1,2,3,4,5,6,7]
