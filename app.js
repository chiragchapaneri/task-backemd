// const express = require("express");
const bodyParser = require("body-parser");
const express = require("express");

const user = require("./controller/user");
const admin = require("./controller/Admin");

// const { pool } = require("./databases");

const app = express();

app.use(bodyParser.json());

app.use("/user", user);
app.use("/admin", admin);

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log("app is connected"));
