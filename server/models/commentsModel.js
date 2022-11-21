const mongoose = require('mongoose')
const {Schema} = mongoose


const commentSchema = new Schema({
    userName:String,
    postId:String,
    content:String,
},{timestamps:true})

const model = mongoose.model('comment',commentSchema)

module.exports = model