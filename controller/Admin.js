const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const con = require("../database/database");
const { log } = require("console");

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log(con);

  con.connect(function (err) {
    if (err) console.log(err);
    con.query(
      `select * from admin where email='${req.body.email}' and password='${req.body.password}' `,
      function (err, result) {
        if (err) console.log(err);

        if (!result.length == 0) {
          const token = jwt.sign(
            {
              data: result[0],
            },
            "secret",
            { expiresIn: 60 * 60 }
          );
          // console.log(token);
          return res.json({ token: token });
        } else {
          return res.json({ err: "login faild" }).status(400);
        }
      }
    );
  });
});

router.post("/signup", async (req, res) => {
  // console.log(req);
  console.log("aihsih");
  var sql =
    "INSERT INTO admin ( email, password,name ) VALUES ('" +
    req.body.email +
    "','" +
    req.body.password +
    "','" +
    req.body.name +
    "')";

  con.query(sql, function (err, result) {
    if (err) console.log(err);
    return res.send("data is added");
    // console.log("Number of records inserted: " + result.affectedRows);
  });
  // );
});

module.exports = router;
