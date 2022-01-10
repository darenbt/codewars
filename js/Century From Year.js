// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

const century = year => Math.ceil(year/100);

console.log(century(1705) // Should Equal 18 
console.log(century(1900) // Should Equal 19
console.log(century(1601) // Should Equal 17
console.log(century(2000) // Should Equal 20
console.log(century(89) // Should Equal 1
