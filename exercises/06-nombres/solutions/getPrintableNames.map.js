const getPrintableNames = arr => arr.map((str) => {
  const [first, last] = str.split(' ');
  const initial = `${first[0].toUpperCase()}.`;
  const capitalizedLast = `${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`;
  return `${initial} ${capitalizedLast}`;
});

module.exports = getPrintableNames;
