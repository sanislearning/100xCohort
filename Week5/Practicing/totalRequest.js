const express=require("express");
const app=express();
const port=3000;

let requestCount=0;
function requestCounter(req,res,next){
    requestCount+=1;
    console.log(`The number of requests are ${requestCount}`);
    next()
}
app.use(requestCounter);

app.get('/',function(req,res){
    res.send("Hey");
})

app.get('/requestCount',function(req,res){
    res.send(`The current request count is ${requestCount}`)
})

app.listen(port,function(){
    console.log("Server is online");
})