const { join } = require("path");
const fs = require("fs");

const { handelHome, handlePublic } = require("./handlebars");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    handelHome(req, res);
  } else if (endpoint.includes("public")) {
    handlePublic(req, res, endpoint);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("page not found");
  }
};

module.exports = router;
