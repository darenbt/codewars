//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.

function abbrevName(name){
  let initials = ''
  let arr = name.split(' ');
  initials = arr.map((item) => item[0].toUpperCase()).join('.')
  return initials
}

console.log(abbrevName("Sam Harris"); // should equal "S.H"
console.log(abbrevName("Patrick Feenan"); // should equal "P.F"
console.log(abbrevName("Evan Cole"); // should equal "E.C"
console.log(abbrevName("P Favuzzi"); // should equal "P.F"
console.log(abbrevName("David Mendieta"); // should equal "D.M"
