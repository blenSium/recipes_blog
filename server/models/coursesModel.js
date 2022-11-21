const mongoose = require('mongoose')
const {Schema} = mongoose


const courseSchema = new Schema({
    name:String,
    img:String,
    date:String,
    description:String,
})

const model = mongoose.model('course',courseSchema)

module.exports = model