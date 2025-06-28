const express=require("express")
const Router=express.Router
const userRouter=Router();
const UserModel=require("../db")

userRouter.post('/signup',function(req,res){

})

userRouter.post('/signin',function(req,res){

})

userRouter.get('/purchasedCourse',function(req,res){
    
})

module.exports={
    userRouter:userRouter
}