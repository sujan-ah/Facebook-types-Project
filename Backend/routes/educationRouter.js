import express from 'express'
import Education from '../model/educationModel.js';

const educationRouter = express.Router()

educationRouter.post('/', async (req,res)=>{
    // console.log(req.body);
    let educateInfo = {
        userName: req.body.userName,
        userId: req.body.userId,
        highSchool: req.body.highSchool,
        collage: req.body.collage,
        university: req.body.university,
    }
    // console.log(educateInfo);
    let educate = new Education(educateInfo)
    educate.save()
    res.send(educate)
})

educationRouter.get('/getdata/:id', async (req,res)=>{
    // console.log(req.params.id);
    let educationInfo = await Education.find({userId: req.params.id})
    res.send(educationInfo);
})


export default educationRouter