const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())

const port=3000

//Routing
const quizRouter=require('./routes/quiz')
app.use('/quiz',quizRouter)

app.post('/signup',function(req,res){

})

app.post('/signin',function(req,res){

})

app.get('/profile',function(req,res){

})


app.listen(port,function(){
    console.log("The server is up and running")
})