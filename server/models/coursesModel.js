const mongoose = require('mongoose')
const {Schema} = mongoose


const courseSchema = new Schema({
    name:String,
    img:String,
    date:String,
    description:String,
},{timestamps:true})

const model = mongoose.model('course',courseSchema)

module.exports = model