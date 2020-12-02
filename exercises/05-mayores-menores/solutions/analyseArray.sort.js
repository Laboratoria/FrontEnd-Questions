const analyseArray = (arr) => {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  return [
    sorted[sorted.length - 1],
    sorted[0],
    sorted[sorted.indexOf(sorted[sorted.length - 1]) - 1],
  ];
};

module.exports = analyseArray;