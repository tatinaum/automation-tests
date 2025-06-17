
// A palindrome is a word, phrase, number, or sequence of words that reads the same backward as forward.
//PseudoCode
//check type return"string message"
//1 step create variable
//summarize this elements
//return this variable


function isPalindrome(str) {
  if (typeof str !== "string") return 'is not a string';
  if (str.length === 0) return 'empty string';
  //let str2 = str.toLowerCase().replace(/[^a-z0-9]/g, ``)
  
  //return str2 ===  str2.split('').reverse().join('')
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome(" ")); // true
