const mongoose = require('mongoose')
const {Schema} = mongoose


const postSchema = new Schema({
    title:String,
    description:String,
    recipe:String,
    img:String,
    time:String,
    userId:String
},{timestamps:true})

const model = mongoose.model('post',postSchema)

module.exports = model