const express=require('express');
const jwt=require("jsonwebtoken") //required to get jwts workin
const app=express();
const port=3000;
app.use(express.json());
const JWT_SECRET='SanisLearning'

let users=[];

function generateToken(){
    let val=Math.random()
    return val;
}
app.post('/signup',function(req,res){
    let username=req.body.username;
    let password=req.body.password;


    users.push({
        "username":username,
        "password":password
    })
    res.json({
        message:"You are signed up"
    })
})

app.post('/signin',function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    const user=users.find(function(user){
        return user.username===username&& user.password===password;
    })
    if (!user){
        res.send("wrong password")
    }
    const token=jwt.sign({
        username:username
    },JWT_SECRET); //Encodes the username using jwt.sign

    user.token=token
    res.json({
        token:token
    })
})

app.get('/me',function(req,res){
    let token=req.headers.token;
    let decodeInfo=jwt.verify(token,JWT_SECRET); //Decodes the username using jwt.verify
    let decodedUser=decodeInfo.username
    user=users.find(function(user){
        return user.username===decodedUser
    })
    res.json({
        username:user.username,
        password:user.password
    })
})

app.listen(3000,function(){
    console.log("The server is running")
})