[
  'rotateLeft',
  'rotateLeft.slice',
  'rotateLeft.recursive',
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

    //
    // Extra tests to check against massive inputs (make recursive
    // implementations blow up and show performance differences)
    //
    // const sizes = Array(6).fill().map((_, idx) => Math.pow(10, idx));
    // sizes.forEach((size) => {
    //   it(`performance... ${size}`, () => {
    //     const arr = Array(size).fill().map((_, idx) => idx);
    //     const start = Date.now();
    //     const rotated = fn(size, arr);
    //     console.log(pathToSolution, size, Date.now() - start);
    //   });
    // });
  });
});
