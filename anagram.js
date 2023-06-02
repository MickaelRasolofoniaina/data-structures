// Input: 2 strings (assuming they are word each, letters only and lowercase)
// Output: boolean

const getLetterCount = (str) => {
  const result = {};

  for(let char of str) {
    if(result[char] > -1) result[char]++;
    else result[char] = 1;
  }

  return result;
}

const isValidAnagram = (word1, word2) => {
  if(word1.length !== word2.length) return false;

  const word1LetterCount = getLetterCount(word1); // Complexity in time and space O(n)
  const word2LetterCount = getLetterCount(word2); // Complexity in time and space O(n)

  for(const letter in word1LetterCount) {
    if(word1LetterCount[letter] !== word2LetterCount[letter]) return false;
  }

  return true;
}
