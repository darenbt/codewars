// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
//
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// My solution:
function stringClean(s){
  return s.replace(/[0-9]/g, '');
}

// Test cases:
console.log(stringClean("")); // should return ""
console.log(stringClean("! !")); // should return "! !"
console.log(stringClean("123456789")); // should return ""
console.log(stringClean("(E3at m2e2!!)")); // should return "(Eat me!!)"
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); // should return "Dsa cdsc csa!!! I Am cool!"
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!")); // should return "A A! AAA   JKL@!!!"
console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@")); // should return "Adgre Asad! AAA fvfdvJKL@"
console.log(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ")); // should return "Addsadds A  $$sad! AAAe fKL@ "
console.log(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ")); // should return "Addsadds A  $$sa!d! A!A!Ae$ f## "
console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?")); // should return "My \"messy\" data issues! Will they ever, ever be solved?"
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")); // should return "Why can't we buy the good software? #cheapskates"
