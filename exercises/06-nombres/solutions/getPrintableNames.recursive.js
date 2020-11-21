const getPrintableNames = (arr) => {
  if (!arr.length) {
    return [];
  }

  const [first, last] = arr[0].split(' ');
  const initial = `${first[0].toUpperCase()}.`;
  const capitalizedLast = `${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`;

  return [`${initial} ${capitalizedLast}`].concat(getPrintableNames(arr.slice(1)));
};

module.exports = getPrintableNames;
