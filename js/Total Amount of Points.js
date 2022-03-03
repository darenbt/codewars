// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
//
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My solution:
// function points(games) {
//   let pts = 0;
//   games.forEach((x, i) => {
//     if (x.charAt(0) > x.charAt(2)){
//       pts += 3;
//     } else if (x.charAt(0) == x.charAt(2)){
//       pts += 1;
//     }
//   });
//   return pts;
// }

//My solution refactored:
const points = games => games.reduce((pts, score) => pts += score[0] > score[2] ? 3 : score[0] == score[2] ? 1 : 0, 0);


//Test Cases:

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); // should return 30
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // should return 10
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); // should return 0
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])); // should return 15
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])); // should return 12
