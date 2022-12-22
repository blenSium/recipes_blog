const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECTION,()=>console.log("connected to database"))