[
  'maskify',
  'maskify.reduce',
].forEach((pathToSolution) => {
  const maskify = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    [
      ['4556364607935616', '############5616'],
      ['1', '1'],
      ['helloworld', '######orld'],
    ].forEach(([input, expected]) => {
      it(`should return ${expected} for ${JSON.stringify(input)}`, () => {
        expect(maskify(input)).toBe(expected);
      });
    });
  });
});
