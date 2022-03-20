// Complete the solution so that it reverses all of the words within the string passed in.
//
// Example:
//
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// My solution:
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// Test cases:
console.log(reverseWords("hello world!"                 )); // should return "world! hello"
console.log(reverseWords("yoda doesn't speak like this" )); // should return "this like speak doesn't yoda"
console.log(reverseWords("foobar"                       )); // should return "foobar"
console.log(reverseWords("kata editor"                  )); // should return "editor kata"
console.log(reverseWords("row row row your boat"        )); // should return "boat your row row row"
