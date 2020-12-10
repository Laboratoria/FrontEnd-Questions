const rotateLeft = (d, arr) => arr.slice(d).concat(arr.slice(0, d));

module.exports = rotateLeft;