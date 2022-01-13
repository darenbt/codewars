// Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * .5);
}

console.log(litres(2) // should return 1
console.log(litres(1.4) // should return 0
console.log(litres(12.3) // should return 6
console.log(litres(0.82) // should return 0
console.log(litres(11.8) // should return 5
console.log(litres(1787) // should return 893
console.log(litres(0) // should return 0
