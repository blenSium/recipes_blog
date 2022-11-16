const courseModel = require('../models/coursesModel')

const getAllCourses = ()=>{
    return courseModel.find({})
}

module.exports = {getAllCourses}