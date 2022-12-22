const usersBLL = require("../BLLs/usersBll");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersBLL.getUsers();
    return res.json(users);
  } catch (error) {
    return error;
  }
});

router.post("/login", async (req, res) => {
  try {
    const valUser = { email: req.body.email, password: req.body.password };
    const user = await usersBLL.getUser(valUser);
    return res.json(user);
  } catch (error) {
    return error;
  }
});

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await usersBLL.addUser(user);
    return res.json(newUser);
  } catch (error) {
    return error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersBLL.getUserById(id);
    return res.json(user);
  } catch (error) {
    return error;
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const updated = await usersBLL.editUser(id, updatedUser);
    return res.json(updated);
  } catch (error) {
    return error;
  }
});

module.exports = router;
