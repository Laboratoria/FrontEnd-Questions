const toSortedString= arr => arr
  .map(char => char.toLowerCase())
  .filter(char => /^[a-z]$/.test(char))
  .sort()
  .join('');

module.exports = ([...a], [...b]) => toSortedString(a) === toSortedString(b);
