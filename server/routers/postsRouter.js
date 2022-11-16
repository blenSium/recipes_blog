const postBLL = require('../BLLs/postsBll')
const express = require('express')
const router = express.Router()




router.get('/',async(req,res)=>{
    let posts = []
    if(req.query.userId)
    {
        // console.log(req.query)

        let userId = req.query.userId;
        posts = await postBLL.getUsersPosts(userId);
    }
    else
    {
        posts = await postBLL.getAllPosts();
    }
    return res.json(posts)
})
router.post('/',async(req,res)=>{
    const post = req.body
    const newPost = await postBLL.addPost(post)
    return res.json(newPost)
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const post = await postBLL.getPostById(id)
    return res.json(post)
})

router.put('/:id',async(req,res)=>{
    const id = req.params.id
    const updatedPost = req.body
    const updated = await postBLL.editPost(id, updatedPost)
    return res.json(updated)
})

router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const deleted = await postBLL.deletePost(id)
    return res.json(deleted)
})

  


module.exports = router