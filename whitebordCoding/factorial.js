
//  factorial of number 5 = 1*2*3*4*5 = 120
// /PseudoCode
    // Check if n is non-numeric input
    // Check that factorial of 0 is 1 !0 = 1
    // Throw error in case of negative numbers
    // Iterate from 1 to the input n
        // Inside the loop, count the number that should be added to the sequence
    // Return the number

function factorial(n) {
    if (typeof n !== "number") {
        return "Input must be a number";
    }
    
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-5));
console.log(factorial("Hello!"));
console.log(factorial(5));

function factorial2 (n){
if(n === 0 || n === 1) return 1
return n * factorial2(n - 1)

}

console.log(factorial2(6))