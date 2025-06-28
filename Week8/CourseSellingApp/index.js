const express=require("express")
const app=express()
const port=3000
const cors=require('cors')
app.use(cors())
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { z }=require('zod')
const mongoose=require('mongoose')
app.use(express.json())

const {adminRouter}=require('./routes/admin')
const {courseRouter}=require('./routes/course')
const {userRouter}=require('./routes/course')
app.use('/user',userRouter);
app.use('/course',courseRouter)
app.use('/admin',adminRouter)



app.listen(port,function(){
    console.log("The server is up and running")
})