// In this kata you will create a function that takes in a list and returns a list with the reverse order.
//
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// My solution:
function reverseList(list) {
  return list.reverse();
}

// Test cases:
console.log(reverseList([1,2,3,4])); // should return [4,3,2,1]
console.log(reverseList([3,1,5,4])); // should return [4,5,1,3]
console.log(reverseList([3,6,9,2])); // should return [2,9,6,3]
console.log(reverseList([1])); // should return [1]
