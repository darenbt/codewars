// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
// For example, update_light('green') should return 'yellow'.

// My solution (using switch statement):
function updateLight(current) {
  switch(current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
  };
}

// Best practice using ternary operator:
// function updateLight(current) {
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }

// Test cases:
console.log(updateLight("green")); // should return "yellow"
console.log(updateLight("yellow")); // should return "red"
console.log(updateLight("red")); // should return "green"
