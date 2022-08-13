import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js';
import detailsRouter from './routes/detailsRouter.js';
import educationRouter from './routes/educationRouter.js';
import requestRouter from './routes/requestRouter.js';
import acceptRouter from './routes/acceptRouter.js';
import jobRoutes from './routes/jobRoutes.js';
import friendRouter from './routes/friendsRouter.js';

const app = express()

dotenv.config()
mongoose.connect(process.env.MongoDB_URI,()=>{
  console.log('MongoDB Connected');
})

app.use(express.json())

app.use('/api/users', userRouter) 
app.use('/api/details', detailsRouter) 
app.use('/api/education', educationRouter) 
app.use('/api/request', requestRouter) 
app.use('/api/accept', acceptRouter) 
app.use('/api/job', jobRoutes) 
app.use('/api/friends', friendRouter) 


app.get('/', function (req, res) {
  res.send('Hello')
})

app.listen(8000,()=>{
    console.log('Port Running On 8000 Port');
})