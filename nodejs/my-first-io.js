const fs = require("fs");
const file = process.argv[2];

const buffer = fs.readFileSync(path);

console.log(buffer.toString().split("\n").length - 1);
