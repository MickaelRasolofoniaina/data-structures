// Time: O(n)
// Space: O(n)
function areThereDuplicates(...args) {
  const counter = {};
  for(let i = 0; i < args.length; i++) {
    const el = args[i];
    counter[el] = counter[el] ? ++counter[el] : 1;
    if(counter[el] > 1) {
      return true;
    }
  }
  return false;
}

// Time: O(n log n)
// Space: O(1)

function areThereDuplicates(...args) {
  
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2) )// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true