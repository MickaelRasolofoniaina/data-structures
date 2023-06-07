function averagePair(array, target){
  // add whatever parameters you deem necessary - good luck!
  if(array.length === 0) return false;
  
  const max = target * 2;
  
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex !== endIndex) {
   const start = array[startIndex];
   const end = array[endIndex];
   if(start + end < max) {
    startIndex++;
   }
   else if(start + end > max) {
    endIndex--;
   }
   else {
    return true;
   }
  }

  return false;
}


console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false