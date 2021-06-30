const net = require("net");

const port = process.argv[2];

const server = net.createServer((socket) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  socket.end(
    `${addZero(year)}-${addZero(month)}-${addZero(day)} ${addZero(
      hour
    )}:${addZero(minute)}\n`
  );
});

const addZero = (num) => {
  return num < 10 ? "0" + num : num;
};
server.listen(port);
