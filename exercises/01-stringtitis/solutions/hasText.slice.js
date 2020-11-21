const hasText = (a, b) => {
  if (!a) {
    return a === b;
  }

  for (let i = 0; i < a.length; i += 1) {
    if (a.slice(i, i + b.length) === b) {
      return true;
    }
  }

  return false;
};

module.exports = hasText;