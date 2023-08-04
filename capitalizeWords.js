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

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
