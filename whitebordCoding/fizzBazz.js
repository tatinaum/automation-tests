
// - **FizzBuzz.** Print numbers from 1 to 100. If a number is divisible by 3 print ***Fizz.*** If a number is divisible by 5 print ***Buzz.*** If a number is divisible by both 3 and 5 print ***FizzBuzz.***

    
//     ### **Objective:**
    
//     Write a JavaScript function for the FizzBuzz problem.
    
//     ### **Background:**
    
//     - The FizzBuzz problem is a classic test used in coding interviews.
//     - The task is to print numbers from 1 to 100.
//     - For numbers divisible by 3, print "Fizz" instead of the number.
//     - For numbers divisible by 5, print "Buzz".
//     - For numbers divisible by both 3 and 5, print "FizzBuzz".
    
//     ### **Task:**
    
//     - Your function should print the numbers from 1 to 100.
//     - Replace numbers divisible by 3 with "Fizz".
//     - Replace numbers divisible by 5 with "Buzz".
//     - Replace numbers divisible by both 3 and 5 with "FizzBuzz".
    
//     ### **Examples:**
    
//     - **Input**: No input required.
//     - **Expected Output**:
//         - 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, ..., 98, "Fizz", "Buzz"

//      Given an integer n, return a string array answer (1-indexed) where:
// --------------------------------------------------------------------------------------------------------
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
//answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function fizzBuzz(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }

    return answer;
}
console.log(fizzBuzz(3));   // ["1", "2", "Fizz"]
console.log(fizzBuzz(5));   // ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(15));  // ["1", ..., "FizzBuzz"]