// Time complexity O(n)
// Space complexity O(1)

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if(str1.length > str2.length) return false;

  let leftIndex = 0;
  let rightIndex = 0;

  while(rightIndex < str2.length) {
    if(str1[leftIndex] === str2[rightIndex]) {
      leftIndex++;
    }
   
    if(leftIndex === str1.length) return true;
    
    rightIndex++;
  }
  
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)