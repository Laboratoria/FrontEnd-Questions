module.exports = (n) => {
  const recurse = curr => (
    (curr <= n) && (
      console.log(
        (curr % 3 === 0 && curr % 5 === 0)
          ? 'fizzbuzz'
          : (curr % 3 === 0)
            ? 'fizz'
            : (curr % 5 === 0)
              ? 'buzz'
              : curr
      )
      || recurse(curr + 1)
    )
  );

  recurse(1);
};
