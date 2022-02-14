// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

// My solution:
function fakeBin(x){
return x.split('').map(n => n < 5 ? n = 0 : n = 1).join('');
}

console.log(fakeBin('45385593107843568')); // should return '01011110001100111'
console.log(fakeBin('509321967506747')); // should return '101000111101101')
console.log(fakeBin('366058562030849490134388085')); // should return '011011110000101010000011011'
