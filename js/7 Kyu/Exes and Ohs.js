// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution:
function XO(str) {
  let exe = 0;
  let oh = 0;
  for (i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'x'){
        exe += 1;
      } else if (str[i].toLowerCase() === 'o'){
        oh += 1;
      }
  }
  return exe === oh;
}

// another solution using filter method:
// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

console.log(XO('xo')); //should return true
console.log(XO("xxOo")); //should return true
console.log(XO("xxxm")); //should return false
console.log(XO("Oo")); //should return false
console.log(XO("ooom")); //should return false
