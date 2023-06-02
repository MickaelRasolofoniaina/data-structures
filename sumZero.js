// Problem: get the 2 nearest numbers whose sum is equal to zero
// Input: a sorted array of integers
// Output: array of  or undefined

// Naive
// Complexity in time 0(n^2)
// function sumZero(array) {
//   for(var i = 0; i < array.length - 2; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if(array[i] + array[j] === 0) return [array[i], array[j]];
//     }
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]) );
// console.log(sumZero([1, 2, 3]));

// Optimized solution
// Complexity in time O(n)
function sumZero(array) {
  var length = array.length;
  var incrementedIndex = 0;
  var startIndex = incrementedIndex;
  var lastIndex = length - 1;
  var halfIndex = Math.floor((startIndex + lastIndex) / 2);

  while(incrementedIndex < length - 1) {
    if(array[incrementedIndex] + array[halfIndex] < 0) {
      halfIndex = Math.round((startIndex + lastIndex) / 2);
      startIndex = halfIndex;
    }
    else if(array[incrementedIndex] + array[halfIndex] > 0) {
      halfIndex = Math.floor((startIndex + lastIndex) / 2);
      lastIndex = halfIndex;
    }
    else {
      return [array[incrementedIndex], array[halfIndex]];
    }

    if(startIndex === lastIndex) {
      if(array[incrementedIndex] + array[startIndex] === 0 && incrementedIndex !== startIndex) return [array[incrementedIndex], array[startIndex]];

      incrementedIndex += 1;
      startIndex = incrementedIndex;
      lastIndex = length - 1;
      halfIndex = Math.floor((startIndex + lastIndex) / 2);
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]) );
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-10, -9, -3, -2, -1, 0, 11, 20]));