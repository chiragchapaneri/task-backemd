const express = require("express");
const con = require("../database/database");

const router = express.Router();

router.post("/add", async (req, res) => {
  console.log(req);
  const date = Date();

  var sql =
    "INSERT INTO user (name,  email, pincode,address) VALUES ('" +
    req.body.name +
    "','" +
    req.body.email +
    "','" +
    req.body.pincode +
    "','" +
    req.body.address +
    "')";

  con.query(sql, function (err, result) {
    if (err) console.log(err);
    res.send("data is added");
    // console.log("Number of records inserted: " + result.affectedRows);
  });
  // );
});

router.post("/update/:id", async (req, res) => {
  var sql =
    "UPDATE user SET name = '" +
    req.body.name +
    "', address = '" +
    req.body.address +
    "', pincode= '" +
    req.body.pincode +
    "'   , email = '" +
    req.body.email +
    "' WHERE  id ='" +
    req.params.id +
    "'";

  con.query(sql, function (err, result) {
    if (err) console.log(err);

    return res.send("data is change");

    // console.log(result);
  });
  // );
});

router.post("/delete/:id", async (req, res) => {
  // console.log(req);
  const date = Date();

  var sql = "delete from user  WHERE  id ='" + req.params.id + "'";

  con.query(sql, function (err, result) {
    if (err) console.log(err);

    res.send(" data is remove");
  });
  // );
});

router.get("/users", async (req, res) => {
  console.log(req);
  const date = Date();

  var sql = "select * from user ";

  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log(result);
    return res.send(result).status(200);
  });
  // );
});
module.exports = router;
