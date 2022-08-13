import express from 'express'
import Job from '../model/jobModel.js';

const jobRoutes = express.Router()

jobRoutes.post('/', async (req,res)=>{
    // console.log(req.body);
    let jobInfo = {
        comName: req.body.comName,
        jobtitle: req.body.jobtitle,
        media: req.body.media,
        details: req.body.details,
        jobNature: req.body.jobNature,
        workingHour: req.body.workingHour,
        workingdays: req.body.workingdays,
        location: req.body.location,

        one: req.body.one,
        two: req.body.two,
        three: req.body.three,
        four: req.body.four,
        five: req.body.five,

        educational: req.body.educational,
        experience: req.body.experience,
        salary: req.body.salary,
    }
    // console.log(jobInfo);

    let jobs = await Job(jobInfo)
    // console.log(jobs);
    jobs.save()
})

jobRoutes.get('/getdata', async (req,res)=>{
    let jobInfo = await Job.find({})
    // console.log(jobInfo);
    res.send(jobInfo)
})

jobRoutes.get('/:jobtitle', async (req,res)=>{
    // console.log(req.params.jobtitle);
    let jobInfo = await Job.findOne({jobtitle: req.params.jobtitle})
    // console.log(jobInfo);
    res.send(jobInfo)
})


export default jobRoutes