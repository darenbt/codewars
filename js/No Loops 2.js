// *** No Loops Allowed ***
//
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
//
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
//
// Looking for more, loop-restrained fun? Check out the other kata in the series:

// My solution:
let check = (a,x) => a.includes(x);

// Test cases:
console.log(check([66, 101], 66)); // should return  true
console.log(check([78, 117, 110, 99, 104, 117, 107, 115], 8)); // should return  false
console.log(check([101, 45, 75, 105, 99, 107], 107)); // should return  true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // should return  true
console.log(check(['t', 'e', 's', 't'], 'e')); // should return  true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // should return  false
console.log(check([66, ,'codewars', 11, 'alex loves pushups'], 'alex loves pushups')); // should return  true
console.log(check(['come', 'on', 110, '2500', 10, '!', 7, 15], 'Come')); // should return  false
console.log(check(['when\'s', 'the', 'next', 'Katathon?', 9, 7], 'Katathon?')); // should return  true
console.log(check([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115], 45)); // should return  false
console.log(check(['anyone', 'want', 'to', 'hire', 'me?'], 'me?')); // should return  true
