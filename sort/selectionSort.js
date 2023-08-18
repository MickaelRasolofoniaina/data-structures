const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++) {
    let minIndex = i;
    for(let j = i; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]));