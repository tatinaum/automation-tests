
// A palindrome is a word, phrase, number, or sequence of words that reads the same backward as forward.

function isPalindrome(str) {
  if (typeof str !== "string") return 'is not a string';
  if (str.length === 0) return 'empty string';
  
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome(" ")); // true
