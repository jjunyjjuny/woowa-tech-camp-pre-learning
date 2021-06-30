const fs = require("fs");
const folder = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(folder, "utf8", (err, files) => {
  if (err) throw err;
  const filterd = files.filter((file) => file.includes(extension));
  filterd.forEach((file) => console.log(file));
});
