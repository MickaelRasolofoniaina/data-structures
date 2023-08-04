function capitalizeWords(arrayOfWords) {
  // add whatever parameters you deem necessary - good luck!
  // add whatever parameters you deem necessary - good luck!
  let result = [];

  if (arrayOfWords.length <= 0) {
    return [];
  }

  result.push(arrayOfWords[0].toUpperCase());

  result = result.concat(capitalizeWords(arrayOfWords.slice(1)));

  return result;
}

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  
  let res = capitalizeWords(array.slice(0, -1));
  
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  
  return res;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
