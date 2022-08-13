import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    highSchool:{
        type: String,
        required: true
    },
    collage:{
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
})

const Education = mongoose.model('Education', educationSchema)

export default Education