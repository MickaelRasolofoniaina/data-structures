function capitalizeFirst(arrayOfStrings) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];

  if (arrayOfStrings.length <= 0) {
    return [];
  }

  result.push(
    arrayOfStrings[0][0].toUpperCase() + arrayOfStrings[0].substring(1)
  );

  result = result.concat(capitalizeFirst(arrayOfStrings.slice(1)));

  return result;
}

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));

  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);

  res.push(string);

  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
