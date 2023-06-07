// Given two positive integers, check if they have the same frequency of digits 
// Input: 2 positive integers
// Output: boolean
// Complexity in time O(n)

// First version
function sameFrequency(number1, number2) {
  if(number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) {
    console.error("Inputs should be positive integer");
    return;
  } 

  const number1String = number1 + "";
  const number2String = number2 + "";

  if(number1String.length !== number2String.length) return false;

  const number1Freq = {};
  const number2Freq = {};

  for(const c of number1String) {
    number1Freq[c] = number1Freq[c] > -1 ? ++number1Freq[c] : 1;
  }

  for(const c of number2String) {
    number2Freq[c] = number2Freq[c] > -1 ? ++number2Freq[c] : 1;
  }

  for(const digit in number1Freq) {
    if(number1Freq[digit] !== number2Freq[digit]) return false;
  }

  return true;
}

// Second version
function sameFrequency(number1, number2) {
  if(number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) {
    console.error("Inputs should be positive integer");
    return;
  } 

  const number1String = number1 + "";
  const number2String = number2 + "";

  if(number1String.length !== number2String.length) return false;

  const number1Freq = {};

  for(const c of number1String) {
    number1Freq[c] = number1Freq[c] > -1 ? ++number1Freq[c] : 1;
  }

  for(const c of number2String) {
    if(!number1Freq[c] || number1Freq[c] === 0) return false;
    else number1Freq[c] -= 1;
  }

  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false