const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
const jwt=require("jsonwebtoken")
let JWT_SECRET="sanislearning"
const port=3000
const users=[]
const blogs=[]

app.get("/",function(req,res){
    res.sendFile(__dirname+'/src/signup.html')
})

app.get('/signin',function(req,res){
    res.sendFile(__dirname+'/src/signin.html')
})

app.get('/blog',function(req,res){
    res.sendFile(__dirname+'/src/blog.html')
})

app.post("/signup",function(req,res){
    let username=req.body.username
    let password=req.body.password
    let name=req.body.name
    let UserExist=users.find(function(user){
        return user.username===username
    })
    if(UserExist){
        res.json({
            response:"The username is already in use"
        })
    }
    else{
        let id=Math.floor(1000+Math.random()*9000)
        users.push({
            id:id,
            username:username,
            password:password,
            name:name   
        })
        res.json({
            id:id,
            username:username,
            password:password,
            name:name
        })
    }
})

app.post("/signin",function(req,res){
    let username=req.body.username
    let password=req.body.password
    let UserExist=users.find(function(user){
        return user.username===username&&user.password===password
    })
    try {
        if(UserExist){ 
        let token=jwt.sign({username},JWT_SECRET)
        res.json({
            token:token
        })
        }
        else{
            res.json({
                response:"You lack proper credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
    

})

app.post("/create-blogs",function(req,res){
    let token=req.headers.token
    let decodedUser=jwt.verify(token,JWT_SECRET)
    let user=users.find(function(user){
        return user.username===decodedUser.username;
    })
    let id=Math.floor(1000+Math.random()*9000)
    let title=req.body.title
    let content=req.body.content
    let userId=user.id
    blogs.push({
        id:id,
        title:title,
        content:content,
        userId:userId
    })
    res.json({message:"Blog created successfully",
        blogs:blogs
    })
})

app.get("/blogs",function(req,res){
    let token=req.headers.token
    let decodedUser=jwt.verify(token,JWT_SECRET)
    let user=users.find(function(user){
        return user.username===decodedUser.username;
    })
    let userId=user.id
    let blogCollection=blogs.filter(function(blog){
        return blog.userId===userId
    })
    res.send(blogCollection)
})

app.get("/blogs/:id",function(req,res){
    let id=parseInt(req.params.id)
    let FoundBlog=blogs.find(function(blog){
        return blog.id===id
    })
    res.send(FoundBlog)
})

app.listen(port,function(){
    console.log("The server is up and running")
})