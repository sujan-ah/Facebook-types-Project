import express from "express"
import User from "../model/userModel.js";
import bcrypt from 'bcryptjs'
import Comment from "../model/commentModel.js";
import Like from "../model/likeModel.js";
import PostComment from "../model/cardcommentModel.js";
import ObjectId from "../model/userObjectIdModel.js";
// import Like from "../model/likeModel.js";
 

const userRouter = express.Router()                
   
userRouter.post('/signup', async(req, res) => {    
    const newUser = {                          
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }
    let user = new User(newUser)
    user.save()
    res.send({
        _id: user._id,
        name: user.name,
        designation: user.designation,
        email: user.email,
        isFormFillup: user.isFormFillup,
    })
})

userRouter.post('/signin',async (req, res) => {     
    let user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                designation: user.designation,
                email: user.email,
                isFormFillup: user.isFormFillup,
            })
            return
        }
    }
    res.status(401).send({msg: "Invalid Email or Password"})
})

userRouter.post('/data', async (req,res)=>{
    let singleuserInfo = {
        name: req.body.name,
        designation: req.body.designation,
        userId: req.body.id,
        comment: req.body.comment,
    }
    const singleUser = new Comment(singleuserInfo)
    singleUser.save()
    res.send(singleuserInfo)
})

userRouter.get('/getdata', async (req,res)=>{
    let data = await Comment.find({})
    res.send(data)
})

userRouter.get('/getdata/:id', async (req,res)=>{
    let data = await Comment.find({_id: req.params.id})
    res.send(data)
})

userRouter.post('/like', async (req,res)=>{
    let likeInfo={
        postId: req.body.postId,
        likerId: req.body.likerId,
        name: req.body.name,
    }
    const data = new Like(likeInfo)
    data.save()
    res.send(data)
})

userRouter.get('/getlike', async (req,res)=>{
    let data = await Like.find({})
    res.send(data)
})

userRouter.post('/comment', async (req,res)=>{
    let commentInfo = {
        cardComment: req.body.cardComment,
        postId: req.body.postId,
        userId: req.body.userId,
        name: req.body.name,
    }

    let Comment = new PostComment(commentInfo)
    Comment.save()
    res.send(Comment)
})

userRouter.get('/getcardcomment/:id', async (req,res)=>{
   
    let data = await PostComment.find({postId: req.params.id})
    res.send(data)
})

userRouter.post('/id', async (req,res)=>{
    let objectIdInfo ={
        userObjectId: req.body.userObjectId,
        
    }
    const objId = new ObjectId(objectIdInfo)
    objId.save()
    res.send(objId)
})

userRouter.get('/main/:id', async (req,res)=>{
    let data = await Comment.findById(req.params.id)
    res.send(data)
})
 
userRouter.get('/postdata', async (req,res)=>{
    let data = await Comment.find({})
    console.log(data)
    // res.send(data)
})

userRouter.put('/update', async (req,res)=>{
    User.findByIdAndUpdate(req.body.id, { isFormFillup: true },
                                function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            res.send(docs);
        }
    });
})

userRouter.get('/profile', async (req,res)=>{
    let data = await Comment.find({})
    res.send(data)
})

export default userRouter