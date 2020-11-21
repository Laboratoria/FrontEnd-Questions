const hasText = (a, b) => (
  !a
    ? a === b
    : (a.slice(0, b.length) === b)
      ? true
      : hasText(a.slice(1), b)
);

module.exports = hasText;