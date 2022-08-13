import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    hometown:{
        type: String,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    relationship:{
        type: String,
        required: true
    },
})

const Details = mongoose.model('Details', detailsSchema)

export default Details