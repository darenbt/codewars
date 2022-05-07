// Complete function saleHotdogs. function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
//
// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.
//
// When you have finished the work, click "Run Tests" to see if your code is working properly.
//
// In the end, click "Submit" to submit your code pass this kata.

// My solution:
function saleHotdogs(n){
 return n >= 10 ? n * 90 : 5 <= n && n < 10 ? n * 95 : n * 100;
}

//Test cases:
console.log(saleHotdogs(1)); //should return 100
console.log(saleHotdogs(4)); //should return 400
console.log(saleHotdogs(5)); //should return 475
console.log(saleHotdogs(9)); //should return 855
console.log(saleHotdogs(10)); //should return 900
console.log(saleHotdogs(100)); //should return 9000
