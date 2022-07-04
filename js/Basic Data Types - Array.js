// Task
// I've written five functions, each function receives a parameter: arr(an array), you should code something with arr.
//
//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

// My solution:
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

// Test cases:
console.log(getLength([1,2,3])); // should return 3
console.log(getFirst([1,2,3])); // should return 1
console.log(getLast([1,2,3])); // should return 3
console.log(pushElement([1,2,3]).length); // should return 4
console.log(popElement([1,2,3]).length); // should return 2
