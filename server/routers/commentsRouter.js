const commentBLL = require('../BLLs/commentsBll')
const express = require('express')
const router = express.Router()




router.get('/',async(req,res)=>{
    let comments = []
    if(req.query.postId)
    {

        let postId = req.query.postId;
        comments = await commentBLL.getPostsComments(postId);
    }
    else
    {
        comments = await commentBLL.getAllComments();
    }
    return res.json(comments)
})
router.post('/',async(req,res)=>{
    const post = req.body
    const newPost = await commentBLL.addComment(post)
    return res.json(newPost)
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const comment = await commentBLL.getCommentById(id)
    return res.json(post)
})

router.put('/:id',async(req,res)=>{
    const id = req.params.id
    const updatedComment = req.body
    const updated = await commentBLL.editComment(id, updatedComment)
    return res.json(updated)
})

router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const deleted = await commentBLL.deleteComment(id)
    return res.json(deleted)
})

  


module.exports = router