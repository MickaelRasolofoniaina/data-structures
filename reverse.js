function reverse(str){
  const chars = str.split('');
  if(chars.length <= 0) return '';
  return chars[chars.length - 1] + reverse(chars.slice(0, chars.length - 1).join(''));
}

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));