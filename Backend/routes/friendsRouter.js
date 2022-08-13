import express from 'express'
import Friends from '../model/friendsModel.js'

const friendRouter = express.Router()

friendRouter.post('/', async (req,res)=>{
    // console.log(req.body);
    let friendsInfo = {
        requestId: req.body.requestId,
        userId: req.body.userId,
        user: req.body.user,
        userName: req.body.userName,
        userDesignation: req.body.userDesignation,
        reuestname: req.body.reuestname,
        requestdesignation: req.body.requestdesignation,
    }
    // console.log(friendsInfo);
    let friends = new Friends(friendsInfo)
    // console.log(friends);
    friends.save()
})

// friendRouter.get('/getdata/:id', async (req,res)=>{
//     // console.log(req.params);
//     let friendsInfo = await Friends.find({userId: req.params.id})
//     res.send(friendsInfo);
// })
friendRouter.get('/getdata', async (req,res)=>{
    // console.log(req.params);
    let friendsInfo = await Friends.find({})
    res.send(friendsInfo);
})

friendRouter.get('/getdata/:id', async (req,res)=>{
    // console.log(req.params.id);
    let friendsInfo = await Friends.find({requestId: req.params.id})
    // console.log(friendsInfo);
    res.send(friendsInfo);
})
friendRouter.get('/getdata2/:id', async (req,res)=>{
    // console.log(req.params.id);
    let friendsInfo = await Friends.find({user: req.params.id})
    // console.log(friendsInfo);
    res.send(friendsInfo);
})

export default friendRouter