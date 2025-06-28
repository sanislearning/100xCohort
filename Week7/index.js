const bcrypt=require("bcrypt")
const express=require("express")
const app=express()
const {UserModel,TodoModel}=require("./db");
app.use(express.json())
const jwt=require("jsonwebtoken")
const SECRET_KEY="sanislearning"
const mongoose=require("mongoose")
const { z }=require("zod")
mongoose.connect("mongodb+srv://sanjaybiju10:YzUGkPdoNdAmsjI5@cluster0.ttppwzd.mongodb.net/todo-app-database")

app.post('/signup',async function(req,res){
    const requiredBody=z.object({       //You need to create this first
        email:z.string().email().min(2).max(100),
        name:z.string().min(1).max(100),
        password:z.string().min(3).max(100)
    })
    const typeStatus=requiredBody.safeParse(req.body)
    if(!typeStatus.success){
        res.json({
            message:"Incorrect Format",
            error:typeStatus.error
        })
        return
    }
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name
    try{
        const hashedPassword=await bcrypt.hash(password,5)
        console.log(hashedPassword)
        await UserModel.create({
            email:email,
            password:hashedPassword,
            name:name
        })
        
    }
    catch(e){
        console.log(e)
        res.json({
            response:"User already exists"
        })
    }
    res.json({
            message:"You are signed up"
        })
})


app.post('/signin',async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const response=await UserModel.findOne({
        email:email
    })
    if(!response){
        res.status(403).json({
            response:"User does not exist"
        })
        return
    }
    const passwordMatch=await bcrypt.compare(password,response.password)
    if (passwordMatch){
        const token=jwt.sign({
            id: response._id
        },SECRET_KEY)

        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
})


async function auth(req,res,next){
    let token=req.headers.token
    let decodedID=jwt.verify(token,SECRET_KEY)
    let user=await UserModel.findOne({
        _id:decodedID.id
    })
    if(user){
        req.userId=decodedID.id

        next()
    }
    else{
        res.json({
            response:"You are not signed in"
        })
    }
}

app.post('/tasks',auth,async function(req,res){
    let id=req.userId
    let title=req.body.title
    done=req.body.done
    await TodoModel.create({
        title:title,
        done:done,
        userId:id
    })
    res.json({
        response:"The task has been successfully created"
    })
})

app.get('/tasks',auth, async function(req,res){
    let id=req.userId
    let tasks=await TodoModel.find({
        userId:id
    })
    console.log(tasks)
    res.send(tasks)
})

app.listen(3000);