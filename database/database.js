const { createConnection } = require("mysql");

const con = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "task",
  connectionlimit: 10,
});

module.exports = con;
