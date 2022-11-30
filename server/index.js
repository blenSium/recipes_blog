const express = require("express");
const cors = require("cors");
const multer = require("multer")
const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");
const coursesRouter = require("./routers/coursesRouter");
const commentsRouter = require("./routers/commentsRouter");

const app = express();
const port = 8000;
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(
  cors(
  //   {
  //   origin: "*",
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  // }
  )
);

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../client/public/upload")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
  })

const upload = multer({storage: storage})

app.post('/upload',upload.single("file"),(req,res)=>{
    res.json(req.file.filename)
})

require("./config/database");
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/courses", coursesRouter);
app.use("/comments", commentsRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
