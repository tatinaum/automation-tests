
function missingNumber(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
} // вот тут даже проверка на пустой массив не нужна, сам обработает

console.log(missingNumber([3, 0, 1, 8, 6, 10])); // Output: [2, 4, 5, 7, 9]
console.log(missingNumber([1, 2, 4, 6, 7])); // Output: [3, 5]
console.log(missingNumber([10, 12, 14])); // Output: [11, 13]
console.log(missingNumber([])); // Output: []
console.log(missingNumber([5])); // Output: []
console.log(missingNumber([1, 3, 4, 5])); // Output: [2]
