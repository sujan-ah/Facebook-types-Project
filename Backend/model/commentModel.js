import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    // slug:{
    //     type: String,
    //     required: true,
    // },
    designation:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        requred: true,
    },
    userId:{
        type: String,
        requred: true,
    },
    
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment