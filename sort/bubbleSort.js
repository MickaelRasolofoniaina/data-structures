function bubbleSort(array) {
  let result = [...array];
  for(let i = array.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

console.log(bubbleSort([5, 2, 6, 10, 1, 35, 0]));