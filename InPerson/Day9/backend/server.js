//JWTs can be decoded by anyone
//They can only be verified by the server that issued them
const path=require('path')
const express=require("express")
const cors=require("cors")
const app=express()
const jwt=require("jsonwebtoken")
const port=3000
app.use(express.json())
app.use(cors())

//Type Checking
const zod=require("zod")
const User=zod.object({
    username:zod.string().min(3).max(100),
    password:zod.string().min(3).max(100),
})

//Password hashing
const bcrypt=require('bcrypt');

//Mongoose connection
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sanjaybiju10:YzUGkPdoNdAmsjI5@cluster0.ttppwzd.mongodb.net/todo-app')
const {UserModel}=require('./db')

const JWT_SECRET="sanislearning"

app.post('/signup',async function(req,res){
    const val=User.safeParse(req.body)
    if(!val.success){
        return res.json({response:"Enter valid username and password"})
    }
    const username=req.body.username;
    const password=req.body.password;
    const hashedPass=await bcrypt.hash(password,5) //5 is the number of hashrounds
    let UserExists=await UserModel.findOne({
        username:username
    })
    if (UserExists){
        return res.status(401).json({
            response:"The user already exits"
        })
    }
    const newUser=await UserModel.create({
        username:username,
        password:hashedPass,
        todos:[]
    })
    res.json({
        response:"User created successfully",
        user:newUser
    }) 
})

//Backend routes
app.post('/signin',async function(req,res){
    const val=User.safeParse(req.body)
    if(!val.success){
        return res.json({response:"Enter valid username and passwords"})
    }
    let username=req.body.username;
    let password=req.body.password;
    try{
    let user=await UserModel.findOne({
        username:username,
    })
    if(!user){
        return res.status(401).json({
            response:"User does not exist"
        })
    }
    let val=await bcrypt.compare(password,user.password)
    if(!(user && val)){
        return res.status(401).json({   //We are sending the status code to prevent wrong logins from proceeding
            response:"Incorrect username or password"
        });
    }
    let token=jwt.sign({username: user.username},JWT_SECRET)
    user.token=token
    res.send({
        response:"Congratulations on signing in",
        token:token
    })
    }
    catch(err){
        console.log(err)
        return res.status(401).json({ response: "Incorrect username or password" })
    }
})

function auth(req,res,next){ //This does not require change
    let token=req.headers.token
    try{
    let user=jwt.verify(token,JWT_SECRET)
    if (user){
        req.userId=user.username
        next()
    }
    else{
        res.send("Failed to authenticate properly");
    }
    }
    catch(e){
        console.log(e)
        return res.status(403).send("Authentication failed");
    }
}

//Get todos
app.get('/todo',auth,async function(req,res){
    let user=await UserModel.findOne({
        username:req.userId
    })
    res.send(user.todos)
})

//Add todos
app.post('/todo',auth,async function(req,res){
    let user=await UserModel.findOne({username:req.userId})
    let title=req.body.title;
    let id=req.body.id;
    user.todos.push({
        title:title,
        id:id
    })
    await user.save();
    res.send("Task Added");
})

app.delete('/todo',auth,async function(req,res){
    let user=await UserModel.findOne(
        {username:req.userId}
    )
    let id=req.body.id;
    if (!user){
        return res.status(404).send("User not found");
    }
    user.todos=user.todos.filter(task=>task.id!==id)
    await user.save();

    res.send(user.todos);
})


app.listen(port,function(){
    console.log("The server is running");
})