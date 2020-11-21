const maskify = str => Array.from(str.slice(0, -4)).reduce(
  memo => `#${memo}`,
  str.slice(-4),
);

module.exports = maskify;
