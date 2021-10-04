#! /usr/bin/env node

const readline = require('readline');

const getStrValue = str => [...str].reduce(
  (prev, char) => (
    /[A-zÀ-ú]/.test(char)
      ? prev + char.charCodeAt()
      : prev
  ),
  0,
);

const prompt = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('¿Cómo te llamas? ', (answer) => {
    console.log(getStrValue(answer));
    rl.close();
  });
};

const readFromStdin = () => {
  let sum = 0;
  process.stdin
    .setEncoding('utf8')
    .on('data', chunk => sum += getStrValue(`${chunk}`))
    .on('close', () => {
      console.log(sum);
    });
};

if (!process.stdin.isTTY) {
  return readFromStdin();
}

if (process.argv.length <= 2) {
  return prompt();
}

console.log(process.argv.slice(2).reduce(
  (memo, arg) => memo + getStrValue(arg),
  0,
));
