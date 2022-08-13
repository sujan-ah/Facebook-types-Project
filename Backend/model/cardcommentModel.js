import mongoose from "mongoose";

const postCommentSchema = new mongoose.Schema({
    postId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    cardComment:{
        type: String,
        required: true
    },
})

const PostComment = mongoose.model('PostComment', postCommentSchema)

export default PostComment