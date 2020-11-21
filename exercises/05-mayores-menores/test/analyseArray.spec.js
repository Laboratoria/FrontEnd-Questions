[
  'analyseArray',
  'analyseArray.reduce',
  'analyseArray.reduce-nested-ternary',
  'analyseArray.sort',
].forEach((pathToSolution) => {
  const analyseArray = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    [
      [[-17, 24, 9, 32, 100, -80, 28, 0, -10], [100, -80, 32]],
    ].forEach(([nums, expected]) => {
      it(`should return ${expected} for ${JSON.stringify(nums)}`, () => {
        expect(analyseArray(nums)).toEqual(expected);
      });
    });
  });
});
