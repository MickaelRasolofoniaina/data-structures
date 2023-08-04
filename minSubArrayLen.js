function minSubArrayLen (array, target) {
  let result = 0;
  let nextResult = 0;
  let total = 0;
  
  // Calculate first result;
  // Complexity O(n)
  for(let i = 0; i < array.length; i++) {
    total = total + array[i];
  }

  if(total < target) {
    return 0;
  }
    
  let i = 0;
  
  result = array.length;
  nextResult = result - 1;
  
  while(i + nextResult < array.length) {
    if(total >= target) {
      total = total - array[i + nextResult];
      result = nextResult;
      nextResult = result - 1;
    }
    else {
      total = total - array[i] + array[i + nextResult];
      i = i + 1;
    }
  }

  return result;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0