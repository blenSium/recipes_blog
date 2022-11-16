const coursesBLL = require('../BLLs/coursesBll')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
   const courses =  await coursesBLL.getAllCourses()
   return res.json(courses)
})

module.exports = router