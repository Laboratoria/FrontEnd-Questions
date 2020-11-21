// const hasText = (a, b) => a.includes(b);
// const hasText = (a, b) => a.indexOf(b) !== -1;

const hasText = (a, b) => {
  if (!a) {
    return a === b;
  }

  for (let i = 0; i < a.length; i += 1) {
    let found = true;
    for (let j = 0; j < b.length; j += 1) {
      if (a[i + j] !== b[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }

  return false;
};

module.exports = hasText;