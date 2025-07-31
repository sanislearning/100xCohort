const express=require("express")
const app=express()
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient();

app.get("/all",async function(req,res){
    console.log("hey")
    res.json()
})

app.post("/all",async function(req,res){
    res.json()
})

app.delete("")

app.listen(3000,function(){
    console.log("The server is up and running")
})