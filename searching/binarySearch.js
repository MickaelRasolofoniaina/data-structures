function binarySearch(sortedArray, value) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while(startIndex <= endIndex) {
    if(sortedArray[startIndex] === value) {
      return startIndex;
    }
    else {
      const halfIndex = Math.floor((startIndex + endIndex) / 2);
      if(value < sortedArray[halfIndex]) {
        endIndex = halfIndex - 1;
      }
      else if(value > sortedArray[halfIndex]) {
        startIndex = halfIndex + 1;
      }
      else {
        return halfIndex;
      }
    }
  }

  return -1;
}

console.log(binarySearch([1,1,1,2,3,4,5],1)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1