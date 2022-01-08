//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let arr = args.sort((a,b) => a - b);
    return arr[0];
// could also use: return Math.min(...args)
  }
}
let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78,56,232,12,8]); //Should return 8
