const fs = require("fs");
const { join } = require("path");

const handelHome = (req, res) => {
  fs.readFile(join(__dirname, "..", "public", "index.html"), (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>something wrong</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

const handlePublic = (req, res, url) => {
  const ext = url.split(".")[1];
  const mimeType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon"
  };
  fs.readFile(join(__dirname, "..", url), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>something Wrong!!!</h1>");
    } else {
      res.writeHead(200, { "Content-Type": `${mimeType[ext]}` });
      res.end(data);
    }
  });
};

module.exports = { handelHome, handlePublic };
