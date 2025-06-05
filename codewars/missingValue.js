
// PseudoCode
    // Check if n is non-numeric input
    // Check that factorial of 0 is 1 !0 = 1
    // Throw error in case of negative numbers
    // Iterate from 1 to the input n
        // Inside the loop, count the number that should be added to the sequence
    // Return the number

function misNumbers(arr) {
  // Create an array to hold the missing numbers
  let missingNumbers = [];

  // Find the minimum and maximum values in the array
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Loop through the range from min to max
  for (let i = min; i <= max; i++) {
    // If the current number is not in the array, add it to missingNumbers
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  // Return the array of missing numbers
  return missingNumbers;
}   

console.log(misNumbers([3, 0, 1, 8, 6, 10]))
console.log(misNumbers([1, 2, 4, 6, 7])); // Output: [3, 5]
console.log(misNumbers([10, 12, 14])); // Output: [11, 13]      