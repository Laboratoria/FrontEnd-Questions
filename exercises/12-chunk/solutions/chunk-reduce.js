module.exports = (arr, limit) => arr.reduce(
  (memo, item) => (
    (memo.length && memo[memo.length - 1].length < limit)
      ? memo[memo.length - 1].push(item) && memo
      : [...memo, [item]]
  ),
  [],
);
