const usersBLL = require('../BLLs/usersBll')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
   const users =  await usersBLL.getUsers()
   return res.json(users)
})

router.post('/login',async(req,res)=>{
    const valUser = {email:req.body.email, password: req.body.password}
    const user = await usersBLL.getUser(valUser)
    return res.json(user)
})

router.post('/',async(req,res)=>{
    const user = req.body
    const newUser = await usersBLL.addUser(user)
    return res.json(newUser)
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const user = await usersBLL.getUserById(id)
    return res.json(user)
})

router.put('/:id',async(req,res)=>{
    const id = req.params.id
    const updatedUser = req.body
    const updated = await usersBLL.editUser(id, updatedUser)
    return res.json(updated)
})


module.exports = router