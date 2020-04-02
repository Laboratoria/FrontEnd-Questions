const sanitize = arr => arr.reduce(
  (memo, char) => (
    (!/^[a-z]$/i.test(char))
      ? memo
      : [...memo, char.toLowerCase()]
  ),
  [],
);

module.exports = ([...a], [...b]) => (
  sanitize(a).sort().join('') === sanitize(b).sort().join('')
);
