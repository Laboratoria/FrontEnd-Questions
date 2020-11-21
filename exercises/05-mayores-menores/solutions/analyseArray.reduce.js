const analyseArray = arr => arr.slice(1).reduce(
  ([max, min, max2], num) => {
    if (num > max) {
      return [num, min, max];
    }
    if (num < min) {
      return [max, num, max2];
    }
    return [max, min, max2];
  },
  [arr[0], arr[0], arr[0]],
);

module.exports = analyseArray;