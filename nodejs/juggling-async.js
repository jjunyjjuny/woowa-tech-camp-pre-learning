const http = require("http");
const urls = process.argv.slice(2);

async function exec() {
  for (let i = 0; i < urls.length; i++) {
    let collect = "";
    await new Promise((resolve) => {
      http.get(urls[i], (res) => {
        res.setEncoding("utf8");
        res.on("data", (data) => {
          collect += data;
        });
        res.on("end", () => {
          console.log(collect);
          resolve();
        });
        res.on("error", (error) => {
          console.log(error);
        });
      });
    });
  }
}

exec();
