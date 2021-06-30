const fs = require("fs");
const file = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data.split("\n").length - 1);
});
