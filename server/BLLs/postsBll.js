const postModel = require('../models/postsModel')

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
    try {
      const newPost = postModel({
        title: obj.title,
        description: obj.description,
        recipe: obj.recipe,
        preparation:obj.preparation,
        img:obj.img,
        time:obj.time,
        userId: obj.userId,
      });
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
  