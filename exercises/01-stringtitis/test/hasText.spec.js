[
  'hasText',
  'hasText.recursive',
  'hasText.slice',
].forEach((pathToSolution) => {
  const hasText = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    [
      [['', ''], true],
      [['foo', ''], true],
      [['', 'foo'], false],
      [['Laboratoria', 'oratoria'], true],
      [['Equipo', 'yo'], false],
      [['OMG', 'O'], true],
      [['hola', 'no'], false],
    ].forEach(([args, expected]) => {
      it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
        expect(hasText(...args)).toBe(expected);
      });
    });
  });
});
