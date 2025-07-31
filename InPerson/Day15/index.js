const express=require("express")
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors())

//Zod section
const {z}=require('zod')
const UserSchema=z.object({
    email:z.string().email().min(2).max(100),
    password:z.string().min(6).max(100),
    name:z.string().min(1).max(100)
})
//prisma
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient

//JWT section 
const jwt=require("jsonwebtoken")
const SECRET_KEY='sanislearning'

app.post('/signup',async function(res,req){
    try{
        const result=UserSchema.safeParse(req.body)
        const {email, password,name}=req.body
        const UserExists=await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if (UserExists){
            alert("User already exists")
            return res.json({
                response:"The user already exists"
            })
        }
        const newUser=await prisma.user.create({
            data:{
                email:email,
                name:name
            }
        })
    }
    catch (err){
        console.log(err)
        res.json({
            error:err
        })
    }
})

app.post('/login',async function(res,req){
})

app.get('/profile',async function(res,req){
})

app.get('/blogs',async function(res,req){
})

app.post('/blog',async function(req,res){

})

app.get('/blogs/:id', async function(res,req) {
    
})

app.delete('/blog',async function(req,res){
    
})

app.listen(3000,function(){
    console.log("The server is up and running.")
})