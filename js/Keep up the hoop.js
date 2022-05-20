// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// My solution:
function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

// Test cases:
console.log(hoopCount(1)); //should return, "Keep at it until you get it"
console.log(hoopCount(2)); //should return, "Keep at it until you get it"
console.log(hoopCount(3)); //should return, "Keep at it until you get it"
console.log(hoopCount(4)); //should return, "Keep at it until you get it"
console.log(hoopCount(5)); //should return, "Keep at it until you get it"
console.log(hoopCount(7)); //should return, "Keep at it until you get it"
console.log(hoopCount(8)); //should return, "Keep at it until you get it"
console.log(hoopCount(9)); //should return, "Keep at it until you get it"
console.log(hoopCount(11)); //should return, "Great, now move on to tricks"
console.log(hoopCount(12)); //should return, "Great, now move on to tricks"
console.log(hoopCount(13)); //should return, "Great, now move on to tricks"
console.log(hoopCount(14)); //should return, "Great, now move on to tricks"
console.log(hoopCount(15)); //should return, "Great, now move on to tricks"
console.log(hoopCount(16)); //should return, "Great, now move on to tricks"
console.log(hoopCount(17)); //should return, "Great, now move on to tricks"
console.log(hoopCount(18)); //should return, "Great, now move on to tricks"
console.log(hoopCount(19)); //should return, "Great, now move on to tricks"
console.log(hoopCount(20)); //should return, "Great, now move on to tricks"
console.log(hoopCount(100)); //should return, "Great, now move on to tricks"
console.log(hoopCount(1e3)); //should return, "Great, now move on to tricks"
console.log(hoopCount(1e4)); //should return, "Great, now move on to tricks"
