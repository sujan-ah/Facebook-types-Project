import mongoose from "mongoose";

const userObjectIdSchema = new mongoose.Schema({
    userObjectId:{
        type: String,
        required: true
    },
})

const ObjectId = mongoose.model('ObjectId', userObjectIdSchema)

export default ObjectId