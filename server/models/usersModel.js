const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String
})

const model = mongoose.model('user',userSchema)

module.exports = model