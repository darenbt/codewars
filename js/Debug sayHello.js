// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
//
// Example output:
//
// Hello, Mr. Spock

// Supplied code:
// function sayHello(name) {
//   return 'Hello'
// }

// My solution:
function sayHello(name) {
  return `Hello, ${name}`;
}

//Test cases:
console.log(sayHello('Mr. Spock')); //should return 'Hello, Mr. Spock
console.log(sayHello('Captain Kirk')); //should return 'Hello, Captain Kirk
console.log(sayHello('Liutenant Uhura')); //should return 'Hello, Liutenant Uhura
console.log(sayHello('Dr. McCoy')); //should return 'Hello, Dr. McCoy
