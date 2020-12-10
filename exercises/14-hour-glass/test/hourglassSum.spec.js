[
  'hourglassSum',
].forEach((pathToSolution) => {
  const fn = require(`../solutions/${pathToSolution}`);

  describe(pathToSolution, () => {
    [
      [
        [[
          [1, 1, 1, 0, 0, 0],
          [0, 1, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0],
          [0, 0, 2, 4, 4, 0],
          [0, 0, 0, 2, 0, 0],
          [0, 0, 1, 2, 4, 0],
        ]],
        19,
      ],
      [
        [[
          [-1, -1,  0, -9, -2, -2],
          [-2, -1, -6, -8, -2, -5],
          [-1, -1, -1, -2, -3, -4],
          [-1, -9, -2, -4, -4, -5],
          [-7, -3, -3, -2, -9, -9],
          [-1, -3, -1, -2, -4, -5],
        ]],
        -6,
      ],
    ].forEach(([args, expected]) => {
      it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
        expect(fn(...args)).toEqual(expected);
      });
    });
  });
});


//
// Tests for alternative input as single array
//
// [
//   'hourglassSum',
// ].forEach((pathToSolution) => {
//   const fn = require(`../solutions/${pathToSolution}`);

//   describe(pathToSolution, () => {
//     [
//       [
//         [[
//           1, 1, 1, 0, 0, 0,
//           0, 1, 0, 0, 0, 0,
//           1, 1, 1, 0, 0, 0,
//           0, 0, 2, 4, 4, 0,
//           0, 0, 0, 2, 0, 0,
//           0, 0, 1, 2, 4, 0,
//         ]],
//         19,
//       ],
//     ].forEach(([args, expected]) => {
//       it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
//         expect(fn(...args)).toEqual(expected);
//       });
//     });
//   });
// });