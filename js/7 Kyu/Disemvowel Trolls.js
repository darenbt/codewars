// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// My solution:

function disemvowel(str) {
  return str.split('').filter(x => x.toLowerCase() !== 'a' && x.toLowerCase() !== 'e' && x.toLowerCase() !== 'i' && x.toLowerCase() !== 'o' && x.toLowerCase() !== 'u').join('');
}

// Best practice (using RegEx):
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// Best practice (creating variable array with vowels and using indexOf method):
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

console.log(disemvowel("This website is for losers LOL!"); // should return "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"); // should return "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?"); // should return "Wht r y,  cmmnst?"
