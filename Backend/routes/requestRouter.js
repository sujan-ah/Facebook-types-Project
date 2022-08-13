import express from 'express'
import Accept from '../model/acceptModel.js'
import Request from '../model/requestModel.js'

const requestRouter = express.Router()

requestRouter.post('/', async (req,res)=>{
    let requestInfo = {
        requestId: req.body.requestId,
        userId: req.body.userId,
        user: req.body.user,
        userName: req.body.userName,
        userDesignation: req.body.userDesignation,
        reuestname: req.body.reuestname,
        requestdesignation: req.body.requestdesignation,
    }
    let RequestData = new Request(requestInfo)
    RequestData.save()
    res.send(RequestData)
})

requestRouter.get('/getrequest/:id', async (req,res)=>{
    let data = await Request.find({user: req.params.id})
    res.send(data)
})

requestRouter.get('/getrequest', async (req,res)=>{
    let data = await Request.find({})
    res.send(data)
})

requestRouter.get('/getdataforfriend/:id', async (req,res)=>{
    let data = await Request.findOne({_id: req.params.id})
    res.send(data)
})

requestRouter.get('/getrequestId/:id', async (req,res)=>{
    let data = await Request.find({user: req.params.id})
    res.send(data)
})

requestRouter.get('/getrequestId2/:id', async (req,res)=>{
    let data = await Request.find({requestId: req.params.id})
    res.send(data)
})

requestRouter.get('/requestuser/:id', async (req,res)=>{
    let data = await Request.find({requestId: req.params.id})
    res.send(data)
})

requestRouter.get('/getsentrequest/:id', async (req,res)=>{
    let data = await Request.find({requestId: req.params.id})
    res.send(data)
})

requestRouter.post('/reqDecline/:id', async (req,res)=>{
    // console.log(req.params.id);
    Request.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
})
 
requestRouter.post('/getacceptdata', async (req,res)=>{
    let data = await Request.findOne({_id: req.body.id})
    res.send(data);
})

requestRouter.post('/getacceptid/:id', async (req,res)=>{
    // console.log(req.params.id);
    Request.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
})

requestRouter.post('/getReqcancelid', async (req,res)=>{
    Request.findByIdAndDelete(req.body.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
})

export default requestRouter