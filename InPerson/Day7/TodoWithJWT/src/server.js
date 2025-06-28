const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
const jwt=require("jsonwebtoken")
const JWT_SECRET="sanislearning"
const users=[]
const port=3000

app.post("/signup",function(req,res){
    const username=req.body.username
    const password=req.body.password
    let user=users.find(function(user){
        return user.username===username
    })
    if(user){
        res.json({
            response:"The user already exists"
        })
    }
    else{
        users.push({
            username:username,
            password:password,
            todos:[]
        })
        res.json({
            response: "New user has been added"
        })
    }
})

app.post('/signin',function(req,res){
    const username=req.body.username
    const password=req.body.password
    let user=users.find(function(user){
        return user.username===username && user.password===password
    })
    if(user){
        let token=jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({
            token:token
        })
    }
    else{
        res.json({
            response:"You lack proper credentials"
        })
    }
})

app.get('/todo',function(req,res){
    let token=req.headers.token
    let decodedUser=jwt.verify(token,JWT_SECRET)
    let user=users.find(function(user){
        return user.username===decodedUser.username
    })
    if(user){
        res.send(user.todos)
    }
    else{
        res.send("Currently there are no tasks")
    }
})

app.post('/todo',function(req,res){
    let token=req.headers.token
    let task=req.body.task
    let decodedUser=jwt.verify(token,JWT_SECRET)
    let user=users.find(function(user){
        return user.username===decodedUser.username
    })
    user.todos.push(task)
    res.send(user.todos)
})


app.listen(port,function(){
    console.log("The server is up and running")
})

