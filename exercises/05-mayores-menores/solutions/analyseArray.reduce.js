const analyseArray = arr => arr.slice(1).reduce(
  ([max, min, max2], num) => (
    num > max
      ? [num, min, max]
      : [
        max,
        num < min ? num : min,
        num < max && num > (max2 === undefined ? -Infinity : max2)
          ? num
          : max2,
      ]
  ),
  [arr[0], arr[0], undefined],
);

module.exports = analyseArray;