// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// My solution:
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  if (90 <= score && score <= 100) {
    return 'A';
  } else if (80 <= score && score < 90) {
    return 'B';
  } else if (70 <= score && score < 80) {
    return 'C';
  } else if (60 <= score && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Test cases:

//should return an A:
console.log(getGrade(95,90,93));
console.log(getGrade(100,85,96));
console.log(getGrade(92,93,94));
console.log(getGrade(100,100,100));
//should return a B:
console.log(getGrade(70,70,100));
console.log(getGrade(82,85,87));
console.log(getGrade(84,79,85));
//should return a C:
console.log(getGrade(70,70,70));
console.log(getGrade(75,70,79));
console.log(getGrade(60,82,76));
//should return a D:
console.log(getGrade(65,70,59));
console.log(getGrade(66,62,68));
console.log(getGrade(58,62,70));
//should return an F
console.log(getGrade(44,55,52));
console.log(getGrade(48,55,52));
console.log(getGrade(58,59,60));
console.log(getGrade(0,0,0));
