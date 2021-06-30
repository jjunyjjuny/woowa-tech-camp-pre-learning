const fs = require("fs");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, "utf8", (err, files) => {
    if (err) return callback(err);

    const filterd = files.filter((file) => file.includes("." + extension));
    callback(null, filterd);
  });
};
