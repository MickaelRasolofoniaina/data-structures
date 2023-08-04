function capitalizeFirst (arrayOfStrings) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  
  if(arrayOfStrings.length <= 0) {
    return [];
  }
  
  result.push(arrayOfStrings[0][0].toUpperCase() + arrayOfStrings[0].substring(1));
  
  result = result.concat(capitalizeFirst(arrayOfStrings.slice(1)));
  
  return result;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']