const express=require("express")
const Router=express.Router
const courseRouter=Router()
const {courseModel}=require("../db")
const {purchaseModel}=require("../db")
const {auth}=require('../auth')

courseRouter.post('/purchase',auth,async function(req,res){
    const userId=req.userId
    const courseId=req.body.courseId

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"You have successfully bought a course"
    })
})

courseRouter.get('/preview',async function(req,res){
    const courses=await courseModel.find({})
    res.json({
        courses
    })
})

module.exports={
    courseRouter:courseRouter
}