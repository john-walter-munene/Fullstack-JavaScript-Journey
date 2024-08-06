// Example 1
const regex1=/a-z/ig;

//Example 2
const regex2= new RegExp(/[a-z]/, 'ig');

console.log(regex2.test('123'));
console.log(regex2.test('abcdefg'));

// Email validation with RegExp
const emailRegExp = new RegExp(/[a-c]{3}(\.com)?/,'ig');
console.log(emailRegExp.test('abc.com'));

const text = 'A quick fox';

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// Expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// Expected output: Array ["quick"]