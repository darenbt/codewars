// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
//
// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

// My solution:
function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}

// Test cases:
console.log(apple('50')); // should return 'It\'s hotter than the sun!!'
console.log(apple(4)); // should return 'Help yourself to a honeycomb Yorkie for the glovebox.'
console.log(apple('12')); // should return 'Help yourself to a honeycomb Yorkie for the glovebox.'
console.log(apple(60)); // should return 'It\'s hotter than the sun!!'
