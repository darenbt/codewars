// Your task is to create a function that does four basic mathematical operations.
//
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//My code:

function basicOp(operation, value1, value2){
  let final
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  }
}

// Refactored using a switch statement:
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

console.log(basicOp('+', 4, 7) // should return 11
console.log(basicOp('-', 15, 18) // should return -3
console.log(basicOp('*', 5, 5) // should return 25
console.log(basicOp('/', 49, 7) // should return 7
