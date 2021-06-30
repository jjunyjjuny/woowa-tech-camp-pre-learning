const http = require("http");
const url = require("url");

const port = process.argv[2];

const parseQuery = (url) => {
  switch (url.pathname) {
    case "/api/parsetime":
      return parseTime(new Date(url.query.iso));
    case "/api/unixtime":
      return unixTime(new Date(url.query.iso));
    default:
      return "invalid endpoint url";
  }
};
const parseTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

const unixTime = (time) => {
  return { unixtime: time.getTime() };
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return res.end("not GET Method");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  const myURL = url.parse(req.url, true);
  res.end(JSON.stringify(parseQuery(myURL)));
});

server.listen(port);
