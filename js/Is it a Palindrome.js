// Write a function that checks if a given string (case insensitive) is a palindrome.

// My solution:
function isPalindrome(x) {
return x.toLowerCase()===x.split('').reverse().join('').toLowerCase()
}

//Test cases:
console.log(isPalindrome("a")); // should return true
console.log(isPalindrome("aba")); // should return true
console.log(isPalindrome("Abba")); // should return true
console.log(isPalindrome("hello")); // should return false
console.log(isPalindrome("Bob")); // should return true
console.log(isPalindrome("Madam")); // should return true
console.log(isPalindrome("AbBa")); // should return true
console.log(isPalindrome("")); // should return true
