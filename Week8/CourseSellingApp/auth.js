const express=require("express")
const jwt=require("jsonwebtoken")
const {SECRET_KEY}=require('./config')
const {ADMIN_KEY}=require('./config')
function AuthHandler(req,res,next){
    let token=req.headers.token
    try {
        let decodedId=jwt.verify(token,SECRET_KEY)
        req.userId=decodedId.id
        next()
    } catch (error) {
        console.log(error)
        res.status(403).json({
            error:error,
            response:"Your token is not valid"
        })
    }
}

function AdAuthHandler(req,res,next){
    let token=req.headers.token
    try {
        let decodedId=jwt.verify(token,ADMIN_KEY)
        req.userId=decodedId.id
        next()
    } catch (error) {
        console.log(error)
        res.status(403).json({
            error:error,
            response:"Your token is not valid"
        })
    }
}

module.exports={
    auth:AuthHandler,
    adminAuth:AdAuthHandler
}