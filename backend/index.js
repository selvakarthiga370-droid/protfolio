
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const PORT=process.env.PORT
const app=express();
app.use(cors);
app.listen(PORT);
app.get('/user',(req,res)=>{
    res.send("APP IS WORKING")
})

mongoose.connect(process.env.MONGO_URI)
.then((res)=>console.log("MONGO DB IS CONNECTED!"))
.catch((error)=>{console.log(error)});