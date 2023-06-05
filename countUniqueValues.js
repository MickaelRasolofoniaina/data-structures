// Problem: count unique values
// Input: sorted array of integer numbers, negative allowed
// Output: number of count unique values 

// Complexity in time o(n)
// Complexity in space O(1)
function countUniqueValues(array) {
  if(array.length === 0) return 0;

  var startIndex = 0;
  var total = 1;
  
  while(startIndex < array.length - 1) {
    if(array[startIndex] !== array[startIndex + 1]) {
      total += 1;
    }
    startIndex += 1;
  }
  
  return total;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 3, 10])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));  // count: 11,  unique values: 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4