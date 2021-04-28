const rotateLeft = (d, arr) => (
  !d
    ? arr
    : rotateLeft(d - 1, arr.slice(1).concat(arr[0]))
);

module.exports = rotateLeft;