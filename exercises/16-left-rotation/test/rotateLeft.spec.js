[
  'rotateLeft',
  'rotateLeft.slice',
].forEach((pathToSolution) => {
  const fn = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    [
      [
        [4, [1, 2, 3, 4, 5]],
        [5, 1, 2, 3, 4],
      ],
      [
        [3, [1, 2, 3, 4, 5]],
        [4, 5, 1, 2, 3],
      ],
    ].forEach(([args, expected]) => {
      it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
        expect(fn(...args)).toEqual(expected);
      });
    });
  });
});
