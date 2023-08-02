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

console.log(isPalindrome('amanaplanacanalpanama')); // false