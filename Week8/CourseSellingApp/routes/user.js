const express=require("express")
const Router=express.Router
const userRouter=Router();
const {UserModel}=require("../db")
const {z}=require("zod")
const jwt=require("jsonwebtoken")
const {SECRET_KEY}=require('../config')
const {auth}=require("../auth")
const bcrypt=require("bcrypt")


userRouter.post('/signup',async function(req,res){
    const requiredBody=z.object({
        email:z.string().email().min(2).max(100),
        firstName:z.string().min(1).max(100),
        lastName:z.string().min(3).max(100),
        password:z.string().min(3).max(100)
    })
    const typeStatus=requiredBody.safeParse(req.body)
    if(!typeStatus.success){
        res.json({
            message:"Incorrect Format",
            error:typeStatus.error
        })
        return 
    }
    const email=req.body.email
    const password=req.body.password
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    try {
        const hashedPassword=await bcrypt.hash(password,5)
        console.log(hashedPassword)
        await UserModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
        res.json({
            message:"You have successfully signed up"
        })
    } catch (error) {
        console.log(error)
    }
})

userRouter.post('/signin',async function(req,res){
    let email=req.body.email
    let password=req.body.password
    userFind=await UserModel.findOne({
        email:email
    })
    if(!userFind){
        res.status(403).json({
            response:"User does not exist"
        })
        return
    }
    let passwordMatch=await bcrypt.compare(password,userFind.password)
    if(passwordMatch){
        const token=jwt.sign({
            id:userFind._id
        },SECRET_KEY)
        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            response:"Incorrect credentials"
        })
    }
})

userRouter.get('/purchasedCourse',auth,function(req,res){
    let userId=req.userId
    res.json({ message: `Courses purchased by user ${userId}` });
})

module.exports={
    userRouter:userRouter
}