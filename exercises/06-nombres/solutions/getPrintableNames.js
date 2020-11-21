const getPrintableNames = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const [first, last] = arr[i].split(' ');
    const initial = `${first[0].toUpperCase()}.`;
    const capitalizedLast = `${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`;
    result.push(`${initial} ${capitalizedLast}`);
  }

  return result;
};

module.exports = getPrintableNames;
