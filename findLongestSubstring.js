// Time complexity O(n)

function findLongestSubstring(string) {
  if(string.length === 0) return 0;

  const chars = string.split('');
  let result = chars[0];
  for(let i = 1; i < chars.length; i++) {

  }
}

connsole.log(findLongestSubstring('rithmschool')) // 7
connsole.log(findLongestSubstring('thisisawesome')) // 6
connsole.log(findLongestSubstring('')) // 0
connsole.log(findLongestSubstring('thecatinthehat')) // 7
connsole.log(findLongestSubstring('bbbbbb')) // 1
connsole.log(findLongestSubstring('longestsubstring')) // 8
connsole.log(findLongestSubstring('thisishowwedoit')) // 6