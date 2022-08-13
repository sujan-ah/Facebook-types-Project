import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    postId:{
        type: String,
        required: true
    },
    likerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name:{
        type: String,
        required: true
    },
})

const Like = mongoose.model('Like', likeSchema)

export default Like