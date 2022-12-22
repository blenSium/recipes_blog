const postModel = require('../models/postsModel')
const cloudinary = require("../utils/cloudinary");


const getAllPosts = ()=>{
    return postModel.find({})
}

const getPostById = (id) => {
    return postModel.findById(id);
  }
  
  const getUsersPosts = (userId) => {
    return postModel.find({"userId":userId});
  };
  
  const addPost = async (obj) => {
    const { title, description, recipe, preparation, img, time, userId } = obj

    try {
      const result = await cloudinary.uploader.upload(img, {
        folder: "recipes",
      });
  
      const newPost = await postModel({
        title,
        description,
        recipe,
        preparation,
        img: { public_id: result.public_id, url: result.secure_url },
        time,
        userId,
      });;
      await newPost.save();
      return "Created";
    } catch (e) {
      throw "ERROR";
    }
  };
  
  const editPost = async (id, obj) => {
      try {
        await postModel.findByIdAndUpdate(id, obj);
        return "UPDATED";
      } catch (e) {
        ("ERROR");
      }
    };
  
  const deletePost = async(id) =>{
      await postModel.findByIdAndDelete(id)
      return 'DELETED'
  } 

  module.exports = {getAllPosts, getPostById, editPost, addPost,deletePost,getUsersPosts};
  