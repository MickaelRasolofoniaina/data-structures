function flatten(array) {
  // add whatever parameters you deem necessary - good luck!
  const result = [];

  function helper(array) {
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        result.push(array[i]);
      } else {
        helper(array[i]);
      }
    }
  }

  helper(array);

  return result;
}

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
