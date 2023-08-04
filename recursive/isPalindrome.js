// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word){
  // add whatever parameters you deem necessary - good luck!
  if(word.length <= 0) return true;

  const chars = word.split('');

  if(chars[0] === chars[chars.length - 1]) {
    return isPalindrome(chars.splice(1, chars.length - 2).join(''));
  }
  else {
    return false;
  }
}

function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

console.log(isPalindrome('amanaplanacanalpanama')); // false