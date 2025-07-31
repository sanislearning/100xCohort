const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())

//jwt
const jwt=require('jsonwebtoken')
SECRET_KEY="sanisdoing"

//connection to DB
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://sanjaybiju10:YzUGkPdoNdAmsjI5@cluster0.ttppwzd.mongodb.net/BloggingSite")
const {UserModel,BlogModel}=require("./schema")

//Bcrypt and hashing
const bcrypt=require('bcrypt')

//Middleware
const {auth}=require('./middleware')

const port=3000

app.post("/signup",async function(req,res){  //SignUp page
    let username=req.body.username;
    let password=req.body.password;
    try{
    let UserExists=await UserModel.findOne({username:username})
    if(UserExists){
        console.log("User with the same username already exists")
        return res.status(401).json({
            response:"User with the same name exists"
        })
    }
    let hashedPassword=await bcrypt.hash(password,5)
    let response=await UserModel.create({
        username:username,
        password:hashedPassword
    })
    res.status(200).json({
        response:"Congratulations, new user added"
    })
}
catch(err){
    res.json({error:err})
}
})


app.post("/signin",async function(req,res){ //SignIn page
    let username=req.body.username
    let password=req.body.password
    let user=await UserModel.findOne({
        username:username
    })
    if(!user){
        return res.status(403).json({
            response:"User does not exist"
        })
    }
    let match=await bcrypt.compare(password,user.password) //Returns a true or false value
    if (!match){
        return res.status(403).json({
            response:"Your password is incorrect"
        })
    }

    let userId=jwt.sign({userId:user._id},SECRET_KEY)

    res.json({
        response:"You have successfully logged in",
        token:userId
    })
})

app.get('/blogs',auth,async function(req,res){ //get all blogs displayed
    const userId=req.userId
    let blogCollection=await BlogModel.find({
        userId:userId
    })
    console.log(blogCollection)
    res.send(blogCollection)
})

app.post('/blogs',auth,async function(req,res){ //make a new blog
    const userId=req.userId
    let title=req.body.title
    let description=req.body.description
    let AddedBlog=await BlogModel.create({
        title:title,
        description:description,
        userId:new mongoose.Types.ObjectId(userId)
    })
    res.json({
        response:"Blog has been created"
    })
})

app.get('/blog/:id',auth,async function(req,res){ //display a singular page
    const userId=req.userId
    let title=req.body.blog
    const BlogFind=await BlogModel.findOne({
        title:blog,
        userId:userId
    })
    if (!BLog){
        res.json({
            response:"Blog does not exist"
        })
    }
    res.send(BlogFind)
})


app.listen(port, function () {
    console.log("The server is up and running");
});
