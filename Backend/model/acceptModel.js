import mongoose from "mongoose";

const acceptSchema = new mongoose.Schema({
    requserName:{
        type: String,
        required: true
    },
    requserId:{
        type: String,
        required: true
    },
    acceptUserName:{
        type: String,
        required: true
    },
    acceptUserId:{
        type: String,
        required: true
    },
    userobjectId:{
        type: String,
        required: true
    },
})

const Accept = mongoose.model('Accept', acceptSchema)

export default Accept