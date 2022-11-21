const commentsModel = require('../models/commentsModel')

const getAllComments = ()=>{
    return commentsModel.find({})
}

const getCommentById = (id) => {
    return commentsModel.findById(id);
  }
  
  const getPostsComments = (postId) => {
    return commentsModel.find({"postId":postId});
  };
  
  const addComment = async (obj) => {
    try {
      const newComment = commentsModel({
        userId: obj.userId,
        postId: obj.postId,
        content: obj.content,
      });
      await newComment.save();
      return "Created";
    } catch (e) {
      throw "ERROR";
    }
  };
  
  const editComment = async (id, obj) => {
      try {
        await commentsModel.findByIdAndUpdate(id, obj);
        return "UPDATED";
      } catch (e) {
        ("ERROR");
      }
    };
  
  const deleteComment = async(id) =>{
      await commentsModel.findByIdAndDelete(id)
      return 'DELETED'
  } 

  module.exports = {getAllComments, getCommentById, editComment, addComment,deleteComment,getPostsComments};
  