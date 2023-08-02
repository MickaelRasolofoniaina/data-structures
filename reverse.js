function reverse(str){
  const chars = str.split('');
  if(chars.length <= 0) return '';
  return chars[chars.length - 1] + reverse(chars.slice(0, chars.length - 1).join(''));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));