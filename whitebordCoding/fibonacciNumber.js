
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


function fibonacci(n) {
  
  let fib = [0, 1];
  
  for (let i = 2; i < n; i++) {
    
  fib[i] = fib[i - 1] + fib[i - 2];
    
    // Index 2  = [0, 1, 1]
    
    // Index 3  = [0, 1, 1, 2]
    
    // Index 4  = [0, 1, 1, 2, 3]
    
    // Index 5 = [0, 1, 1, 2, 3, 5]
    
    // Index 6 = [0, 1, 1, 2, 3, 5, 8]
    
    // Index 7 = [0, 1, 1, 2, 3, 5, 8, 13]
    
  }
  return fib;
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(7));