const capitalize = str => (
  !str
    ? ''
    : `${capitalize(str.slice(0, -1))}${(
      [' ', undefined].includes(str[str.length - 2])
        ? str[str.length - 1].toUpperCase()
        : str[str.length - 1]
    )}`
);

module.exports = capitalize;
