// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
//
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
//
// Good Luck!

// My solution:
function  calculateAge(birthYear, futureYear) {
  let age = Math.abs(birthYear - futureYear)
  if (birthYear > futureYear && age > 1) {
    return `You will be born in ${age} years.`
  } else if (birthYear > futureYear) {
    return `You will be born in ${age} year.`
  } else if (birthYear < futureYear && age > 1) {
    return `You are ${age} years old.`
  } else if (birthYear < futureYear) {
    return `You are ${age} year old.`
  } else{
    return 'You were born this very year!'
  }
}

// Test cases:
console.log(calculateAge(2012, 2016)); // should return "You are 4 years old."
console.log(calculateAge(1989, 2016)); // should return "You are 27 years old."
console.log(calculateAge(2000, 2090)); // should return "You are 90 years old."
console.log(calculateAge(2000, 1990)); // should return "You will be born in 10 years."
console.log(calculateAge(3400, 3400)); // should return "You were born this very year!")
console.log(calculateAge(900, 2900)); // should return "You are 2000 years old."
console.log(calculateAge(2010, 1990)); // should return "You will be born in 20 years."
console.log(calculateAge(2010, 1500)); // should return "You will be born in 510 years."
console.log(calculateAge(2011, 2012)); // should return "You are 1 year old."
console.log(calculateAge(2000, 1999)); // should return "You will be born in 1 year."