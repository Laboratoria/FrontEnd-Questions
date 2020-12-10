const dynamicArray = (n, queries) => {
  const seqList = Array(n).fill().map(_ => []);
  let lastAnswer = 0;
  const results = [];

  for (let i = 0; i < queries.length; i += 1) {
    const [type, x, y] = queries[i];
    const idx = (x ^ lastAnswer) % n;
    const seq = seqList[idx];

    if (type === 1) {
      seq.push(y);
    } else if (type === 2) {
      lastAnswer = seq[y % seq.length];
      results.push(lastAnswer);
    }
  }

  return results;
};

module.exports = dynamicArray;