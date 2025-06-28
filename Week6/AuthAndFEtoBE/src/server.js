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

JWT_SECRET="sanislearning"
users=[]

//Frontend Routes
app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,"assets/signup.html"))
})

app.get('/signin',function(req,res){
    res.sendFile(path.join(__dirname,"assets/signin.html"))
})

app.get('/dashboard',function(req,res){
    res.sendFile(path.join(__dirname,"assets/dashboard.html"))
})

app.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    let UserExists=users.find(function(user){
        return user.username===username;
    })
    if (UserExists){
        return res.status(401).json({
            response:"The user already exits"
        })
    }
    users.push({
        username:username,
        password:password,
        todo:[]
    })
    res.send(users)
})

//Backend routes
app.post('/signin',function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    let user=users.find(function(user){
        return user.username==username && user.password==password;
    })
    if(!user){
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
})

app.get('/todo',function(req,res){
    let token=(req.headers.token)
    let user=users.find(function(user){
        return token===user.token
    })
    res.send(user.todo)
})
app.post('/todo',function(req,res){
    let token=req.headers.token
    let user=users.find(function(user){
        return token===user.token
    })
    let title=req.body.title;
    let id=req.body.id;
    user.todo.push({
        title:title,
        id:id
    })
    res.send("Task Added")
})

app.delete('/todo',function(req,res){
    let token=req.headers.token
    let user=users.find(function(user){
        return token===user.token
    })
    let id=req.body.id;
    let index=user.todo.findIndex(function(task){
        return id===task.id;
    })
    user.todo.splice(index,1)
    res.send(user.todo)
})


app.listen(port,function(){
    console.log("The server is running");
})