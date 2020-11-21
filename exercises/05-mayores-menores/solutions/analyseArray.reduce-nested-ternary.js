const analyseArray = arr => arr.slice(1).reduce(
  ([max, min, max2], num) => (
    (num > max)
      ? [num, min, max]
      : (num < min)
        ? [max, num, max2]
        : [max, min, max2]
  ),
  [arr[0], arr[0], arr[0]],
);

module.exports = analyseArray;