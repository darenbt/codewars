// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
//
// Please use the following function names:
//
// addition = add
//
// multiply = multiply
//
// division = divide (both integer and float divisions are accepted)
//
// modulus = mod
//
// exponential = exponent
//
// subtraction = subt
//
// Note: All math operations will be: a (operation) b

// My solution:
function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}

function exponent(a,b){
    return a ** b
}

function subt(a,b){
    return a - b
}

// Test cases:
console.log(add(1,2)); // should return 3
console.log(multiply(1,2)); // should return 2
console.log(divide(2,1)); // should return 2
console.log(mod(1,2)); // should return 1
console.log(exponent(1,2)); // should return 1
console.log(subt(1,2)); // should return -1
console.log(add(5,7)); // should return 12
console.log(multiply(5,2)); // should return 10
console.log(divide(40,10)); // should return 4
console.log(mod(5,10)); // should return 5
console.log(exponent(2,10)); // should return 1024
console.log(subt(5832,1832)); // should return 4000
