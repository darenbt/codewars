// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let reply = ''
  for (i = 1; i <= num; i++) {
    reply += `${i} sheep...`
  }
  return reply
}

console.log(countSheep(0); // should return ""
console.log(countSheep(1); // should return "1 sheep..."
console.log(countSheep(2); // should return "1 sheep...2 sheep..."
console.log(countSheep(3); // should return "1 sheep...2 sheep...3 sheep..."
