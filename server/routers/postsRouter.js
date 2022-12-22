const postBLL = require("../BLLs/postsBll");
const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  try {
    let posts = [];
    if (req.query.userId) {
      // console.log(req.query)

      let userId = req.query.userId;
      posts = await postBLL.getUsersPosts(userId);
    } else {
      posts = await postBLL.getAllPosts();
    }
    return res.json(posts);
  } catch (error) {
    return error;
  }
});
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const newPost = await postBLL.addPost(post);
    return res.json(newPost);
  } catch (error) {
    return error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postBLL.getPostById(id);
    return res.json(post);
  } catch (error) {
    return error;
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = req.body;
    const currentPost = await postBLL.getPostById(id);
    if (req.body.img !== "") {
      const imgId = currentPost.img.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
      const newImage = await cloudinary.uploader.upload(req.body.img, {
        folder: "recipes",
      });
      updatedPost.img = {
        public_id: newImage.public_id,
        url: newImage.url,
      };
    }
    const updated = await postBLL.editPost(id, updatedPost);
    return res.json(updated);
  } catch (error) {
    return error;
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await postBLL.deletePost(id);
    return res.json(deleted);
  } catch (error) {
    return error;
  }
});

module.exports = router;
