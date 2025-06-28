const express=require("express")
const Router=express.Router
const adminRouter=Router()
const {AdminModel, CourseModel}=require("../db")
const jwt=require("jsonwebtoken")
const {ADMIN_KEY}=require('../config')
const {adminAuth}=require("../auth")
const {z}=require("zod")
const bcrypt=require('bcrypt')

adminRouter.post('/signup',async function(req,res){
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
        await AdminModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
        res.json({
            response:"Admin has been created"
        })
    } catch (error) {
        console.log(error)
    }
})

adminRouter.post('/signin',async function(req,res){
    let email=req.body.email
    let password=req.body.password
    userFind=await AdminModel.findOne({
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
        },ADMIN_KEY)
        res.json({
            token:token
        })
    }
})

adminRouter.post('/course',adminAuth,async function(req,res){
    const adminId=req.userId
    const {title,description,imageUrl,price}=req.body
    const course=await CourseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })
    res.json({
        message:"Course created",
        courseId:course._id
    })
})

adminRouter.put('/course',adminAuth,async function(req,res){
    const adminId=req.userId
    const { courseId, title, description, imageUrl, price } = req.body;
    let ChangeCourse=await CourseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
    })
    res.json({ message: "Course updated successfully" });
    
})

adminRouter.get('/course/bulk',adminAuth,async function(req,res){
    const adminId=req.userId
    let course=await CourseModel.find({
        creatorId:adminId
    })
    res.send(course)

})

module.exports={
    adminRouter:adminRouter
}