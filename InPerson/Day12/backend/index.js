const express=require("express")
const app=express()

//JWT
const jwt=require("jsonwebtoken")
const SECRET_TOKEN="sanislearning"

//zod
const {z}=require('zod')
const requiredBody=z.object({
    name:z.string().max(100),
    username:z.string().min(2).max(100),
    password:z.string().min(3).max(100)
})

//Prisma
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient();
app.use(express.json())

//Bcrypt
const bcrypt=require('bcrypt')
//Middleware
const {auth}=require('./middleware')

app.post("/signup",async function(req,res){
    const typeStatus=requiredBody.safeParse(req.body)
    if(!typeStatus.success){
        return res.json({
            message:"Incorrect Format",
            error:typeStatus.error
        })
    }
    const name=req.body.name
    const username=req.body.username
    const password=req.body.password
    try{
    const hashedPass=await bcrypt.hash(password,5)
    let user=await prisma.user.create({
        data:{
            name:name,
            username:username,
            password:hashedPass,
        }
    })
    res.json({
        response:"A new user has been created"
    })
    }
    catch(err){
        console.log(err)
        return res.json({
            response:err
        })
    }
})

app.post("/signin",async function(req,res){
    const typeStatus=requiredBody.safeParse(req.body)
    if(!typeStatus.success){
        return res.status(404).json({
            response:"Incorrect format for credentials"
        })
    }
    const username=req.body.username
    const password=req.body.password
    let userFind=await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    if (!userFind){
        return res.status(404).json({
            response:"User not found"
        })
    }
    let passwordMatch=await bcrypt.compare(password,userFind.password)
    if (!passwordMatch){
        return res.status(401).json({response:"Invalid password"});
    }
    let token=jwt.sign({username:username},SECRET_TOKEN)
    res.json({
        token:token
    })
})

app.get("/todos",auth,async function(req,res){ //get all the todos for a user
    try{
        const username=req.username
        let user=await prisma.user.findUnique({
            where:{
                username:username
            }
        });
        if (!user){
            return res.status(404).json({
                response:"User not found"
            })
        }
        const tasks=await prisma.todo.findMany({
            where:{userId:user.id}
        })
        res.json({todos:tasks})
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            response:"Something has gone wrong"
        })
    }
})

app.post("/todos",auth,async function(req,res){ //add a todo for a user
    const username=req.username
    const title=req.body.title
    const desc=req.body.desc
    try{
        let user=await prisma.user.findUnique({
            where:{
                username:username
            }
        })
        const addTask=await prisma.todo.create({
            data:{
                title:title,
                content:desc,
                userId:user.id
            }
        })
        res.json(addTask)   
    }
    catch(err){
        res.status(404).json({
            response:"Unable to create todo",
            error:err
        })
    }
})

app.delete("/todos",auth,async function(req,res){ //delete a todo for a user
    try{
        const username=req.username
        const value=req.body.value
        let user=await prisma.user.findUnique({
            where:{
                username:username
            }
        })
        let deletedTodo= await prisma.todo.delete({
            where:{
                id:req.body.value,
                userId:user.id
            }
        })
        res.json({
            response:""
        })
    }
    catch(err){
        res.json({
            response:"Unable to delete",
            error:err
        })
    }
    
})

app.listen(3000,function(){
    console.log("The server is up and running")
})