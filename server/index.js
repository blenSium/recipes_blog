const express = require("express");
const cors = require("cors");
const usersRouter = require('./routers/usersRouter')
const postsRouter = require('./routers/postsRouter')
const coursesRouter = require('./routers/coursesRouter')
const commentsRouter = require('./routers/commentsRouter')

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors())

require('./config/database')
app.use('/users',usersRouter)
app.use('/posts',postsRouter)
app.use('/courses',coursesRouter)
app.use('/comments',commentsRouter)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})