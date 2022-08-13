import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    comName: {
        type: String,
        required: true,
    },
    jobtitle: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    jobNature: {
        type: String,
        required: true,
    },
    workingHour: {
        type: String,
        required: true,
    },
    workingdays: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    one: {
        type: String,
        required: true,
    },
    two: {
        type: String,
        required: true,
    },
    three: {
        type: String,
        required: true,
    },
    four: {
        type: String,
        required: true,
    },
    five: {
        type: String,
        required: true,
    },
    educational: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
})


const Job = mongoose.model('Job', jobSchema);

export default Job