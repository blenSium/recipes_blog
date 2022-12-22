const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors");
const multer = require("multer")
const bodyParser = require("body-parser")
const usersRouter = require("./routers/usersRouter");
const postsRouter = require("./routers/postsRouter");
const coursesRouter = require("./routers/coursesRouter");
const commentsRouter = require("./routers/commentsRouter");

const app = express();
const port = 8000;
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors(
    {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
  )
);



require("./config/database");
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/courses", coursesRouter);
app.use("/comments", commentsRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
