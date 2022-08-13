import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    name:{
        type: String,
        required: true
    },
    // slug:{
    //     type: String,
    //     required: true,
    // },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
        required: true
    },
    isFormFillup:{
        type: Boolean,
        default: false
    },
})
const User = mongoose.model("User", userSchema)

export default User