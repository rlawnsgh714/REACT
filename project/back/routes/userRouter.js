const express = require("express");
const router = express.Router();

const { User } = require("../db.js");

router.get("/list/:id?", async (req, res) => {
  console.log(req.params.id);
  const users = await User.findAll({
    order: [["id", "DESC"]],
  });
  res.json(users);
});

router.post("/insert", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
    })
      .then((e) => {
        return res.status(200).json({ message: "db insert 성공" });
      })
      .catch((e) => {
        console.log(e);
        return res.status(500).json({ message: "db email 중복" });
      });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
