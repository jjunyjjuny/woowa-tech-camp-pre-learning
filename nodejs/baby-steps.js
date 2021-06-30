const numbers = process.argv.slice(2);

console.log(
  numbers.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0)
);
