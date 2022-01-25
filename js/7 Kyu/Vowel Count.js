// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution:

function getCount(str) {
  var vowelsCount = 0;
  for (i = 0; i < str.length; i++)
    switch (str[i]) {
        case 'a':
          vowelsCount++;
          break;
        case 'e':
          vowelsCount++;
          break;
        case 'i':
          vowelsCount++;
          break;
        case 'o':
          vowelsCount++;
          break;
        case 'u':
          vowelsCount++;
          break;
        default:
        vowelsCount += 0;
    }
  return vowelsCount;
}

// Best practice (using RegEx):
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// Best practice (using for loop):
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
//
//   return vowelsCount;
// }

console.log(getCount("abracadabra"); //should return 5
