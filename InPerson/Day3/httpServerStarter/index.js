const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/hello',function(req,res){
    res.send("Hey boss, I am alive");
})

app.listen(port,()=>{
    console.log(`Hi there, I am listening ${port}`)
})
