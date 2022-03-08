// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
//
// A few cases:
//
//
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
//
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
//
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

// My solution:
function isDivideBy(number, a, b) {
  return number%a==0 && number%b==0
}

// Test Cases:
console.log(isDivideBy(8, 2, 4)); // should return true
console.log(isDivideBy(12, -3, 4)); // should return true
console.log(isDivideBy(8, 3, 4)); // should return false
console.log(isDivideBy(5, 2, -2)); // should return false
console.log(isDivideBy(-100, -25, 10)); // should return true
console.log(isDivideBy(10000, 5, -3)); // should return false
console.log(isDivideBy(4, 4, 2)); // should return true
console.log(isDivideBy(5, 2, 3)); // should return false
console.log(isDivideBy(-96, 25, 17)); // should return false
console.log(isDivideBy(33, 1, 33)); // should return true
