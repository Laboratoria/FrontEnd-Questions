const isPalindrome = (str) => {
  const midpoint = Math.floor(str.length / 2);
  for (let i = 0; i < midpoint; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;