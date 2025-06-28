const express=require("express")
const app=express()
const port=3000
const cors=require('cors')
const cors=cors()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { z }=require('zod')
const mongoose=require('mongoose')
app.use(express.json())

app.post('/signup',function(req,res){

})

app.post('/signin',function(req,res){

})

app.post('/purchase',function(req,res){

})

app.get('/coursesInfo',function(req,res){

})

app.post('/purchasedCourse',function(req,res){})



app.listen(port,function(){
    console.log("The server is up and running")
})