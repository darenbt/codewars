//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My solution:
function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a, b) => b - a)
  return `${arr[0]} ${arr[arr.length - 1]}`
}

// Best practice:
// function highAndLow(numbers){
//   let arr = numbers.split(' ');
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); //should return "42 -9"
console.log(highAndLow("1 2 3"); //should return "3 1"
