// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse1(str) {
  return str.split('').reverse().join('');
}


function reverse2(str) {
  let newStr = '';
  for (let character = str.length; character > -1; character--) {
    newStr = newStr === 'undefined' ? '' + str[character] : newStr + str[character];
  }
  return newStr;
}

function reverse3(str) {
  let newStr = '';
  let length = str.length;
  while (length !== 0) {
    newStr = newStr === 'undefined' ? '' + str.charAt(length - 1) : newStr + str.charAt(length - 1);
    length--;
  }
  return newStr;
}

function reverse(str) {
  let reverse = '';
  for (let character of str) {
    reverse = character + reverse;
  }
  return reverse;
}

function reverse4(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
