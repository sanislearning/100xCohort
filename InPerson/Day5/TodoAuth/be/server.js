const express=require("express")
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const port=3000;

let users=[]
let currentCookies=[]

app.post("/signup",function(req,res){
    let username=req.body.username
    let password=req.body.password
    const userExists=users.find(function(user){
        return user.username===username;
    })
    if(userExists){
        return res.send("Username already exists")
    }
    users.push({
        "username":username,
        "password":password
    })
    res.send(users)
})

app.post("/signin",function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    const userExists=users.find(function(user){
        return user.username===username && user.password===password;
    })
    if(!userExists){
        return res.send("Invalid username or password")
    }
    let cookie=Math.random()
    currentCookies.push({
        "username":username,
        "cookie":cookie
    })
    res.send(currentCookies);
})

app.get("/username",function(req,res){
    let cookie=req.body.cookie
    const userSession=currentCookies.find(function(user){
        return user.cookie===cookie
    }
    )
    if (!userSession){
        res.send("Cookie is invalid")
    }
    res.send(userSession.username);
})

app.listen(3000,function(){
    console.log("The server is up and running")
})