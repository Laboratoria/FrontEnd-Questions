const hourglassSum = (arr) => {
  let result = -Infinity;

  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const sum = (
        arr[row][col]     + arr[row][col + 1]     + arr[row][col + 2] +
                            arr[row + 1][col + 1] +
        arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]
      );
      if (sum > result) {
        result = sum;
      }
    }
  }

  return result;
};

//
// Solution for input as single array
//
// const hourglassSum = (arr) => {
//   let result = 0;
//
//   for (let i = 0; i < 16; i += 1) {
//     const row = Math.floor(i / 4);
//     const idx = i + (row * 2);
//     const sum = (
//       arr[idx]      + arr[idx + 1]  + arr[idx + 2] +
//                       arr[idx + 7]  +
//       arr[idx + 12] + arr[idx + 13] + arr[idx + 14]
//     );
//     if (sum > result) {
//       result = sum;
//     }
//   }
//
//   return result;
// };

module.exports = hourglassSum;
