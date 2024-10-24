// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, cb){
  // add whatever parameters you deem necessary - good luck!
  if(array.length <= 1) {
    return cb(array);
  }
  if(!cb(array[0])) {
    return someRecursive(array.slice(1), cb);
  }
  return true;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

console.log(someRecursive([4,6,8,3], isOdd));
