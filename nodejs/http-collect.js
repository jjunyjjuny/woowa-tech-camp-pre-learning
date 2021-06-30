const http = require("http");

const url = process.argv[2];

let collect = "";

http
  .get(url, (response) => {
    response.setEncoding("utf8");
    response.on("data", (data) => {
      collect += data;
    });
    response.on("end", () => {
      console.log(collect.length);
      console.log(collect);
    });
    response.on("error", (error) => {
      console.log(error);
    });
  })
  .on("error", console.log);
