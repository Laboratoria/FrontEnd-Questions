const rotateLeft = (d, arr) => {
  const head = [];
  const tail = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i < d) {
      tail.push(arr[i]);
    } else {
      head.push(arr[i]);
    }
  }

  return head.concat(tail);
};

module.exports = rotateLeft;