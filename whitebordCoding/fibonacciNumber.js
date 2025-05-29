
// - **The Fibonacci.** It is a series of numbers where the next number is the sum of the previous two numbers. The first two numbers of the Fibonacci is 0 followed by 1. Write a method that will accept one int number ***n***. The method will print ***n*** number of Fibonacci numbers.
//     - Task
        
//         ### **Objective:**
        
//         Write a JavaScript function to generate the Fibonacci sequence up to a given number.
        
//         ### **Background:**
        
//         - The Fibonacci sequence is a series where each number is the sum of the two preceding ones, usually starting with 0 and 1.
//         - The sequence typically starts as 0, 1, 1, 2, 3, 5, 8, and so forth.
        
//         ### **Task:**
        
//         - Your function should take a single integer **`n`** as input.
//         - It should print the first **`n`** numbers in the Fibonacci sequence.
        
//         ### **Examples:**
        
//         1. **Input**: **`5`**
//             - Explanation: The first 5 numbers in the Fibonacci sequence are 0, 1, 1, 2, 3.
//             - **Expected Output**: **`0, 1, 1, 2, 3`**
//         2. **Input**: **`8`**
//             - Explanation: The first 8 numbers in the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13.
//             - **Expected Output**: **`0, 1, 1, 2, 3, 5, 8, 13`**

// 1. if n = 0 we return 0'
// 2. if n = 1 , we return 1,
// 3. if n = -1 , negative message,
// 4. if n = '' , typeof in Number
//PseudoCode
// Check if n is non-numeric input
// Check if n is 0 or 1
// Iterate from 2 to the input n
    // Inside the loop, count the number that should be added to the sequence
// Return the sequence

function fibonacci(n) {
  if(typeof n === "number"){
  
    if(n === 0){return 0}
    
    if(n === 1){return 1}

    let fib = [0, 1];
  
    for (let i = 2; i < n; i++) {
    
    fib[i] = fib[i - 1] + fib[i - 2];
    
   }
  return fib;
  }
  return "Input must be a number";
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(7));
console.log(fibonacci(NaN));
console.log(fibonacci(null));
fibonacci(null)
console.log(fibonacci('Hello!'))