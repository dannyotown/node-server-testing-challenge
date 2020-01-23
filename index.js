const express = require("express");

const server = express();
const users = require("./routes/users");
const port = process.env.PORT || 5000;

server.use(express.json());

server.use("/api/users", users);

server.get("/", (req, res, next) => {
  res.status(200).json({ test: "test" });
});

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n=> Server up at http://localhost:${port}\n`);
  });
}

module.exports = server;
