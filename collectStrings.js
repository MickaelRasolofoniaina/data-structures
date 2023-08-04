function collectStrings(obj) {
  let array = [];
  
  for(const key of Object.keys(obj)) {
    if(typeof obj[key] === "string") {
      array.push(obj[key]);
    }
    else if(typeof obj[key] === "object") {
      array = array.concat(collectStrings(obj[key]));
    }
  }

  return array;
}


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])