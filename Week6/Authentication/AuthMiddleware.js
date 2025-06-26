const express=require("express")
const path=require('path')
const app=express()
const jwt=require('jsonwebtoken')
const port=3000
const cors=require("cors")
app.use(cors())
app.use(express.json())
const JWT_SECRET="sanislearning"

const users=[]
//Frontend Routes
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"))
})

//Backend Routes
app.post("/signup",function(req,res){
    let username=req.body.username
    let password=req.body.password
    users.push({
        username:username,
        password:password
    })
    console.log(users)
    res.send(users)
})

app.post("/signin",function(req,res){
    let username=req.body.username
    let password=req.body.password
    let user=users.find(function(user){
        return user.username===username && user.password===password
    })
    if (!user){
        res.json({
            message:"Credentials are wrong"
        })
        return
    }
    else{
        const token=jwt.sign({
            username
        },JWT_SECRET)
        console.log(token)
        res.json({
            token:token
        })
    }
})

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    let user=users.find(function(user){
        return user.username===decodedData.username
    })
    if (user.username){
        req.username=user.username
        next()
    }
    else{
        res.json({
            Message:"Authentication failed"
        })
    }

}
app.get("/me",auth,function(req,res){
    let user=users.find(function(user){
        return user.username===req.username
    })
    res.json({
        username:user.username,
        password:user.password
    })
})

app.listen(3000,function(){
    console.log("The server is up and running")
})