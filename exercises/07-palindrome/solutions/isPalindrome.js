//
// Idiomatic JavaScript
//
const isPalindrome = str => str === [...str].reverse().join('');

module.exports = isPalindrome;