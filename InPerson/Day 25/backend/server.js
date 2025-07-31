const express=require('express')
const axios=require('axios')
const app=express()
const port=3000
const cors=require('cors')
const WebSocket=require('ws')
const {WebSocketServer}=require('ws')

app.use(cors())
app.use(express.json())

const {GoogleGenAI}=require('@google/genai')
require('dotenv').config();

const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY
const ai=new GoogleGenAI({apiKey:GOOGLE_API_KEY});

app.post('/chat',async function(req,res){
    try{
        const question=req.body.question
        const model=req.body.model
        if (!question){
            return res.status(400).json({
                error:"Missing question in request body."
            })
        }
        const response=await ai.models.generateContent({
            model:model,
            contents:[{
                role:'user',
                parts:[{
                    text:question
                }]
            }],
        });
        console.log(response.text)
        res.status(200).json({answer:response.text});
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            response:"Response not generated",
            error:error
        })
    }
})



const server=app.listen(3000,function(){
    console.log("The server is up and running")
})

const wss=new WebSocketServer({server:app})

wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        const {query}=JSON.parse(message)
        console.log('query is',query)
    })
})