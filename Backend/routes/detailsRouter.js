import express from 'express'
import Details from '../model/detailsModel.js';

const detailsRouter = express.Router()

detailsRouter.post('/', async (req,res)=>{
    // console.log(req.body);
    let userinfo = {
        userId: req.body.userId,
        fullname: req.body.fullname,
        designation: req.body.designation,
        city: req.body.city,
        hometown: req.body.hometown,
        work: req.body.work,
        relationship: req.body.relationship,
    }
    let userDetails = new Details(userinfo)
    userDetails.save()
    res.send(userDetails)
})

detailsRouter.get('/info', async (req,res)=>{
    // console.log(req.params);
    let data = await Details.find({})
    res.send(data);
})

detailsRouter.get('/info/:id', async (req,res)=>{
    // console.log(req.params);
    let data = await Details.findOne({userId: req.params.id})
    res.send(data);
})

export default detailsRouter