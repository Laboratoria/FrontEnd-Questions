const analyseArray = (arr) => {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  return [
    sorted[sorted.length - 1],
    sorted[0],
    sorted[sorted.length - 2],
  ];
  // return [sorted.pop(), sorted[0], sorted.pop()];
};

module.exports = analyseArray;