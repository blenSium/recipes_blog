const mongoose = require('mongoose')
const {Schema} = mongoose


const postSchema = new Schema({
    title:String,
    description:String,
    recipe:[String],
    preparation:String,
    img:{
        public_id : String,
        url: String
    },
    time:String,
    userId:String
},{timestamps:true})

const model = mongoose.model('post',postSchema)

module.exports = model