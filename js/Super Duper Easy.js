// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My solution:
function problem(x){
  if(typeof x == 'number') {
  return x * 50 + 6;
  } else {
  return "Error"
  }
}

//Test Cases:
console.log(problem("hello")); //should return "Error"
console.log(problem(1)); //should return 56
console.log(problem(5)); //should return 256
console.log(problem(0)); //should return 6
console.log(problem(1.2)); //should return 66
console.log(problem(3)); //should return 156
console.log(problem("RyanIsCool")); //should return "Error"
console.log(problem(-3)); //should return -144
console.log(problem("")); //should return "Error"
console.log(problem(0.03)); //should return 7.5
