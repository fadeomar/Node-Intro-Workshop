const http = require("http");

const port = 3000;

const router = (req, res) => {
  res.end("Hello ");
};
const server = http.createServer(router);

server.listen(port);

console.log(`http://localhost:${port}`);
