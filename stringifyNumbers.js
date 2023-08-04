function stringifyNumbers(obj) {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key] + "";
    } else if (typeof obj[key] === "object") {
      if(Array.isArray(obj[key])) {
        result[key] = obj[key];
      }
      else {
        result[key] = stringifyNumbers(obj[key]);
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));