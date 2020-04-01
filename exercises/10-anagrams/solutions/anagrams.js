const sortString = str => str
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');

module.exports = (a, b) => sortString(a) === sortString(b);
