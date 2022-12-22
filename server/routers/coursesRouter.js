const coursesBLL = require("../BLLs/coursesBll");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await coursesBLL.getAllCourses();
    return res.json(courses);
  } catch (error) {
    return error;
  }
});

module.exports = router;
