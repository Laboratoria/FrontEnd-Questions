const analyseArray = (arr) => {
  const result = [arr[0], arr[0], arr[0]];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > result[0]) {
      result[2] = result[0];
      result[0] = arr[i];
    } else if (arr[i] < result[1]) {
      result[1] = arr[i];
    }
  }

  return result;
};

module.exports = analyseArray;