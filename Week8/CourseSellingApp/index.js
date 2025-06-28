const express=require("express")
const app=express()
const port=3000
const cors=require('cors')
app.use(cors())
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { z }=require('zod')
app.use(express.json())

require("dotenv").config()
const mongoose=require('mongoose')

const {adminRouter}=require('./routes/admin')
const {courseRouter}=require('./routes/course')
const {userRouter}=require('./routes/user')
app.use('/user',userRouter);
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_URL) //Doing this will ensure that the database connection will happen before server starts
    app.listen(port,function()
    {
        console.log("The server is up and running")
    })
}

main()