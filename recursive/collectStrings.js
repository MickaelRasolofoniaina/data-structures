function collectStrings(obj) {
  let array = [];

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "string") {
      array.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      array = array.concat(collectStrings(obj[key]));
    }
  }

  return array;
}

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
