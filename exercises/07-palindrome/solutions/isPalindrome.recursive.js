const isPalindrome = str => (
  (str.length < 2)
    ? true
    : (str[0] !== str[str.length - 1])
      ? false
      : isPalindrome(str.slice(1, -1))
);

module.exports = isPalindrome;


// const isPalindromeRecursive = (str) => {
//   if (str.length < 2) {
//     return true;
//   }
//
//   if (str[0] !== str[str.length - 1]) {
//     return false;
//   }
//
//   return isPalindromeRecursive(str.slice(1, -1));
// };