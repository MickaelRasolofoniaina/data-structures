// Problem: Compute the max sum of n adjacent elements
// Input: array of nunbers
// Output: max sum values

// Naive
// Complexity in time O(^2)
// Complexity in space O(1)

function maxSubArraySum(array, n) {
  if(n > array.length) return null;

  var max = -Infinity;

  for(var i = 0; i <= array.length - n; i++) { 
    var sum = 0;
    for(var j = i; j < i + n; j++) {
      sum += array[j]; 
    } 
    max = Math.max(max, sum);
  }

  return max;
}

// Complexity in time O(n)
// Complexity in space O(1)
function maxSubArraySum(array, n) {
  if(n > array.length) return null;

  var temp = 0;
  var max = 0;

  for(var i = 0; i < n; i++) {
    max += array[i];
  }

  temp = max;

  // TO-DO: Another way to refactor this loop
  for(var i = 1; i <= array.length - n; i++) {
    temp = temp - array[i - 1] + array[i + n - 1]; 
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubArraySum([4,2,1,6], 1)) // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubArraySum([], 4)) // null


