import express from 'express'
import Accept from '../model/acceptModel.js';

const acceptRouter = express.Router()

acceptRouter.post('/reqAccept', async (req,res)=>{
    // console.log(req.body.id);
    let acceptInfo = {
        // objectId: req.body.id,
        requserName: req.body.requserName,
        requserId: req.body.requserId,
        acceptUserName: req.body.acceptUserName,
        acceptUserId: req.body.acceptUserId,
        userobjectId: req.body.userobjectId,
    }
    let accept = new Accept(acceptInfo)
    // console.log(accept);
    accept.save()
    res.send(accept)
})

acceptRouter.get('/getaccept/:id', async (req,res)=>{
    // console.log(req.params.id);
    let data = await Accept.find({acceptUserId: req.params.id})
    // console.log(data);
    res.send(data);
})

acceptRouter.get('/getaccept2/:id', async (req,res)=>{
    // console.log(req.params.id);
    let data = await Accept.find({requserId: req.params.id})
    // console.log(data);
    res.send(data);
})

acceptRouter.post('/getacceptid/:id', async (req,res)=>{
    // console.log(req.params.id);
    Accept.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
})

acceptRouter.get('/acceptid', async (req,res)=>{
    // console.log(req.params.id);
    let data = await Accept.find({})
    // console.log(data);
    res.send(data)
})

// acceptRouter.get('/acceptdata/:id', async (req,res)=>{
//     console.log(req.params.id);
// })


export default acceptRouter