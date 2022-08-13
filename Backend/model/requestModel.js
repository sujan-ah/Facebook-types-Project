import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    requestId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    userDesignation:{
        type: String,
        required: true
    },
    reuestname:{
        type: String,
        required: true
    },
    requestdesignation:{
        type: String,
        required: true
    },
})

const Request = mongoose.model('Request', requestSchema)

export default Request