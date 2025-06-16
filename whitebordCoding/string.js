//check type return"string message"
//1 step create variable
//loop for
//summarize this elements
//return this variable


function reverseStr(str){
 if(typeof str !== "string") return 'is not a string';
if(str.length === 0) return 'empty string'; 
let rev = "";
for(let i = str.length - 1; i >= 0; i--){
rev += str[i];
} return rev;
}

console.log(reverseStr("Hello, World!"));
console.log(reverseStr(""));
console.log(reverseStr(1));
console.log(reverseStr("g"));


function reverseWord(word) {
  return word.split('').reverse().join('');
}

// Example usage:
const reversed = reverseWord("offer");
console.log(reversed); // Output: "reffo"

// Explanation:
// .split('') converts the string into an array of characters.

// .reverse() reverses the array.

// .join('') joins the array back into a string.