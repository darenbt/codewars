// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
//
// There will only be one 'longest' word.

// Supplied code:
// function findLongest(str) (
//
//   var spl = str.split(" ");
//   var longest = 0
//
//   for (var i = 0; i > spl.length; i+) (
//     if (spl(i).length > longest) {
//       longest = spl[i].length
//     )
//     }
//     return longest
// )
//My solution:
function findLongest(str) {

  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

//Test cases:
console.log(findLongest("The quick white fox jumped around the massive dog")); // should return 7
console.log(findLongest("Take me to tinseltown with you")); // should return 10
console.log(findLongest("Sausage chops")); // should return 7
console.log(findLongest("Wind your body and wiggle your belly")); // should return 6
console.log(findLongest("Lets all go on holiday")); // should return 7
