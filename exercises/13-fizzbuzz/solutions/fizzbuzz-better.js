module.exports = (n) => {
  for (let i = 0; ++i <= n;) {
    let str = '';

    if (i % 3 === 0) {
      str += 'fizz';
    }

    if (i % 5 === 0) {
      str += 'buzz';
    }

    console.log(str || i);
  }
};
