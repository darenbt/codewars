//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar('eloquent')  //should equal 'loquen'
console.log(removeChar('country')  //should equal 'ountr'
console.log(removeChar('person')  //should equal 'erso'
console.log(removeChar('place')  //should equal 'lac'
console.log(removeChar('ooopsss')  //should equal 'oopss'
