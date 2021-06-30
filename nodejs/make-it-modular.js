const foo = require("./mymodule.js");

const folder = process.argv[2];
const extension = process.argv[3];

const callback = (err, files) => {
  if (err) throw err;
  files.forEach((file) => console.log(file));
};

foo(folder, extension, callback);
