// For every good kata idea there seem to be quite a few bad ones!
//
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My solution:
function well(x){
 return  x.filter(e => e =='good').length >2 ? 'I smell a series!' : x.filter(e => e == 'good').length>0 ? 'Publish!' : 'Fail!'
}

// Test cases:
console.log(well(['bad', 'bad', 'bad'])); //should return 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); //should return 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); //should return 'I smell a series!'
