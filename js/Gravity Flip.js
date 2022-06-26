// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
//
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// My solution:
const flip=(d, a)=>{

  return (d=='R') ? a.sort((a,b) => a-b):a.sort((a,b) => b-a);
}

// Test cases:
console.log(flip('R', [4, 5, 6, 7, 1])); // should return [1, 4, 5, 6, 7]
console.log(flip('L', [3, 0, 9, 8, 1, 2])); // should return [9, 8, 3, 2, 1, 0]
console.log(flip('L', [0, 0, 12, 0, 1])); // should return [12, 1, 0, 0, 0]
console.log(flip('R', [13, 2, 4, 7, 93])); // should return [2, 4, 7, 13, 93]
console.log(flip('R', [5, 4, 3, 2, 1])); // should return [1, 2, 3, 4, 5]
