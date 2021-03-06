// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// My solution:
function areYouPlayingBanjo(name) {

  if(name.toLowerCase().startsWith("r")){
  return `${name} plays banjo`
 } else {
 return `${name} does not play banjo`
 }}

 // Test cases:
console.log(areYouPlayingBanjo("Adam")); // should return "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")); // should return "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // should return "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")); // should return "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")); // should return "rolf plays banjo"
