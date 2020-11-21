const maskify = (cc) => {
  const lastFour = cc.substr(-4);
  const firstNumbers = cc.slice(0, -4).split('');
  const maskifyNumbers = firstNumbers.map(() => '#');
  return maskifyNumbers.join('') + lastFour;
};

module.exports = maskify;
